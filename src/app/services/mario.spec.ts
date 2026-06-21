import { TestBed } from '@angular/core/testing';

import { Mario } from './mario';

describe('Mario', () => {
  let service: Mario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
