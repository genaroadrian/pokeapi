import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  $loading = new BehaviorSubject(false);

  load() {
    this.$loading.next(true);
  }

  unload() {
    this.$loading.next(false);
  }
}
