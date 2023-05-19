import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationOptionsComponent } from './navigation-options/navigation-options.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchOfferComponent } from './search-offer/search-offer.component';
import { OfferPageComponent } from './offer-page/offer-page.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavigationOptionsComponent,
    FiltersComponent,
    SearchOfferComponent,

    OfferPageComponent
    LoginComponent,
    RegisterComponent,
    DatepickerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
