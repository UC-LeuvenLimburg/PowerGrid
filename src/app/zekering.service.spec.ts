import { TestBed } from '@angular/core/testing';

import { ZekeringService } from './zekering.service';

describe('ZekeringService', () => {
  let service: ZekeringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZekeringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
