import { Component } from '@angular/core';

import { SponsorsData } from '../data/sponsors.data';

declare var window: Window;

@Component({
  selector: 'sponsor',
  styleUrls: ['app/styles/css/sponsors.component.css'],
  templateUrl: 'app/templates/sponsors.component.html',
  providers: [SponsorsData]
})

export class SponsorsComponent {
  constructor(private sponsorsData: SponsorsData) { }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
