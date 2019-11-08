import { TestBed, inject } from '@angular/core/testing';

import { CollectionDetailService } from './collection-detail.service';

describe('CollectionDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionDetailService]
    });
  });

  it('should be created', inject([CollectionDetailService], (service: CollectionDetailService) => {
    expect(service).toBeTruthy();
  }));
});
