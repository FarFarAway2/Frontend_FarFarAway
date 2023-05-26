import { TestBed } from '@angular/core/testing';

import { TravelOfferService } from './travel-offer.service';

describe('TravelOfferService', () => {
  let service: TravelOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
