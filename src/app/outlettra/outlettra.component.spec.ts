import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlettraComponent } from './outlettra.component';

describe('OutlettraComponent', () => {
  let component: OutlettraComponent;
  let fixture: ComponentFixture<OutlettraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlettraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlettraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
