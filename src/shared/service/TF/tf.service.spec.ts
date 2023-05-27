import { TestBed } from '@angular/core/testing';

import { TFService } from './tf.service';

describe('TFService', () => {
  let service: TFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
