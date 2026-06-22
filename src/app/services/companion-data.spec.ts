import { TestBed } from '@angular/core/testing';

import { CompanionData } from './companion-data';

describe('CompanionData', () => {
  let service: CompanionData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanionData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
