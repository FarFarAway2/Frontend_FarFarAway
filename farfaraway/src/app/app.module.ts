import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchOfferComponent } from './search-offer/search-offer.component';
import { IndexOffersComponent } from './index-offers/index-offers.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutComponent } from './about/about.component';
import { OfferCardMapComponent } from './offer-card-map/offer-card-map.component';
import { DatepickerRangePopupComponent } from "./datepicker-range-popup/datepicker-range-popup.component";

@NgModule({
    declarations: [
        AppComponent,
        NavigationBarComponent,
        FiltersComponent,
        SearchOfferComponent,
        IndexOffersComponent,
        OfferPageComponent,
        LoginComponent,
        RegisterComponent,
        DatepickerComponent,
        CreateOfferComponent,
        EditOfferComponent,
        OfferListComponent,
        OfferCardComponent,
        MapsComponent,
        AboutComponent,
        OfferCardMapComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleMapsModule,
        DatepickerRangePopupComponent
    ]
})
export class AppModule { }
