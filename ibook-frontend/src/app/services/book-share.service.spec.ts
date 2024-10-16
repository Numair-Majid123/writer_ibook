import { TestBed } from '@angular/core/testing';

import { BookShareService } from './book-share.service';

describe('BookShareService', () => {
  let service: BookShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
