import { Component, Input, OnInit } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css'],
})
export class OfferPageComponent implements OnInit {
  hotelOffer: any;

  constructor(private hotelOfferService: HotelOfferService) {}

  name = 'Default';
  price = 0;
  description = 'Default';
  expire_date = 'Deefault';
  number_people = 0;
  start_date = 'Default';
  // leftTime = 100;

  // @Input() hotelOffer: any

  ngOnInit(): void {
    this.hotelOfferService.getHotelOffers().subscribe((offer) => {
      console.log(offer);

      for (let i = 0; i < offer.length; i++) {
        this.hotelOffer = offer[i];
      }

      this.name = this.hotelOffer.hotel_name;
      this.price = this.hotelOffer.price;
      this.description = this.hotelOffer.hotel_description;
      // this.number_people = this.hotelOffer.number_people;
      this.start_date = this.hotelOffer.start_date;
      this.expire_date = this.hotelOffer.expire_date;
      // this.leftTime = this.setLeftTime()
    });
  }
}
