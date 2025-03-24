import { CanActivateFn } from '@angular/router';

export const securityGuard: CanActivateFn = (route, state) => {
  console.log('securityGuard a sido disparado');
  return true;
};
