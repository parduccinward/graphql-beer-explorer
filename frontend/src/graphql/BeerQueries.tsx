import { gql } from "@apollo/client";

export const GET_BEERS = gql`
  query GetBeers($search: String!) {
    beers(search: $search) {
      name
    }
  }
`;
