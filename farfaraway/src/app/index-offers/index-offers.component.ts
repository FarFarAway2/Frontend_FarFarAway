import { Component } from '@angular/core';

@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css']
})
export class IndexOffersComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
}
