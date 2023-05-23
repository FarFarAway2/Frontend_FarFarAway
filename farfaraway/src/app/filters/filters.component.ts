import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  themes = new FormControl('');
  themesList: string[] = ['Medieval', 'Western', 'Victorian', 'Futuristic', 'geek'];

  specialDates = new FormControl('');
  specialDatesList: string[] = ['Easter', 'Saint Johns Eve', 'Summer Holidays', 'Christmas'];
}
