import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      access_token
      refresh_token
      user {
        id
        username
      }
    }
  }
`;

export const GET_CALLS = gql`
  query GetCalls($offset: Float!, $limit: Float!) {
    paginatedCalls(offset: $offset, limit: $limit) {
      nodes {
        id
        direction
        from
        to
        duration
        via
        is_archived
        call_type
        created_at
        notes {
          id
          content
        }
      }
    }
  }
`;
