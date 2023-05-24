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
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferCardAdminComponent } from './offer-card-admin/offer-card-admin.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutComponent } from './about/about.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { FooterComponent } from './footer/footer.component';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {SocialLoginModule,SocialAuthServiceConfig,} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';


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
        CreateOfferComponent,
        EditOfferComponent,
        OfferListComponent,
        OfferCardAdminComponent,
        MapsComponent,
        AboutComponent,
        OfferCardComponent,
        FooterComponent,
    ],
    providers:
    [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('58888682431-d8ni2f5tqf6123qpnl752atjgubgfeu6.apps.googleusercontent.com'),
            },
          ],
        } as SocialAuthServiceConfig,
      },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleMapsModule,
        CountdownModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        HttpClientModule,
        SocialLoginModule,
        DateRangePickerComponent,
    ]
})
export class AppModule { }
