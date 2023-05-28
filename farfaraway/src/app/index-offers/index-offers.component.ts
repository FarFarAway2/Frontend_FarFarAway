import { Component, OnInit } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { HotelOfferModel } from '../models/hotel-offer-model.model';

@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css'],
})
export class IndexOffersComponent implements OnInit{
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };

  hotelOffers: HotelOfferModel[] = [];
  name: any;
  price: any;
  hotel_description: any;

  constructor(private hotelOfferService: HotelOfferService) {}

  ngOnInit() {
    this.retrieveHotelOffers();
  }

  retrieveHotelOffers() {
    this.hotelOfferService.getHotelOffers().subscribe((data) => {
      this.hotelOffers = data;
      console.log(this.hotelOffers)
      this.hotelOffers.forEach((offer) => {
        if (offer.latitude !== undefined && offer.longitude !== undefined) {
          this.addMarkers({ lat: offer.latitude, lng: offer.longitude });
        }
      });
    });
  }
  addMarkers(arg0: { lat: string; lng: string; }) {
    throw new Error('Method not implemented.');
  }


  updateOffers(){
    this.name = this.hotelOffers[0].hotel_name;
    this.price = this.hotelOffers[0].price;
    this.hotel_description = this.hotelOffers[0].hotel_description;
  }
}
