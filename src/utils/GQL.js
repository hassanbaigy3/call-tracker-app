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

export const ADD_NOTE_MUTATION = gql`
  mutation AddNote($activityId: ID!, $content: String!) {
    addNote(input: { activityId: $activityId, content: $content }) {
      id
      notes {
        id
        content
      }
    }
  }
`;

export const ARCHIVE_CALL_MUTATION = gql`
  mutation ArchiveCall($id: ID!) {
    archiveCall(id: $id) {
      is_archived
    }
  }
`;

export const GET_CALL = gql`
  query GetCall($id: ID!) {
    call(id: $id) {
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
      totalCount
      hasNextPage
    }
  }
`;

export const CALL_SUBSCRIPTION = gql`
  subscription OnUpdatedCall($id: ID!) {
    onUpdatedCall(id: $id) {
      is_archived
      notes {
        id
        content
      }
    }
  }
`;
