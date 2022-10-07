import { TestBed } from '@angular/core/testing';

import { FinancialToolsService } from './financial-tools.service';

describe('FinancialToolsService', () => {
  let service: FinancialToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
