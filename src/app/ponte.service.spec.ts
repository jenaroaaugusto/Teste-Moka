import { TestBed } from '@angular/core/testing';

import { PonteService } from './ponte.service';

describe('PonteService', () => {
  let service: PonteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
