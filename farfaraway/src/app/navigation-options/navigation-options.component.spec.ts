import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOptionsComponent } from './navigation-options.component';

describe('NavigationOptionsComponent', () => {
  let component: NavigationOptionsComponent;
  let fixture: ComponentFixture<NavigationOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationOptionsComponent]
    });
    fixture = TestBed.createComponent(NavigationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
