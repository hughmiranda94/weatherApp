import { TestBed, inject } from '@angular/core/testing';

import { WeatherResolverService } from './weather-resolver.service';

describe('WeatherResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherResolverService]
    });
  });

  it('should be created', inject([WeatherResolverService], (service: WeatherResolverService) => {
    expect(service).toBeTruthy();
  }));
});
