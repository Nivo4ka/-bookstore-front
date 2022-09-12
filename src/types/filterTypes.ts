export interface IGenre {
  name: string;
  isCheck: boolean;
}

export interface IPrice {
  min: number;
  max: number;
}

export interface ISort {
  title: string;
  currentValue: string;
}

export interface ISortBy {
  arrSort: ISort[];
  direction: 'asc' | 'desc';
  selectedSort: string;
}

export interface IFilter {
  genres: IGenre[];
  price: IPrice;
  sortBy: ISortBy;
  search: string;
  page: string;
  pageSize: string;
}

export interface IFilterRequest {
  genres?: string;
  minPrice: string;
  maxPrice: string;
  sortBy: string;
  page?: string;
  pageSize?: string;
  direction: 'asc' | 'desc';
  search?: string;
}
