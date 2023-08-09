import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query getProducts {
  products {
    name
    price
    type
    image
    link
    description
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