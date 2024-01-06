import { TestBed } from '@angular/core/testing';

import { KeyNoteSpeakersService } from './key-note-speakers.service';

describe('KeyNoteSpeakersService', () => {
  let service: KeyNoteSpeakersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyNoteSpeakersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
