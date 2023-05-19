import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapsComponent} from './maps/maps.component';

const routes: Routes = [
  {path: 'maps',
component:MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
