import { Component } from '@angular/core';
import { SecondaryBannerComponent } from './secondary-banner.component';
import { TertiaryBannerComponent } from './tertiary-banner.component';

@Component({
  selector: 'banner-primary',
  templateUrl: 'app/templates/primary-banner.component.html',
  styleUrls: ['app/styles/css/primary-banner.component.css'],
  directives: [SecondaryBannerComponent, TertiaryBannerComponent]
})

export class PrimaryBannerComponent { }
