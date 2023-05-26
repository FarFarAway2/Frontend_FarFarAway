import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  name = 'Default name';
  price = 666;
  description = 'Default description';
  expire_date: any;
  leftTime = 100;

  @Input() hotelOffer: any;

  ngOnInit(): void {
    this.name = this.hotelOffer.hotel_name;
    this.price = this.hotelOffer.price;
    this.description = this.hotelOffer.hotel_description;
    this.expire_date = this.hotelOffer.expire_date;
    this.setLeftTime();
  }

  setLeftTime() {
    this.leftTime = (new Date(this.expire_date).getTime() - new Date().getTime());
    console.log(this.leftTime);
  }
}
