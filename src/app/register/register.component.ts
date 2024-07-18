import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users = { fullName: '', age: '', username: '', password: '', address: '', email: '', phoneNumber: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private appService: AppService, private router: Router) {}

  register() {
    this.appService.register(this.users).subscribe({
      next: (response) => {
        // Handle successful registration
        this.successMessage = 'Registration successful. Redirecting to login...';
        // Redirect to login after a delay
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // 2 minutes delay
      },
      error: (error) => {
        // Handle registration error
        this.errorMessage = 'Registration failed. Please try again.';
      }
    });
  }
}
