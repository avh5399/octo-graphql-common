import gql from "graphql-tag";

export const GET_REPOSITORY_INFO = gql(/* GraphQL */ `
    query GetRepoInfo($owner: String!, $name: String!){
        repository(owner: $owner, name: $name){
          isArchived
          isPrivate
          nameWithOwner
          url
        }
    }
`);
