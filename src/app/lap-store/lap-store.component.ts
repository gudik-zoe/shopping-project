import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-lap-store',
  templateUrl: './lap-store.component.html',
  styleUrls: ['./lap-store.component.css']
})
export class LapStoreComponent implements OnInit {

  laps = []
  constructor(private router:Router , 
              private service:CartServiceService) { }


  goToDescription(id){
    this.router.navigate(['/laps-details' ,id])
  }
 

  ngOnInit()  {
    this.laps = this.service.getLaps()
  }

  add(id){
    this.service.add(id , this.laps)

  }

}
