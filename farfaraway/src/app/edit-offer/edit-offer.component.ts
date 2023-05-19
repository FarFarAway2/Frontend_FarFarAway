import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent {
  offerType: number = 1;

  onChange(ev: any) {
    this.offerType = ev.target.value;
    console.log(this.offerType);
  }
}
