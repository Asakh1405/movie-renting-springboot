import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './updateOrder.component.html',
  styleUrls: ['./updateOrder.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderId: number = 0;
  orders: any = { username: '', movieName: '', dateOfWatch: '', time: '', seatNumber: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private orderService: OrdersService, private router: Router) {}

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));
    // Fetch the order details based on the order ID
    this.orderService.getOrderById(this.orderId).subscribe(data => {
      this.orders = data;
    });
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderId, this.orders).subscribe({
      next: (response) => {
        this.successMessage = 'Order updated successfully.';
        setTimeout(() => {
          this.router.navigate(['/orders']);
        }, 2000);
      },
      error: (error) => {
        this.errorMessage = 'Order update failed. Please try again.';
      }
    });
  }
}
