import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePaginationComponent } from './vehicle-pagination.component';

describe('VehiclePaginationComponent', () => {
  let component: VehiclePaginationComponent;
  let fixture: ComponentFixture<VehiclePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclePaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
