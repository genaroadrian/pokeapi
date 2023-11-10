import { HttpParams } from '@angular/common/http';
import { IPokeParams } from '@api/interfaces/poke-params.interface';
import { DEFAULT_LIMIT } from '@core/constants/default-limit';

export class PokeParams implements IPokeParams {
  limit = DEFAULT_LIMIT;
  page = 1;

  getParams() {
    const offset = this.page - 1 ? (this.page - 1) * this.limit : 0;
    const params = new HttpParams()
      .append('limit', this.limit)
      .append('offset', offset);
    return params;
  }
}
