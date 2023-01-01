import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { baseGQLUrl } from "../utils/URLS";

import { CONSTANTS } from "../utils/CONSTANTS";

const httpLink = createHttpLink({
  uri: baseGQLUrl,
});

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
