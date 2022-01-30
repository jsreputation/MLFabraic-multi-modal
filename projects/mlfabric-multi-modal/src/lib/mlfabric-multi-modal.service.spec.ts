import { TestBed } from '@angular/core/testing';

import { MlfabricMultiModalService } from './mlfabric-multi-modal.service';

describe('MlfabricMultiModalService', () => {
  let service: MlfabricMultiModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlfabricMultiModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
