import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
  products {
      _id
      name
      price
      type
  }
}
`;

export const QUERY_PRODUCTS_BY_TYPE = gql`
  query getProductsByType($productType: String) {
    productsByType(type: $prductType) {
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