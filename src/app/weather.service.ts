import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '12baf642eae97e50ef0b46369d03d0ee';
  url;

  constructor(private http:Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q='
   }
   
   getWeather(city){
     return this.http.get(this.url+city+'&APPID='+this.apiKey);
   }
}
