import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardTravelComponent } from './offer-card-travel.component';

describe('OfferCardTravelComponent', () => {
  let component: OfferCardTravelComponent;
  let fixture: ComponentFixture<OfferCardTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCardTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCardTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
