import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

 // On ajoute des headers à la requête
 const token = localStorage.getItem('token');

 const clone = req.clone({
   setHeaders: {
     'custom-m2i-token': token || ''
   }
 });
  
  return next(req);


};
