import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cardItems = []
  constructor(private service: CartServiceService, private router: Router) {}
  //l'elemento va tolto subito
  remove(uniqueId , id) {
    this.service.remove(uniqueId , id)
     this.cardItems = this.cardItems.filter(item => item.uniqueId !== uniqueId)
  }
  
  total() {
    return this.service.total(this.cardItems);
  }
plus (id , title){
  this.service.plus(id , title)
}

minus (id , title){
  this.service.minus(id , title)
}

  toStore() {
    this.router.navigate(['/products']);
  }

  purchase() {
      this.router.navigate(['/purchase'])
  }
    


  ngOnInit() {
   this.cardItems = this.service.getCardItems()
  }
}
