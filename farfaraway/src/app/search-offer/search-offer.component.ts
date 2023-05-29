import { Component, EventEmitter, Output } from '@angular/core';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';
import { HotelOfferService } from '../service/hotel-offer.service';
import { Filter } from '../models/filter';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-offer',
  templateUrl: './search-offer.component.html',
  styleUrls: ['./search-offer.component.css'],
})

export class SearchOfferComponent{
  @Output() filterEvent = new EventEmitter<Filter>();

  destination:string = '';
  startDate:any;
  endDate:any;

  constructor(private hotelOfferService: HotelOfferService){}


  searchOffer() {
    this.destination = (<HTMLInputElement>document.getElementById('destination')).value;

    // CREATE FILTER OBJECT
    let filterObject: Filter = {
      location: this.destination
    };

     // EVENT EMIT
     this.filterEvent.emit(filterObject);
  }

}
