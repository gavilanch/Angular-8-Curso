import { TestBed } from '@angular/core/testing';

import { BoardsService } from './boards.service';

describe('BoardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardsService = TestBed.get(BoardsService);
    expect(service).toBeTruthy();
  });
});
