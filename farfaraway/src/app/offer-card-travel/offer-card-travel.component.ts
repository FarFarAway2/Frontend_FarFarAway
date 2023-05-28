import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-card-travel',
  templateUrl: './offer-card-travel.component.html',
  styleUrls: ['./offer-card-travel.component.css']
})
export class OfferCardTravelComponent {
  constructor(private router: Router) {}

  id = 0;
  name = 'Default name';
  price = 666;
  description = 'Default description';
  expire_date: any;
  leftTime = 100;

  @Input() travelOffer: any;

  navigateToOfferPage(id_travel:string): void {
    this.router.navigate(['/book',id_travel]);
  }

  ngOnInit(): void {
    this.id = this.travelOffer.id_travel;
    this.name = this.travelOffer.travel_name;
    this.price = this.travelOffer.price;
    this.description = this.travelOffer.travel_description;
    this.expire_date = this.travelOffer.expire_date;
    this.setLeftTime();
  }

  setLeftTime() {
    console.log(new Date(this.expire_date).getTime() +'/'+ new Date().getTime())
    this.leftTime = new Date(this.expire_date).getTime() - new Date().getTime();
    console.log(this.leftTime);
  }

  // Función para codificar la ruta
  codificarRuta(ruta: string): string {
    return encodeURIComponent(ruta).replace(/%20/g, '_');
  }
}
