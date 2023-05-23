import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { MapsComponent } from './maps/maps.component';
import { AboutComponent } from './about/about.component';
import { IndexOffersComponent } from './index-offers/index-offers.component';
import { FooterComponent } from './footer/footer.component';

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
    path: 'offerlist',
    component: OfferListComponent,
  },
  {
    path: 'createoffer',
    component: CreateOfferComponent,
  },
  {
    path: 'editoffer',
    component: EditOfferComponent,
  },
  {
    path: 'offerpage',
    component: OfferPageComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: IndexOffersComponent,
  },
  {
    path:'footer',
    component: FooterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
