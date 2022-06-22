import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;
export const CREATE_MODE = gql`
  mutation CreateMode($name: String!, $description: String!, $file: Upload) {
    addMode(name: $name, description: $description, file: $file) {
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ChangeUser(
    $name: String
    $phonenumber: String
    $address: String
    $id: ID!
  ) {
    changeUser(
      name: $name
      phonenumber: $phonenumber
      address: $address
      id: $id
    ) {
      id
      name
    }
  }
`;
export const CREATE_SHOP = gql`
  mutation addShop(
    $name: String!
    $userId: ID!
    $email: String
    $phonenumber: String
    $address: String
    $description: String
  ) {
    addShop(
      name: $name
      userId: $userId
      email: $email
      phonenumber: $phonenumber
      address: $address
      description: $description
    ) {
      name
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation AddProduct(
    $color: String
    $description: String
    $file: Upload
    $storage: String
    $made: String
    $modeId: ID
    $name: String
    $price: Float
    $shopId: ID
  ) {
    addProduct(
      color: $color
      description: $description
      file: $file
      storage: $storage
      made: $made
      modeId: $modeId
      name: $name
      price: $price
      shopId: $shopId
    ) {
      name
    }
  }
`;
