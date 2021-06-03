import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasecpageComponent } from './purchasecpage.component';

describe('PurchasecpageComponent', () => {
  let component: PurchasecpageComponent;
  let fixture: ComponentFixture<PurchasecpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasecpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasecpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
