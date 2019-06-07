import { TestBed, async, inject } from '@angular/core/testing';

import { PostsResolverGuard } from './posts-resolver.guard';

describe('PostsResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsResolverGuard]
    });
  });

  it('should ...', inject([PostsResolverGuard], (guard: PostsResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
