import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-search-offer',
  templateUrl: './search-offer.component.html',
  styleUrls: ['./search-offer.component.css'],
})

export class SearchOfferComponent implements AfterViewInit{

@ViewChild(DateRangePickerComponent) child:any;

  destination:string = '';
  startDate:any;
  endDate:any;

ngAfterViewInit(){}

  searchOffer() {
    this.destination = (<HTMLInputElement>document.getElementById('destination')).value;

    this.child.getDates();

    //TESTING
    console.log('SEARCH');
    console.log('Destination:' + this.destination);
  }

}
