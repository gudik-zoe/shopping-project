import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from './cart-service.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 loged = []

  constructor(private router: Router, 
    private service: CartServiceService , 
    private authService : AuthService) {}

  products = [];
  title = 'shopping-project';

  goToCard() {
    this.router.navigate(['/card']);
  }

  ngOnInit() {
    this.products = this.service.getCardItems();
   this.loged = this.authService.get()
  }
}
