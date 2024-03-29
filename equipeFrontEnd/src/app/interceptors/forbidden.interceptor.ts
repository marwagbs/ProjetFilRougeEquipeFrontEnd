import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const forbiddenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(e => {
      console.error(e);

      if (e instanceof HttpErrorResponse) {
        if (e.status == 401) {
          alert('Une 401 est survenue! A vous développeurs de vous brancher sur le service de login.');
        }
      }

      return of(e);
    })
  );
};
