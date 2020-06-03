import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-buy-again',
  templateUrl: './buy-again.component.html',
  styleUrls: ['./buy-again.component.css']
})
export class BuyAgainComponent implements OnInit {
  constructor( private router:Router , 
                private service:CartServiceService) { }

                @Input() data
  toStore(){
    this.router.navigate(['/products'])
    this.service.refresh()
  }

  

  ngOnInit() {
  }

}
