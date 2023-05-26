import { TestBed } from '@angular/core/testing';

import { TravelBookService } from './travel-book.service';

describe('TravelBookService', () => {
  let service: TravelBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
