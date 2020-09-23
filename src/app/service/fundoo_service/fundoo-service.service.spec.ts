import { TestBed } from '@angular/core/testing';

import { FundooServiceService } from '../fundoo_service/fundoo-service.service';

describe('FundooServiceService', () => {
  let service: FundooServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundooServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
