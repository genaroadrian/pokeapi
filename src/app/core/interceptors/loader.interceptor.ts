import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { Observable, finalize } from 'rxjs';
let requestCount = 0;
export function loaderInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const loader = inject(LoaderService);
  requestCount++;
  loader.load();
  return next(req).pipe(
    finalize(() => {
      requestCount--;
      if (requestCount == 0) {
        loader.unload();
      }
    })
  );
}
