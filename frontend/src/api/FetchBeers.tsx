import { GET_BEERS } from "../graphql/BeerQueries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { IGetBeerResponse, IGetBeerVariables } from "../types/beers";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export async function fetchBeer(search: string) {
  const { data } = await client.query<IGetBeerResponse, IGetBeerVariables>({
    query: GET_BEERS,
    variables: { search: search },
  });

  return data.beers;
}
