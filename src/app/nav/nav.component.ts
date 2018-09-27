import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor(private locationService : LocationService) { }

  city : string;

  observable : Observable<any> = Observable.create((observer)=>{
    observer.next(this.city);
  })

  

  @ViewChild('searchInput') searchInput : ElementRef;
  @ViewChild('searchBtn') searchBtn : ElementRef;

  

  ngOnInit() {
    
  }

  getSearchInput(){
    console.log(this.searchInput.nativeElement.value);
    this.city = this.searchInput.nativeElement.value;
    this.locationService.getLocation(this.observable);
    console.log('Made it to Nav'); 
    this.observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }

}
