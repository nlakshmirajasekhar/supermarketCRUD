import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescpageComponent } from './salescpage.component';

describe('SalescpageComponent', () => {
  let component: SalescpageComponent;
  let fixture: ComponentFixture<SalescpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalescpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
