import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private logoutTimer: any;
  private readonly TIMEOUT_DURATION = 15 * 60 * 1000; // 15 minutos em milissegundos

  constructor(private router: Router) {}

  login(name: any, password: any): boolean {
    if (name == 'admin' && password == '2077') {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true'); 
      this.startLogoutTimer();
      this.router.navigate(['/painel']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    this.clearLogoutTimer();
    this.router.navigate(['/login']);
  }

  private startLogoutTimer() {
    this.clearLogoutTimer();
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, this.TIMEOUT_DURATION);
  }

  private clearLogoutTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
  }

  resetLogoutTimer() {
    this.startLogoutTimer();
  }


  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
