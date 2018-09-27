import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from '../app/weather.service';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';


import { FormsModule } from '@angular/forms';

const routes = [
    {
      path:'', component: HomeComponent
    },
    {
      path:'home', component: HomeComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent
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
