import { Component } from '@angular/core';


@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {


  username = '';
  password = '';
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.isLoggedIn = true;
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}
