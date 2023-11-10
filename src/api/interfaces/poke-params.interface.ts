import { HttpParams } from '@angular/common/http';

export interface IPokeParams {
  limit: number;
  page: number;
  getParams: () => HttpParams;
}
