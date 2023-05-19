import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationOptionsComponent } from './navigation-options/navigation-options.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchOfferComponent } from './search-offer/search-offer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavigationOptionsComponent,
    FiltersComponent,
    SearchOfferComponent,
    LoginComponent,
    RegisterComponent,
    DatepickerComponent,
    CreateOfferComponent,
    EditOfferComponent,
    OfferListComponent,
    OfferCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
