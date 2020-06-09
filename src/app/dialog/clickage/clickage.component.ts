import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AfficheComponent } from '../affiche/affiche.component';

@Component({
  selector: 'app-cado',
  templateUrl: './clickage.component.html',
  styleUrls: ['./clickage.component.css']
})
export class ClickageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AfficheComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
