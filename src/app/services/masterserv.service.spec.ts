import { TestBed } from '@angular/core/testing';

import { MasterservService } from './masterserv.service';

describe('MasterservService', () => {
  let service: MasterservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
