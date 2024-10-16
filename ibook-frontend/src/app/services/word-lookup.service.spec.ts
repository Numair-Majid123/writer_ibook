import { TestBed } from '@angular/core/testing';

import { WordLookupService } from './word-lookup.service';

describe('WordLookupService', () => {
  let service: WordLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
