import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { setContext } from "@apollo/client/link/context";
import { baseGQLUrl, wsBaseGQLUrl } from "../utils/URLS";
import { createClient } from "graphql-ws";

import { CONSTANTS } from "../utils/CONSTANTS";
import { getMainDefinition } from "apollo-utilities";

const httpLink = createHttpLink({
  uri: baseGQLUrl,
});

const wsLink = new GraphQLWsLink(
  createClient({
    uri: wsBaseGQLUrl,
    connectionParams: {
      authToken: localStorage.getItem(CONSTANTS.AUTH_TOKEN),
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(CONSTANTS.AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
