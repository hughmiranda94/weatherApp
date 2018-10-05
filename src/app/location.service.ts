import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationName: string = 'Monterrey';
  cities : string[] = [
    'Monterrey, MX',
    'Mexico City, MX',
    'Guadalajara, MX',
    'Houston, US',
    'Los Angeles, US',
    'New York, US',
    'Miami, US',
    'Seattle, US',
    'Toronto, CA',
    'Quebec, CA',
  ]
  
  subject = new Subject();
  observable = this.subject.asObservable();
  constructor(private router : Router) {

    this.subject.next(this.locationName); 
    
  }

  setLocation(location: string) {
    this.locationName = location;
    this.subject.next(this.locationName);    
    this.router.navigateByUrl(this.locationName);
  }

  getLocation() {
    return this.observable;
  }

  getCities() {
    return this.cities;
  }

}
