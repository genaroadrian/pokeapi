import { DEFAULT_LIMIT } from '@core/constants/default-limit';
import { IPagination } from '@core/interfaces/pagination.interface';

export class Pagination implements IPagination {
  constructor(public total: number = DEFAULT_LIMIT) {}
}
