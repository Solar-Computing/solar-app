import { Component } from '@angular/core';

import { AlternateBannerComponent } from './alternate-banner.component';
import { ImageBannerComponent } from './image-banner.component';

@Component({
  selector: 'support',
  templateUrl: 'app/templates/support.component.html',
  directives: [
    AlternateBannerComponent,
    ImageBannerComponent
  ]
})

export class SupportComponent {

}
