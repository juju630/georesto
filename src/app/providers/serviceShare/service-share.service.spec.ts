import { TestBed } from '@angular/core/testing';

import { ServiceShareService } from './service-share.service';

describe('ServiceShareService', () => {
  let service: ServiceShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
