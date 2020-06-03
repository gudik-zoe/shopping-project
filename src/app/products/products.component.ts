import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [];
  cardItems = [];
  constructor(private service: CartServiceService ,
              private router :Router) {}

  add(id) {
    this.service.add(id , this.products);
  }
    goToDescription(id){
    this.router.navigate(['/laps-details' ,id])
  }
 

  ngOnInit() {
    this.products = this.service.getProducts();
  }
}
