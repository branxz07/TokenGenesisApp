// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const prefersDark = localStorage.getItem('dark-theme') === 'true';
    if (prefersDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('white-theme');
    }

    this.redirectBasedOnUserStatus();
  }

  private redirectBasedOnUserStatus() {
    this.router.navigateByUrl('/loading');

    if (this.authService.isAuthenticated()) {setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 5000); // Simula un retraso de carga
    } else {
      
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 5000); // Simula un retraso de carga
    }
  }
}
