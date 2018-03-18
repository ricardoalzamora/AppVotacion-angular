import { TestBed, inject } from '@angular/core/testing';

import { VotanteService } from './votante.service';

describe('VotanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotanteService]
    });
  });

  it('should be created', inject([VotanteService], (service: VotanteService) => {
    expect(service).toBeTruthy();
  }));
});
