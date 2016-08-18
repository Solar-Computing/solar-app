import { Component } from '@angular/core';

import { PrimaryBannerComponent } from './primary-banner.component';
import { AlternateBannerComponent } from './alternate-banner.component';

@Component({
  selector: 'press',
  templateUrl: 'app/templates/press.component.html',
  styleUrls: ['app/styles/css/press.component.css'],
  directives: [
    PrimaryBannerComponent,
    AlternateBannerComponent
  ]
})

export class PressComponent {
  private title = "Press";
  private description = "Read more about the wonderful people who support us."
}
