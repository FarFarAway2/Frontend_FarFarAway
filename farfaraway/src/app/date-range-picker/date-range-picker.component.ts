import {Component} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'date-range-picker',
  templateUrl: 'date-range-picker.component.html',
  standalone: true,
  imports: [ MatDatepickerModule, MatFormFieldModule, MatInputModule],
})
export class DateRangePickerComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getDates(){
  }
}

