import {Component} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Basic date range picker */
@Component({
  selector: 'date-range-picker',
  templateUrl: 'date-range-picker.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
})
export class DateRangePickerComponent {}

