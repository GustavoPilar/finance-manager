import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from '../services/utils/local-storage.service';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/authentication.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);

  const token = authService.GetToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
