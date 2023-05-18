import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationOptionsComponent } from './navigation-options/navigation-options.component';
<<<<<<< Updated upstream
import { FiltersComponent } from './filters/filters.component';
=======
import { SearchOfferComponent } from './search-offer/search-offer.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavigationOptionsComponent,
<<<<<<< Updated upstream
    FiltersComponent
=======
    SearchOfferComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
