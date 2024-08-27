import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  isDarkTheme = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // Check user's theme preference on initialization
    const prefersDark = localStorage.getItem('dark-theme') === 'true';
    this.isDarkTheme = prefersDark;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  logout() {
    this.authService.clearUser();  // Elimina la información del usuario
    this.router.navigateByUrl('/login').then(() => {window.location.reload(); });
  }

  home() {
    this.router.navigateByUrl('/home');
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    
    if (this.isDarkTheme) {
      document.body.classList.remove('white-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('white-theme');
    }
  
    localStorage.setItem('dark-theme', this.isDarkTheme.toString());
  }
  
}

