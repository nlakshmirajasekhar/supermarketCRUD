import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseviewpageComponent } from './purchaseviewpage.component';

describe('PurchaseviewpageComponent', () => {
  let component: PurchaseviewpageComponent;
  let fixture: ComponentFixture<PurchaseviewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseviewpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
