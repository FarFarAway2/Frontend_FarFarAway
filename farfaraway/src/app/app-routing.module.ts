import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferPageComponent } from './offer-page/offer-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexOffersComponent } from './index-offers/index-offers.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'offer-page',
    component: OfferPageComponent
  },
  {
    path: '',
    component: IndexOffersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
