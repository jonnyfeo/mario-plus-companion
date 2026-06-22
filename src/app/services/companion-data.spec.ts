import { TestBed } from '@angular/core/testing';
import { CompanionDataService } from './companion-data';

describe('CompanionDataService', () => {
  let service: CompanionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});