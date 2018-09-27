import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location = {
    city: 'Monterrey'
  }

  laterList;
  totalLaterTiles = 5;

  result;

  city: string;

  observable: Observable<any> = Observable.create((observer) => {
    observer.next(this.city);
  })



  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchBtn') searchBtn: ElementRef;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.weatherService.getWeather(this.location.city)
      .subscribe((response) => {
        this.result = response.json();
        console.log(this.result);
        this.laterList = this.result.list.filter((laterWeather, index) => {
          return (index < this.totalLaterTiles + 1 && index != 0);
        });
      });


    console.log(this.laterList);

  }

  viewMore() {
    this.totalLaterTiles += 5;
    this.laterList = this.result.list.filter((laterWeather, index) => {
      return (index < this.totalLaterTiles + 1 && index != 0);
    });
    console.log(this.laterList);
    window.scroll({
      top: document.body.scrollHeight, 
      left: 0, 
      behavior: 'smooth' 
    });  
    console.log(document.body.scrollHeight);    
  }




  onSubmit(event: Event) {
    event.preventDefault();
    this.getSearchInput();
  }

  getSearchInput() {
    console.log(this.searchInput.nativeElement.value);
    this.location.city = this.searchInput.nativeElement.value;
    this.weatherService.getWeather(this.location.city)
      .subscribe((response) => {
        this.result = response.json();
        console.log(this.result);
      },(error)=>{
        alert('Oops! A city named "' + this.location.city+'" was not found :(\n\n'+error);
      })
  }

  getWeatherDate(time: string): string {
    let date: string = '';
    let day: string;
    let month: string;
    let hour: string;
    month = time.charAt(5) + time.charAt(6);
    day = time.charAt(8) + time.charAt(9);
    hour = time.charAt(11) + time.charAt(12);
    switch (month) {
      case '01':
        date += 'January';
        break;
      case '02':
        date += 'February';
        break;
      case '03':
        date += 'March';
        break;
      case '04':
        date += 'April';
        break;
      case '05':
        date += 'May';
        break;
      case '06':
        date += 'June';
        break;
      case '07':
        date += 'July';
        break;
      case '08':
        date += 'August';
        break;
      case '09':
        date += 'September';
        break;
      case '10':
        date += 'October';
        break;
      case '11':
        date += 'November';
        break;
      case '12':
        date += 'December';
        break;
    }

    date += ' ' + day + ', ';
    if (parseInt(hour) == 12) {
      date += hour + ':00 P.M.';
    }
    else if (parseInt(hour) > 12) {
      hour = (parseInt(hour) - 12).toString();
      date += hour + ':00 P.M.';
    }
    else {
      date += hour + ':00 A.M.';
    }

    return date;
  }

}
