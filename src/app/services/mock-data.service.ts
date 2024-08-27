import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private users = [
    { email: 'user@a.com', username: 'user', password: 'p123', token: 'abc123', priority: 10 },
    { email: 'user@b.com', username: 'user', password: 'p123', token: '123abc', priority: 5 },
    { email: 'user@c.com', username: 'user', password: 'p123', token: '1a2b3c', priority: 1 }
    // Add more mock users as needed
  ];

  constructor() {}

  authenticate(email: string, username: string, password: string, token: string) {
    const user = this.users.find(user =>
      user.email === email &&
      user.username === username &&
      user.password === password &&
      user.token === token
    );
    return user || null;
  }

  getUserPriority(token: string): number | null {
    const user = this.users.find(user => user.token === token);
    return user ? user.priority : null;
  }
  
}
