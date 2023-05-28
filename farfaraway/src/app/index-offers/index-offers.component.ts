import { Component, OnInit } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { HotelOfferModel } from '../models/hotel-offer-model.model';
import { TravelOfferService } from '../service/travel-offer.service';
import { TravelOfferModel } from '../models/travel-offer-model.model';

@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css'],
})
export class IndexOffersComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
  markers: google.maps.LatLngLiteral[] = [];

  hotelOffers: HotelOfferModel[] = [];
  travelOffers: HotelOfferModel[] = [];

  constructor(private hotelOfferService: HotelOfferService, private travelOfferService: TravelOfferService) {}

  ngOnInit() {
    this.retrieveHotelOffers();
    this.retrieveTravelOffers();
  }

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

  retrieveTravelOffers() {
  this.travelOfferService.getTravelOffers().subscribe((data) => {
      this.travelOffers = data;
      console.log(this.travelOffers);
    });
  }

  addMarkers(marker: google.maps.LatLngLiteral) {
    this.markers.push(marker);
    console.log(this.markers);
  }
}
