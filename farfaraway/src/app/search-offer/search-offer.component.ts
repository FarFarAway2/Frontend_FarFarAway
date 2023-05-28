import { Component } from '@angular/core';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-search-offer',
  templateUrl: './search-offer.component.html',
  styleUrls: ['./search-offer.component.css'],
})

export class SearchOfferComponent{

  destination:string = '';
  startDate:any;
  endDate:any;

  searchOffer() {
    this.destination = (<HTMLInputElement>document.getElementById('destination')).value;

    //TESTING
    console.log('SEARCH');
    console.log('Destination:' + this.destination);
  }

}
