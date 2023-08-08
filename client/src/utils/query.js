import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query products($productType: String) {
    products(type: $productType) {
      _id
      name
      price
      type
      image
      link
      description
      reviews {
        _id
        reviewText
        createdAt
        user
      }
    }
  }
`;