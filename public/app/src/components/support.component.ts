import { Component, AfterViewInit } from '@angular/core';

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

export class SupportComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    let content = $(".top");
    let navbar = $(".navbar");
    $('html, body').animate({
      scrollTop: content.offset().top - navbar.height()
    }, 500);
  }
}
