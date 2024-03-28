import { TestBed } from '@angular/core/testing';

import { CommandeDataService } from './commande-data.service';

describe('CommandeDataService', () => {
  let service: CommandeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
