import { TestBed } from '@angular/core/testing';

import { SwitchStateService } from './switch-state.service';

describe('SwitchStateService', () => {
  let service: SwitchStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
