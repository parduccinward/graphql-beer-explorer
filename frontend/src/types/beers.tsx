interface IBeer {
  name: string;
  type: string;
  alcohol_by_volume: number;
  brewery_name: string;
}

export interface IGetBeerResponse {
  beer: IBeer;
}

export interface IGetBeerVariables {
  beerName: string;
}
