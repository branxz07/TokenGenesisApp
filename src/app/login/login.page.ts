// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  tokenDigIdentity: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  async onLogin() {
    const user = this.authService.authenticate(this.email, this.password, this.tokenDigIdentity);

    if (user) {
      this.authService.setUser(user);  // Guarda el usuario en localStorage
      this.router.navigateByUrl('/home');
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid credentials. Please try again.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
