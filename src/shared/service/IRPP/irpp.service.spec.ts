import { TestBed } from '@angular/core/testing';

import { IrppService } from './irpp.service';

describe('IrppService', () => {
  let service: IrppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
