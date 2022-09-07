export interface IGenre {
  name: string;
  isCheck: boolean;
}

export interface IPrice {
  min: number;
  max: number;
}

export interface ISortBy {
  arrSort: string[];
  direction: 'asc' | 'desc';
  selectedSort: string;
}

export interface IFilter {
  genres: IGenre[];
  price: IPrice;
  sortBy: ISortBy;
}
