import { TestBed } from '@angular/core/testing';

import { MamPluginApertureService } from './mam-plugin-aperture.service';

describe('MamPluginApertureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MamPluginApertureService = TestBed.get(MamPluginApertureService);
    expect(service).toBeTruthy();
  });
});
