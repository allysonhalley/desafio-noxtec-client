// auth.service.ts
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth = false;

  constructor(private router: Router) {}

  login() {
    this.isAuth = true;
    this.router.navigate(['/contatos']);
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
