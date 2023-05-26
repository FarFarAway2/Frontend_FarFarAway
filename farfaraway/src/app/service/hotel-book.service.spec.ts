import { TestBed } from '@angular/core/testing';

import { HotelBookService } from './hotel-book.service';

describe('HotelBookService', () => {
  let service: HotelBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
