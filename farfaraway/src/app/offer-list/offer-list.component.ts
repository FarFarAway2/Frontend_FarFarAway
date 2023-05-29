import { Component, OnInit } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { HotelOfferModel } from '../models/hotel-offer-model.model';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  hotelOffers: Array<HotelOfferModel> = [];

  constructor(private hotelOfferService: HotelOfferService) {}

  ngOnInit() {
    this.retrieveHotelOffers();
  }

  retrieveHotelOffers() {
    this.hotelOfferService.getHotelOffers().subscribe((data) => {
      this.hotelOffers = data;
      console.log(this.hotelOffers);
    });
  }
}
