import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickageComponent } from './dialog/clickage/clickage.component';
import { AjouterComponent } from './dialog/ajouter/ajouter.component';


const routes: Routes = [
  {path: '', component: ClickageComponent},
  {path: 'ajouter', component: AjouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
