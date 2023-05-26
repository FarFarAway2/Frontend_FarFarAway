import { TestBed } from '@angular/core/testing';

import { TravelManageService } from './travel-manage.service';

describe('TravelManageService', () => {
  let service: TravelManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
