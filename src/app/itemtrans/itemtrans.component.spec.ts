import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtransComponent } from './itemtrans.component';

describe('ItemtransComponent', () => {
  let component: ItemtransComponent;
  let fixture: ComponentFixture<ItemtransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemtransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
