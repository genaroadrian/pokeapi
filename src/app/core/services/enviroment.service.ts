import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Injectable({ providedIn: 'root' })
export class EnviromentService {
  private env = environment;

  get(key: keyof typeof environment) {
    return this.env[key];
  }
}
