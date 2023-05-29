import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-card-admin',
  templateUrl: './offer-card-admin.component.html',
  styleUrls: ['./offer-card-admin.component.css']
})
export class OfferCardAdminComponent {
  id = 0;
  name = 'Default name';
  description = 'Default description';

  constructor(private router: Router) {}

  navigateToEditOffer(id_hotel:string): void {
    this.router.navigate(['/edit',id_hotel]);
  }

  @Input() hotelOffer: any;

  ngOnInit(): void {
    this.id = this.hotelOffer.id_hotel;
    this.name = this.hotelOffer.hotel_name;
    this.description = this.hotelOffer.hotel_description;
  }
}
