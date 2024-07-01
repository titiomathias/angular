import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(name: any, password: any): boolean {
    if (name == 'admin' && password == '2077') {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');  // Armazena a sessão no localStorage
      this.router.navigate(['/painel']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
