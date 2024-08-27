// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dashboard: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.checkUserPriority();
  }

  private checkUserPriority() {
    const user = this.authService.getUser();
    if (user) {
      const priority = this.authService.getUserrityPrio(user.tokenDigIdentity);
      this.dashboard = (priority === 10);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  onAddInfo() {
    console.log('Agregar información');
  }

  logout() {
    this.authService.clearUser();  // Elimina la información del usuario
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload(); });
  }
  dash() {
    this.router.navigateByUrl('/dashboard');
  }
}
