import { Component, OnInit } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { HotelOfferModel } from '../models/hotel-offer-model.model';
import { TravelOfferService } from '../service/travel-offer.service';
import { TravelOfferModel } from '../models/travel-offer-model.model';
import { Filter } from '../models/filter';
import { Observable, combineLatest, filter, forkJoin, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css'],
})
export class IndexOffersComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
  markers: google.maps.LatLngLiteral[] = [];

  offers: any;

  hotelOffersRating: Array<HotelOfferModel> = [];
  hotelOffersPrices: Array<HotelOfferModel> = [];
  hotelOffersSpecialDates: Array<HotelOfferModel> = [];
  hotelOffersLastOptions: Array<HotelOfferModel> = [];
  hotelOffers: Array<HotelOfferModel> = [];
  travelOffers: HotelOfferModel[] = [];

  constructor(
    private hotelOfferService: HotelOfferService,
    private travelOfferService: TravelOfferService
  ) {}

  ngOnInit() {
    this.retrieveHotelOffers();
    // this.retrieveTravelOffers();
  }

  addMarkers(marker: google.maps.LatLngLiteral) {
    this.markers.push(marker);
  }

  retrieveHotelOffers() {
    this.hotelOfferService.getHotelOffers().subscribe((data) => {
      this.hotelOffers = data;
      this.offers = Array(this.hotelOffers.length).fill(0);
      this.hotelOffers.forEach((offer) => {
        if (offer.latitude !== undefined && offer.longitude !== undefined) {
          const lat = parseFloat(offer.latitude);
          const lng = parseFloat(offer.longitude);
          if (!isNaN(lat) && !isNaN(lng)) {
            this.addMarkers({ lat, lng });
          }
        }
      });
    });
  }

  // saveOffer(offer: Array<HotelOfferModel>) {
  //   this.hotelOffers = this.hotelOffers.concat(offer);

  //   this.markers.length = 0;
  //   this.hotelOffers.forEach((offer) => {
  //     if (offer.latitude !== undefined && offer.longitude !== undefined) {
  //       const lat = parseFloat(offer.latitude);
  //       const lng = parseFloat(offer.longitude);
  //       if (!isNaN(lat) && !isNaN(lng)) {
  //         this.addMarkers({ lat, lng });
  //       }
  //     }
  //   });
  // }

  // getAllFilteredOffers(filter: Filter): void {
  //   this.hotelOffers.length = 0;

  //   this.hotelOfferService
  //     .getAllFilteredOffers(filter)
  //     .subscribe((offer: HotelOfferModel[]) => {
  //       console.log(offer);
  //     });
  // }

  // getAllFilteredOffers(filter: Filter): void {
  //   this.hotelOffers.length = 0;

  //   this.hotelOfferService
  //     .getHotelOffersFilterPrice(filter)
  //     .pipe(take(1))
  //     .subscribe((offer: HotelOfferModel[]) => {
  //       console.log(offer);
  //     });
  // }

  // filterOffers(filter: Filter) {
  //   this.hotelOffers.length = 0;
  //   this.hotelOfferService.getAllFilteredOffers(filter).subscribe((data) => {
  //     this.hotelOffers = data;
  //   });
  // }

  // filterOffers(filter: Filter) {
  //   this.hotelOffers.length = 0;
  //   this.hotelOfferService
  //     .getHotelOffersFilterRating(filter)
  //     .subscribe((data) => {
  //       this.hotelOffersRating = data;
  //       this.saveOffer(this.hotelOffersRating);
  //     });

  //   this.hotelOfferService
  //     .getHotelOffersFilterPrice(filter)
  //     .subscribe((data) => {
  //       this.hotelOffersPrices = data;
  //       this.saveOffer(this.hotelOffersPrices);
  //     });

  //   // this.hotelOfferService.getHotelOffersFilterSpecialDates(filter).subscribe((data) => {
  //   //   this.hotelOffersSpecialDates = data;
  //   //   console.log(this.hotelOffers);
  //   // });

  //   this.hotelOfferService
  //     .getHotelOffersFilterLastOptions(filter)
  //     .subscribe((data) => {
  //       this.hotelOffersLastOptions = data;
  //       this.saveOffer(this.hotelOffersLastOptions);
  //     });
  // }

  // retrieveTravelOffers() {
  //   this.travelOfferService.getTravelOffers().subscribe((data) => {
  //     this.travelOffers = data;
  //   });
  // }
}
