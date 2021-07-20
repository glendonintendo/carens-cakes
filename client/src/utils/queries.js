import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_CAKES = gql`
  query cakes($category: ID) {
    cakes(category: $category) {
      _id
      name
      description
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_CAKES = gql`
  {
    cakes {
      _id
      name
      description
      image
      category {
        _id
      }
    }
  }
`; 