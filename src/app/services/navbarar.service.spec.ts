import { TestBed } from '@angular/core/testing';

import { NavbararService } from './navbarar.service';

describe('NavbararService', () => {
  let service: NavbararService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbararService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
