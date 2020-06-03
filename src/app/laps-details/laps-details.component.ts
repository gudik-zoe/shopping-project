import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-laps-details',
  templateUrl: './laps-details.component.html',
  styleUrls: ['./laps-details.component.css']
})
export class LapsDetailsComponent implements OnInit {
  id;
  details = []
  constructor( private service:CartServiceService , 
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'))
    this.details = this.service.getLaps()
  }

}
