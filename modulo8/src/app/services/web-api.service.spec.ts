import { TestBed } from '@angular/core/testing';

import { WebAPIService } from './web-api.service';

describe('WebAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebAPIService = TestBed.get(WebAPIService);
    expect(service).toBeTruthy();
  });
});
