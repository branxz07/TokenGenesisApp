import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = {
    username: 'user',
    password: 'password'
  };

  constructor() { }

  // Simulate authentication with mock data
  authenticate(username: string, password: string): Observable<any> {
    const isAuthenticated = username === this.mockUser.username && password === this.mockUser.password;
    return of({ success: isAuthenticated });
  }
}
