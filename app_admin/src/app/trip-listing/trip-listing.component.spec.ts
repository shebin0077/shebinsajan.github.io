import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplistingComponent } from './trip-listing.component';

describe('TripListingComponent', () => {
  let component: TriplistingComponent;
  let fixture: ComponentFixture<TriplistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriplistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriplistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
