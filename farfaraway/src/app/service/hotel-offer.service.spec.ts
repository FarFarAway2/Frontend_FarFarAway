import { TestBed } from '@angular/core/testing';

import { HotelOfferService } from './hotel-offer.service';

describe('HotelOfferService', () => {
  let service: HotelOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
