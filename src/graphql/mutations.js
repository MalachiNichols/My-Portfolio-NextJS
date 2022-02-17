/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDrummers = /* GraphQL */ `
  mutation CreateDrummers(
    $input: CreateDrummersInput!
    $condition: ModelDrummersConditionInput
  ) {
    createDrummers(input: $input, condition: $condition) {
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
export const updateDrummers = /* GraphQL */ `
  mutation UpdateDrummers(
    $input: UpdateDrummersInput!
    $condition: ModelDrummersConditionInput
  ) {
    updateDrummers(input: $input, condition: $condition) {
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
export const deleteDrummers = /* GraphQL */ `
  mutation DeleteDrummers(
    $input: DeleteDrummersInput!
    $condition: ModelDrummersConditionInput
  ) {
    deleteDrummers(input: $input, condition: $condition) {
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
