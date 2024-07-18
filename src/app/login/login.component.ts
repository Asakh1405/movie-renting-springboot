import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private appService: AppService, private router: Router) {}

  login() {
    this.appService.login(this.credentials).subscribe({
      next: (response) => {
        // Assuming the response contains a token
        const token = response.token;
        // Store the token in localStorage
        localStorage.setItem('authToken', token);
        // Navigate to the home page
        this.router.navigate(['/home']);
      },
      error: (error) => {
        // Handle login error
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
      }
    });
  }
}
