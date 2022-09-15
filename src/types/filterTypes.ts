export type GenreType = {
  name: string;
  id: number;
};

export type GenresResponseType={
  genres: GenreType[];
};

export type FilterType = {
  genres: GenreType[];
  arrSort: SortType[];
};

export type SortType = {
  title: string;
  currentValue: string;
};
export type DirectionType = 'asc' | 'desc';

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
