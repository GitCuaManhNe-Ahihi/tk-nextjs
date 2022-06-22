import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      password
    }
  }
`;
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phonenumber
      address
    }
  }
`;
const GET_MODES = gql`
  query GetModes {
    modes {
      id
      name
    }
  }
`;
const GET_MODE = gql`
  query GetMode($id: ID!) {
    mode(id: $id) {
      id
      name
      description
    }
  }
`;

const GET_SHOPS = gql`
  query GetShops {
    shops {
      id
      name
    }
  }
`;
const GET_SHOP = gql`
  query Shop($shopId: ID!) {
    shop(id: $shopId) {
      id
      name
      address
      phonenumber
      email
      createdAt
      description
      user {
        name
      }
      products {
        id
        name
        image
        price
      }
    }
  }
`;

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      address
      phonenumber
      accessToken
    }
  }
`;

const GET_ALLMODE = gql`
  query Modes {
    modes {
      id
      name
      url
      products {
        id
        name
        image
        price
      }
    }
  }
`;
const GET_ALLPRODUCT = gql`
  query getAllProduct {
    products {
      id
      made
      name
      description
      color
      image
      storage
      price
      shop {
        id
        name
        email
        phonenumber
        address
      }
      same {
        id
        name
        image
        price
      }
    }
  }
`;
const GET_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(id: $productId) {
      id
      made
      name
      description
      image
      storage
      color
      price
      shop {
        id
        name
        email
        phonenumber
        address
      }
      same {
        id
        name
        image
        price
      }
    }
  }
`;
export {
  GET_USERS,
  GET_USER,
  GET_MODES,
  LOGIN,
  GET_SHOP,
  GET_ALLMODE,
  GET_ALLPRODUCT,
  GET_PRODUCT,
  GET_SHOPS,
};
