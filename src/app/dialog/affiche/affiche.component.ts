import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {
 message;
 i = 0;
  constructor(private m: ServiceService) { }

  ngOnInit(): void {
    if ( this.m.im == 0) {
        this.message = 'salue';
        this.m.im = 2;
    }
    else {
      this.message = this.m.setMessage();
    }

  }

}
