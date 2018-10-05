import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  result;
  results: any[] =[];
  laterList;
  totalLaterTiles = 5;

  cities : string[] = []

  constructor(private weatherService: WeatherService,
    private locationService: LocationService) {

  }

  ngOnInit() {
    this.cities = this.locationService.getCities();
    this.cities.forEach(city => {
    this.getWeatherDashboard(city);
    });
  }

  getWeatherDashboard(city) { 
    this.weatherService.getWeather(city)
      .subscribe(
        response => {
        this.results.push(response.json());
      },
      err => alert(err)
      );
      console.log(this.results);
  }

  goToCityWeather(city){    
    this.locationService.setLocation(city);
  }

}