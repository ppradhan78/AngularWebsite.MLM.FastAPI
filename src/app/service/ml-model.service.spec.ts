import { TestBed } from '@angular/core/testing';

import { MlModelService } from './ml-model.service';

describe('MlModelService', () => {
  let service: MlModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
