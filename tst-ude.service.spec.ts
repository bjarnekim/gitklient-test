/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TstUdeService } from './tst-ude.service';

describe('TstUdeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TstUdeService]
    });
  });

  it('should ...', inject([TstUdeService], (service: TstUdeService) => {
    expect(service).toBeTruthy();
  }));
});
