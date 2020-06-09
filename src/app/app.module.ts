import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheComponent } from './dialog/affiche/affiche.component';
import { ClickageComponent } from './dialog/clickage/clickage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceService } from './dialog/services/service.service';
import { AjouterComponent } from './dialog/ajouter/ajouter.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AfficheComponent,
    ClickageComponent,
    AjouterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatDialogModule, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
