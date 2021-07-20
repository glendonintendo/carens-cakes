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

  type Category {
    _id: ID
    name: String
  }

  type Cake {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
  }

  type Query {
    user: User
    categories: [Category]
    cakes(category: ID, name: String): [Cake]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
  }
`;

module.exports = typeDefs;
