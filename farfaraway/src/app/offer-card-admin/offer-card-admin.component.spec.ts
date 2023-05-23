import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardAdminComponent } from './offer-card-admin.component';

describe('OfferCardComponent', () => {
  let component: OfferCardAdminComponent;
  let fixture: ComponentFixture<OfferCardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferCardAdminComponent]
    });
    fixture = TestBed.createComponent(OfferCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
