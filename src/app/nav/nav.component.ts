import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  constructor(private locationService: LocationService) { }

}
