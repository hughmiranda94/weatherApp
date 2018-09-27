import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationObservable : Observable<any>;

  constructor() { }

  getLocation(observable){
    this.locationObservable =  observable;
    console.log(observable);
    observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }

  getLocationObservable(){
    return this.locationObservable;
  }
}
