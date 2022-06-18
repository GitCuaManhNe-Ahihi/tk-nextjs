import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
   addUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`
