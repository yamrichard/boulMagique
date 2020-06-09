import { Injectable } from '@angular/core';
import { PROVERBE } from '../../proverbes/proverbe.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  proverbe = PROVERBE;
  nb = Number(Math.round(Math.random() * this.proverbe.length));
  message: any;
  constructor() { }
  im = 0;
  setMessage() {
    this.proverbe = PROVERBE;
    this.nb = Number(Math.round(Math.random() * this.proverbe.length));
    for(let p of this.proverbe)
    {
      if(p.id == this.nb)
      {
        return p.proverbe;
      }
    }
  }
}
