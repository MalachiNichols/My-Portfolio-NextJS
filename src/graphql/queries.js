/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDrummers = /* GraphQL */ `
  query GetDrummers($id: ID!) {
    getDrummers(id: $id) {
      id
      name
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDrummers = /* GraphQL */ `
  query ListDrummers(
    $filter: ModelDrummersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrummers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
