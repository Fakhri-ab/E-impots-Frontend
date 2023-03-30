import { TestBed } from '@angular/core/testing';

import { InfogenraleService } from './infogenrale.service';

describe('InfogenraleService', () => {
  let service: InfogenraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfogenraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
