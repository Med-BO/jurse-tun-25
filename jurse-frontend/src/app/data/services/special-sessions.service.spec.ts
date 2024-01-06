import { TestBed } from '@angular/core/testing';

import { SpecialSessionsService } from './special-sessions.service';

describe('SpecialSessionsService', () => {
  let service: SpecialSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
