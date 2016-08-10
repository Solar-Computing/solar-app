import { Component } from '@angular/core';

import { HomeData } from '../data/home.data';
import { PrimaryBannerComponent } from './primary-banner.component';
import { SecondaryBannerComponent } from './secondary-banner.component';
import { TertiaryBannerComponent } from './tertiary-banner.component';
import { AlternateBannerComponent } from './alternate-banner.component';


@Component({
  selector: 'home',
  templateUrl: 'app/templates/home.component.html',
  providers: [HomeData],
  directives: [
    PrimaryBannerComponent,
    SecondaryBannerComponent,
    TertiaryBannerComponent,
    AlternateBannerComponent
  ]
})

export class HomeComponent {
  constructor(private homeData: HomeData) { }
}
