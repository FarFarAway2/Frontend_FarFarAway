import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  id = 0;
  name = 'Default name';
  price = 666;
  description = 'Default description';
  expire_date: any;
  leftTime = 100;

  constructor(private router: Router) {}

  navigateToOfferPage(id_hotel: string): void {
    this.router.navigate(['/book', id_hotel]);
  }

  @Input() hotelOffer: any;

  ngOnInit(): void {
    this.id = this.hotelOffer.id_hotel;
    this.name = this.hotelOffer.hotel_name;
    this.price = this.hotelOffer.price;
    this.description = this.hotelOffer.hotel_description;
    this.expire_date = this.hotelOffer.expire_date;
    this.setLeftTime();
  }

  setLeftTime() {
    const currentTime = new Date().getTime();
    const expirationTime = new Date(this.expire_date).getTime();

    this.leftTime = Math.floor((expirationTime - currentTime) / 1000);

    if (this.leftTime < 0) {
      this.leftTime = 0;
    }
  }
  getDaysLeft() {
    let timeDiff = Math.abs(
      new Date(this.expire_date).getTime() - new Date().getTime()
    );
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  codificarRuta(ruta: string): string {
    return encodeURIComponent(ruta).replace(/%20/g, '_');
  }
}
