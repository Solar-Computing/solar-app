/// <reference path="../../../../typings/index.d.ts" />

import { Component } from '@angular/core';

// import { PageScroll } from 'ng2-page-scroll';
// import { SimplePageScroll } from 'ng2-simple-page-scroll';

import { HomeData } from '../data/home.data';
import { PrimaryBannerComponent } from './primary-banner.component';
import { SecondaryBannerComponent } from './secondary-banner.component';
import { TertiaryBannerComponent } from './tertiary-banner.component';
import { AlternateBannerComponent } from './alternate-banner.component';
import { ImageBannerComponent } from './image-banner.component';


@Component({
  selector: 'home',
  templateUrl: 'app/templates/home.component.html',
  styleUrls: ['app/styles/css/home.component.css'],
  providers: [HomeData],
  directives: [
    PrimaryBannerComponent,
    SecondaryBannerComponent,
    TertiaryBannerComponent,
    AlternateBannerComponent,
    ImageBannerComponent
  ]
})

export class HomeComponent {
  constructor(private homeData: HomeData) { }

  scrollToContent() {
    let content = $(".top");
    let navbar = $(".navbar");
    $('html, body').animate({
      scrollTop: content.offset().top - navbar.height()
    }, 1100);
  }
}
