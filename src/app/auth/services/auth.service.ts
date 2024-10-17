import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_KEY = 'isAuthenticated';

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'jordy' && password === 'innclod') {
      localStorage.setItem(this.AUTH_KEY, 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }
}
