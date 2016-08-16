import { Component } from '@angular/core';

import { PrimaryBannerComponent } from './primary-banner.component';
import { AlternateBannerComponent } from './alternate-banner.component';

@Component({
  selector: 'press',
  templateUrl: 'app/templates/press.component.html',
  directives: [
    PrimaryBannerComponent,
    AlternateBannerComponent
  ]
})

export class PressComponent {
  private title = "Press Releases";
  private description = "Read more about the wonderful people who support us in our journey."
}
