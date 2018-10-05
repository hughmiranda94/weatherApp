import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})

export class CityWeatherComponent implements OnInit {

  result;
  laterList;
  totalLaterTiles = 5;

  constructor(private weatherService: WeatherService,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {

  }

  ngOnInit() {
    this.locationService.setLocation(this.route.snapshot.paramMap.get('city'));
    this.getWeather();
    this.locationService.getLocation().subscribe(
      x => {
        this.getWeather();
      },
      err => {
        this.router.navigateByUrl('/NotFound');
      }
    );
  }

  getWeather() {
    this.result = undefined;
    this.weatherService.getWeather(this.locationService.locationName)
      .subscribe(
        response => {
          this.result = response.json();
          console.log(this.result);
          this.laterList = this.result.list.filter((laterWeather, index) => {
            return (index < this.totalLaterTiles + 1 && index != 0);
          });
        },
        err => {
          this.router.navigateByUrl('/NotFound');
        }
      );
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
