import { Component } from '@angular/core';

import { SponsorsData } from '../data/sponsors.data';

@Component({
  selector: 'sponsor',
  styleUrls: ['app/styles/css/sponsors.component.css'],
  templateUrl: 'app/templates/sponsors.component.html',
  providers: [SponsorsData]
})

export class SponsorsComponent { }
