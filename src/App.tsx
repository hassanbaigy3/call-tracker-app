import { Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import ProtectedRoute from "./components/protected-route.component";
import Login from "./pages/login.page";
import Home from "./pages/home.page";

import { CONSTANTS } from "./utils/CONSTANTS";
import { baseGQLUrl } from "./utils/URLS";

import "./App.css";

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client as any}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute componentToPassDown={<Home />} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
