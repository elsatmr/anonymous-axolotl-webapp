export interface IBeer {
  beerName: string;
  appearance: string;
  aroma: string;
  mouthfeel: string;
  taste: string;
}

export interface IBeerSearch {
  id: number;
  name: string;
  abv: number;
  brewerId: number;
  style: {
    style: string;
  };
}
