import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolverService implements Resolve<any>{

  constructor(private weatherService : WeatherService, private router : Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<any> | Observable<never> {
    return this.weatherService.getWeather(route.paramMap.get('city'))
      .pipe(
        take(1),
        mergeMap(weather => {
          if(weather){
            console.log(weather);            
            return of (weather);
          } else {
            this.router.navigateByUrl('/NotFound');
            return EMPTY;
          }
        })
      )
  }
}
