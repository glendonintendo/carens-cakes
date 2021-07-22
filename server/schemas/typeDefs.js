const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type CakeFlavor {
    _id: ID
    name: String
    description: String
    image: String
  }

  type Frosting {
    _id: ID
    name: String
    description: String
    image: String
  }

  type Decoration {
    _id: ID
    name: String
    description: String
    image: String
  }

  type CakeType {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
  }

  type Query {
    user: User
    cakeFlavors: [CakeFlavor]
    cakeTypes(category: ID, name: String): [CakeType]
    frostings: [Frosting]
    decorations: [Decoration]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
