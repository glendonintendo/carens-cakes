import { gql } from "@apollo/client";

export const QUERY_CAKE_TYPES = gql`
  {
    cakeTypes {
      _id
      name
      description
      image
      price
    }
  }
`;

export const QUERY_CAKE_FLAVORS = gql`
  {
    cakeFlavors {
      _id
      name
      description
      image
    }
  }
`;

export const QUERY_DECORATIONS = gql`
  {
    decorations {
      _id
      name
      description
      image
    }
  }
`;

export const FROSTINGS = gql`
  {
    frostings {
      _id
      name
      description
      image
    }
  }
`;
