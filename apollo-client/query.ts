import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers{
    users{
      id
      name
      email
      password
    }
  }
`;
const GET_USER = gql`
  query GetUser($id: ID!){
    user(id: $id){
      id
      name
      email}
  }
  `

export {GET_USERS,GET_USER}
