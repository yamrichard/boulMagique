import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PROVERBE } from '../../proverbes/proverbe.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  proverve: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.init();
  }

  init()
  {
    this.proverve = this.formBuilder.group({
      id: [PROVERBE.length, Validators.required],
      proverbe: ['', Validators.required]
    });
  }

  ajouter()
  {
    let pro = this.proverve.value;
    PROVERBE.push(pro);
    this.init();
  }

}
