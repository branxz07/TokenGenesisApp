import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  user: any;  // Variable para almacenar la información del usuario

  constructor(private router: Router, private authService: AuthService) { } // Inyecta el AuthService

  ngOnInit() {
    this.user = this.authService.getUser();  // Obtén la información del usuario desde el AuthService
  }
  logout() {
    this.authService.clearUser();  // Elimina la información del usuario
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload(); });
  }

  home() {
    this.router.navigateByUrl('/home');
  }

}
