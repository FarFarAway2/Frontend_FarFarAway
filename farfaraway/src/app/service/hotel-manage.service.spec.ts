import { TestBed } from '@angular/core/testing';

import { HotelManageService } from './hotel-manage.service';

describe('HotelManageService', () => {
  let service: HotelManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
