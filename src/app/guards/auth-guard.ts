import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/utils/local-storage.service';
import { AuthService } from '../services/auth/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.IsAuthenticated()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
