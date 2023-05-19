import { Component } from '@angular/core';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent {
  offerType: number = 1;

  onChange(ev: any) {
    this.offerType = ev.target.value;
    console.log(this.offerType);
  }
}
