import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { HotelOfferModel } from '../models/hotel-offer-model.model';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  zoom = 9;
  center: google.maps.LatLngLiteral = { lat: 39.600, lng: 1.300 };
  markers: google.maps.LatLngLiteral[] = [];

  hotelOffers: HotelOfferModel[] = [];



  constructor(
    private hotelOfferService: HotelOfferService,
    private cd: ChangeDetectorRef
  ) {}

  addMarkers(marker: google.maps.LatLngLiteral) {
    this.markers.push(marker);
    console.log(this.markers);
  }

  ngOnInit(): void {
    this.retrieveHotelOffers();
  }

  currentOffer: HotelOfferModel | undefined;

  retrieveHotelOffers() {
    this.hotelOfferService.getHotelOffers().subscribe((data) => {
      this.hotelOffers = data;
      console.log(this.hotelOffers);
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

  filterOffers(filter: Filter) {
    this.hotelOffers.length = 0;
    this.hotelOfferService
      .getHotelOffersFiltered(filter)
      .subscribe((offer: HotelOfferModel[]) => {
        this.hotelOffers = offer;
        this.markers.length = 0;
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
}
