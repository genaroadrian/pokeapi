import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { IPaginatedResponse } from '@api/interfaces/paginated-response.interface';
import { EnviromentService } from '@core/services/enviroment.service';

interface IRequestBaseOptions {
  url?: string;
  params?: HttpParams;
}

interface IGetOptions extends IRequestBaseOptions {}

interface IPostOptions extends IRequestBaseOptions {
  body: any;
}

interface IPutOptions extends IPostOptions {}

interface IDeleteOptions extends IRequestBaseOptions {}

export class Repository<T = any> {
  private readonly route: string;
  protected readonly httpClient = inject(HttpClient);
  private env = inject(EnviromentService);
  constructor(protected path: string = '') {
    this.route = `${this.env.get('API_URL')}`;
  }

  getAllPaginated<J = T>(params?: HttpParams) {
    const fullRoute = this.buildPath();
    return this.httpClient.get<IPaginatedResponse<J>>(fullRoute, { params });
  }

  getById<J = T>(id: number | string) {
    const fullRoute = this.buildPath();
    return this.httpClient.get<J>(`${fullRoute}/${id}`);
  }

  create(formData: Object) {
    const fullRoute = this.buildPath();
    return this.httpClient.post<T>(`${fullRoute}`, formData);
  }

  update(id: number, formData: Object) {
    const fullRoute = this.buildPath();
    return this.httpClient.put(`${fullRoute}/${id}`, formData);
  }

  remove(id: number) {
    const fullRoute = this.buildPath();
    return this.httpClient.delete(`${fullRoute}/${id}`);
  }

  protected get<I = any>(options?: IGetOptions) {
    const { url, params = new HttpParams() } = options || {};
    const fullRoute = this.buildPath(url);
    return this.httpClient.get<I>(fullRoute, { params });
  }

  protected post<I = any>(options?: IPostOptions) {
    const { url, params = new HttpParams(), body } = options || {};
    const fullRoute = this.buildPath(url);
    return this.httpClient.post<I>(fullRoute, body, { params });
  }

  protected put<I = any>(options?: IPutOptions) {
    const { url, params = new HttpParams(), body } = options || {};
    const fullRoute = this.buildPath(url);
    return this.httpClient.put<I>(fullRoute, body, { params });
  }

  protected delete<I = any>(options?: IDeleteOptions) {
    const { url, params = new HttpParams() } = options || {};
    const fullRoute = this.buildPath(url);
    return this.httpClient.delete<I>(fullRoute, { params });
  }

  private buildPath(route?: string) {
    if (!route) {
      return `${this.route}${this.path}`;
    }

    return `${this.route}${this.path}/${route}`;
  }
}
