export interface IBeer {
  name: string;
  type: string;
  alcoholByVolume: number;
  breweryName: string;
}

export interface IGetBeerResponse {
  beers: IBeer[];
}

export interface IGetBeerVariables {
  search: string;
}

export interface IBeerTableProps {
  beers: IBeer[];
}

export interface ISearchBarProps {
  setArrayOfBeers: React.Dispatch<React.SetStateAction<IBeer[]>>;
}
