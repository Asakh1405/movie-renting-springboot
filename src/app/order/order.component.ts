import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrdersService, private router: Router) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(response => {
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }

  updateOrder(order: any) {
    // Navigate to the update page with order ID
    this.router.navigate(['/update-order', order.id]);
  }
}
