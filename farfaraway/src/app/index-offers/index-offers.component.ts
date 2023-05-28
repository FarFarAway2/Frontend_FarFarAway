import { Component, Input, OnInit } from '@angular/core';
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
<<<<<<< Updated upstream
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
  markers: google.maps.LatLngLiteral[] = [];
=======
<<<<<<< Updated upstream
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
  markers: google.maps.LatLngLiteral[] = [];
=======
  @Input() options: google.maps.MapOptions | undefined;
  zoom = 7;
  center: google.maps.LatLngLiteral = { lat: 42.000, lng: 2.200 };
  mapOptions: google.maps.MapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
  };
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

  retrieveTravelOffers() {
  this.travelOfferService.getTravelOffers().subscribe((data) => {
      this.travelOffers = data;
      console.log(this.travelOffers);
    });
<<<<<<< Updated upstream
  }

  addMarkers(marker: google.maps.LatLngLiteral) {
    this.markers.push(marker);
    console.log(this.markers);
=======
  }

  addMarkers(marker: google.maps.LatLngLiteral) {
    this.markers.push(marker);
    console.log(this.markers);
=======
  addMarkers(arg0: { lat: string; lng: string }) {
    throw new Error('Method not implemented.');
  }

  updateOffers() {
    this.name = this.hotelOffers[0].hotel_name;
    this.price = this.hotelOffers[0].price;
    this.hotel_description = this.hotelOffers[0].hotel_description;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  }
}

