import { TestBed } from '@angular/core/testing';

import { AccueilClientService } from './accueil-client.service';

describe('AccueilClientService', () => {
  let service: AccueilClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
