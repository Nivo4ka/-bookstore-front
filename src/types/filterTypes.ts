export type GenreType = {
  name: string;
  id: number;
};

export type GenresType = {
  genres: GenreType[];
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
