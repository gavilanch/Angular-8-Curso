import { TestBed } from '@angular/core/testing';

import { ComunicacionServiceService } from './comunicacion-service.service';

describe('ComunicacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicacionServiceService = TestBed.get(ComunicacionServiceService);
    expect(service).toBeTruthy();
  });
});
