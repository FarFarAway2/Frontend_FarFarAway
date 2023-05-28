import { Component, Input, OnInit } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css'],
})
export class OfferPageComponent implements OnInit {
  hotelOffer: any;

  constructor(private route: ActivatedRoute, private hotelOfferService: HotelOfferService, private router: Router
    ) {}


  name = 'Default';
  price = 0;
  description = 'Default';
  expire_date = 'Default';
  number_people = 0;
  start_date = 'Default';
  id_hotel: any;

  ngOnInit(): void {
    console.log(this.router.url.split('/').pop());
    this.id_hotel = this.router.url.split('/').pop();
    this.hotelOfferService.getHotelOffersID(this.id_hotel).subscribe((offer) => {
      console.log(offer);
      this.hotelOffer = offer;
      this.name = this.hotelOffer.hotel_name;
      this.description = this.hotelOffer.hotel_description;
      this.price = this.hotelOffer.price;
      this.start_date = this.hotelOffer.start_date;
      this.expire_date = this.hotelOffer.expire_date;
    });
  }
}
