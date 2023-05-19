interface IBeer {
  name: string;
  type: string;
  alcohol_by_volume: number;
  brewery_name: string;
}

export interface IGetBeerResponse {
  beers: IBeer;
}

export interface IGetBeerVariables {
  search: string;
}
