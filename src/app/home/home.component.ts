import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  orders = { username: '', movieName: '', dateOfRent: '', time: ''};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private orderService: OrdersService, private router: Router) {}

  submitOrder() {
    this.orderService.makeOrder(this.orders).subscribe({
      next: (response) => {
        // Handle successful order submission
        this.successMessage = 'Order submitted successfully.';
        // Redirect to orders page after a delay
        setTimeout(() => {
          this.router.navigate(['/orders']);
        }, 2000); // 2 seconds delay
      },
      error: (error) => {
        // Handle order submission error
        this.errorMessage = 'Order submission failed. Please try again.';
      }
    });
  }
}
