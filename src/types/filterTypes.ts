export type GenreType = {
  name: string;
  isCheck: boolean;
};

export type PriceType = {
  min: number;
  max: number;
};

export type SortType = {
  title: string;
  currentValue: string;
};
export type DirectionType = 'asc' | 'desc';

export type SortByType = {
  arrSort: SortType[];
  direction: DirectionType;
  selectedSort: string;
};

export type FilterType = {
  genres: GenreType[];
  price: PriceType;
  sortBy: SortByType;
  search: string;
  page: string;
  pageSize: string;
};

export type FilterRequestType = {
  genres?: string;
  minPrice: string;
  maxPrice: string;
  sortBy: string;
  page?: string;
  pageSize?: string;
  direction: DirectionType;
  search?: string;
};
