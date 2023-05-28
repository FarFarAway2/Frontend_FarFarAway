import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() filterEvent = new EventEmitter<Filter>();

  themes = new FormControl('');
  themesList: string[] = [
    'Medieval',
    'Western',
    'Victorian',
    'Futuristic',
    'Geek',
  ];

  specialDates = new FormControl('');
  specialDatesList: string[] = [
    'Easter',
    'Saint Johns Eve',
    'Summer Holidays',
    'Christmas',
  ];

  // TO MANAGE ACTIVE FILTERS
  activeRatings: boolean[] = [false, false, false, false, false];
  activePriceLow: number = 0;
  activePriceTop: number = 0;
  activeThemes: string[] = [];
  activeSpecialDates: string[] = [];
  activeLastOptions: any;

  getValuesThemes(event: {
    isUserInput: any;
    source: { value: any; selected: any };
  }) {
    if (event.isUserInput) {
      if (event.source.selected === true) {
        this.activeThemes.push(event.source.value);
      } else {
        let index: number = this.activeThemes.indexOf(event.source.value);
        if (index != -1) {
          this.activeThemes.splice(index, 1);
        }
      }
    }
  }

  getValuesSpecialDates(event: {
    isUserInput: any;
    source: { value: any; selected: any };
  }) {
    if (event.isUserInput) {
      if (event.source.selected === true) {
        this.activeSpecialDates.push(event.source.value);
      } else {
        let index: number = this.activeSpecialDates.indexOf(event.source.value);
        if (index != -1) {
          this.activeSpecialDates.splice(index, 1);
        }
      }
    }
  }

  filterOffers() {
    // RATINGS
    var checkboxRat5 = <HTMLInputElement>document.getElementById('rating5');
    var checkboxRat4 = <HTMLInputElement>document.getElementById('rating4');
    var checkboxRat3 = <HTMLInputElement>document.getElementById('rating3');
    var checkboxRat2 = <HTMLInputElement>document.getElementById('rating2');
    var checkboxRat1 = <HTMLInputElement>document.getElementById('rating1');

    this.activeRatings[0] = checkboxRat1.checked;
    this.activeRatings[1] = checkboxRat2.checked;
    this.activeRatings[2] = checkboxRat3.checked;
    this.activeRatings[3] = checkboxRat4.checked;
    this.activeRatings[4] = checkboxRat5.checked;

    // PRICES
    var priceLow = parseInt(
      (<HTMLInputElement>document.getElementById('pricelow')).value
    );
    var priceTop = parseInt(
      (<HTMLInputElement>document.getElementById('pricetop')).value
    );

    if (!isNaN(priceLow)) {
      this.activePriceLow = priceLow;
    }
    if (!isNaN(priceTop)) {
      if (priceTop <= priceLow) {
        this.activePriceTop = priceLow;
      } else {
        this.activePriceTop = priceTop;
      }
    }
    if (isNaN(priceTop) && !isNaN(priceLow)) {
      this.activePriceTop = priceLow;
    }

    // LAST OPTIONS
    var checkboxLO = <HTMLInputElement>document.getElementById('lastoptions');
    this.activeLastOptions = checkboxLO.checked;

    // CREATE FILTER OBJECT
    let filterObject: Filter = {
      ratings: this.activeRatings,
      priceLow: this.activePriceLow,
      priceTop: this.activePriceTop,
      themes: this.activeThemes,
      specialDates: this.activeSpecialDates,
      lastOptions: this.activeLastOptions,
    };

    // EVENT EMIT
    this.filterEvent.emit(filterObject);
  }
}
