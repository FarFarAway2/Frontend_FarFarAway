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

  // hotelOffers?: HotelOfferModel[];
  hotelOffers:any;

  constructor(private hotelOfferService: HotelOfferService) {}

  ngOnInit() {
    this.retrieveHotelOffers();
  }

  retrieveHotelOffers() {
    this.hotelOfferService.getHotelOffers().subscribe((data) => {
      console.log(data);
      this.hotelOffers = data;
    });

    console.log(this.hotelOffers);
  }
}
