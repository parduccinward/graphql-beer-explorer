import { gql } from "@apollo/client";

export const GET_BEERS = gql`
  query {
    beers(search: $search) {
      name
    }
  }
`;
