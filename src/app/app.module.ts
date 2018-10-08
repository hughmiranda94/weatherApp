import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from '../app/weather.service';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';


import { FormsModule } from '@angular/forms';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WeatherResolverService } from './weather-resolver.service';

const routes = [
    {
        path: '', redirectTo: '/Dashboard', pathMatch: 'full'
    },
    {
        path: 'Dashboard', component: HomeComponent
    },
    {
        path: 'NotFound', component: NotFoundComponent
    },
    {
        path: ':city', component: CityWeatherComponent, pathMatch: 'full',
        resolve: {
            weather: WeatherResolverService
        }
    },
    {
        path: '**', redirectTo: '/NotFound', pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        CityWeatherComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule,
        FormsModule
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
