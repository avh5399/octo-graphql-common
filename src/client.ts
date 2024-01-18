// import gql from "graphql-tag";
import { GraphQLClient } from "graphql-request";
import { RESTDataSource } from '@apollo/datasource-rest';
import { GET_REPOSITORY_INFO } from "./schema";
import { GetRepoInfoQuery, GetRepoInfoQueryVariables } from "types/__generated__/graphql";

export class GihubAPI extends RESTDataSource{
  private client: GraphQLClient;

  constructor(accessToken: string) {
    super()
    this.client = new GraphQLClient('https://api.github.com/graphql');
    this.client.setHeaders({
      'Authorization': `Bearer ${accessToken}`,
    });
  }

  public getRepoInfo = async (
    variables: GetRepoInfoQueryVariables
  ) => {
    return this.client.request<GetRepoInfoQuery>(
      GET_REPOSITORY_INFO, 
      variables
    )
  }
//   // )

// }
