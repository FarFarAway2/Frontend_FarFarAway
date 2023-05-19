import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferPageComponent } from './offer-page/offer-page.component';

const routes: Routes = [
  {
    path: 'offer-page',
    component: OfferPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
