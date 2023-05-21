import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardMapComponent } from './offer-card-map.component';

describe('OfferCardMapComponent', () => {
  let component: OfferCardMapComponent;
  let fixture: ComponentFixture<OfferCardMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferCardMapComponent]
    });
    fixture = TestBed.createComponent(OfferCardMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
