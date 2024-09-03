import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  password: string;
  rol: string;
  phone: string;
  address: string;
  fLastname: string;
  mLastname: string;
  gender: boolean;
  bday: number;
  bmonth: number;
  byear: number;
  state: string;
  municipality: string;
  dateCreation: number;
  dateLastUpdate: number;
  tokenFather: string;
  tokenMother: string;
  tokenDigIdentity: string;
  rolLevel: number;
  selected?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  users: User[] = [];
filteredUsers: User[] = [];
selectAllChecked = false;
editingUser: User | null = null; // This will hold the user being edited
addingUser = false; // This will track if the add form is visible
newUser: User = {
  name: '',
  email: '',
  password: '',
  rol: '',
  phone: '',
  address: '',
  fLastname: '',
  mLastname: '',
  gender: false,
  bday: 0,
  bmonth: 0,
  byear: 0,
  state: '',
  municipality: '',
  dateCreation: 0,
  dateLastUpdate: 0,
  tokenFather: '',
  tokenMother: '',
  tokenDigIdentity: '',
  rolLevel: 0,
  selected: false
};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
    this.authService.fetchAndStoreUsers().subscribe(users => {
      console.log('Users fetched in Dashboard:', users);
    });
  }

  loadUsers() {
    this.authService.fetchAndStoreUsers().subscribe(users => {
      this.users = users.map(user => ({ ...user, selected: false }));
      this.filteredUsers = [...this.users];
    });
  }

  filterUsers(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.tokenDigIdentity.toLowerCase().includes(searchTerm) ||
      user.rol.toLowerCase().includes(searchTerm)
    );
  }

  toggleSelectAll(event: any) {
    this.selectAllChecked = event.detail.checked;
    this.filteredUsers.forEach(user => user.selected = this.selectAllChecked);
  }

  deleteSelected() {
    this.users = this.users.filter(user => !user.selected);
    this.filterUsers({ target: { value: '' } });  // Reset search after deletion
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
    this.filterUsers({ target: { value: '' } });  // Reset search after deletion
  }

  startEditUser(user: User) {
    this.editingUser = { ...user }; // Clone the user object to edit
  }

  saveEdit() {
    if (this.editingUser) {
      const index = this.users.findIndex(user => user.tokenDigIdentity === this.editingUser!.tokenDigIdentity);
      if (index !== -1) {
        this.users[index] = this.editingUser;
        this.filterUsers({ target: { value: '' } });  // Reset search after updating
      }
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingUser = null; // Close the edit form
  }

  addUser() {
    this.addingUser = true; // Show the add form
  }

  cancelAdd() {
    this.addingUser = false; // Hide the add form
    this.newUser = {
      name: '',
      email: '',
      password: '',
      rol: '',
      phone: '',
      address: '',
      fLastname: '',
      mLastname: '',
      gender: false,
      bday: 0,
      bmonth: 0,
      byear: 0,
      state: '',
      municipality: '',
      dateCreation: 0,
      dateLastUpdate: 0,
      tokenFather: '',
      tokenMother: '',
      tokenDigIdentity: '',
      rolLevel: 0,
      selected: false
    };
  }

  saveNewUser() {
    if (this.isValidUser(this.newUser)) {
      this.users.push(this.newUser);
      this.filterUsers({ target: { value: '' } });  // Reset search after adding
      this.cancelAdd();
    } else {
      // Optionally, show a validation error to the user
    }
  }

  isValidUser(user: User): boolean {
    return (
      user.name !== '' &&
      this.isValidEmail(user.email) &&
      user.tokenDigIdentity !== '' &&
      user.rol !== ''
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  logout() {
    this.authService.clearUser();  // Clear user information
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }

  home() {
    this.router.navigateByUrl('/home');
  }
}
