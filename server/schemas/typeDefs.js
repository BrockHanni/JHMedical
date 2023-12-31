const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    username: String
    password: String
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    user: String
  }

  type Product {
    _id: ID
    name: String
    price: Int
    type: String
    image: String
    link: String
    description: String
    reviews: [Review!]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    products: [Product]!
    productsByType(type: String!): [Product]!
    product(productId: ID!): Product
  }

  type Mutation {
    addProfile(name: String!, username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth

    removeProfile: Profile
    
  }
`;

module.exports = typeDefs;
