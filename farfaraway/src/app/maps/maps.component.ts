import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent {
  zoom = 10;
  center: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
  markers: google.maps.LatLngLiteral[] = [];

  handleClick(event: google.maps.MapMouseEvent) {
    console.log(`Las coordenadas son: ${event.latLng?.lat()}, ${event.latLng?.lng()}`);
  }

  addMarkers(coordsArray: google.maps.LatLngLiteral[]) {
    this.markers = [...this.markers, ...coordsArray];
  }
  ngOnInit() {
    this.addMarkers([
      { lat: 41.3851, lng: 2.1734 },
      { lat: 41.4002, lng: 2.2005 },
      { lat: 41.5000, lng: 2.2005 },
      { lat: 41.6000, lng: 2.2005 },
      { lat: 41.1000, lng: 2.2005 },
    ]);
}
}
