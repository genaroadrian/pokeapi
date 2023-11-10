export interface IPaginatedResponse<T> {
  count: number;
  next: string;
  previous: null;
  results: T[];
}
