import { TestBed } from '@angular/core/testing';

import { MamCoreService } from './mam-core.service';

describe('MamCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MamCoreService = TestBed.get(MamCoreService);
    expect(service).toBeTruthy();
  });
});
