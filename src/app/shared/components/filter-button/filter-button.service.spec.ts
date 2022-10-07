import { TestBed } from '@angular/core/testing';

import { FilterButtonService } from './filter-button.service';

describe('FilterButtonService', () => {
  let service: FilterButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
