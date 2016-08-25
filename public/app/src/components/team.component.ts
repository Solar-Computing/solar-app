import { Component, AfterViewInit } from '@angular/core';

import { ImageBannerComponent } from './image-banner.component';

@Component({
  selector: 'team',
  templateUrl: 'app/templates/team.component.html',
  styleUrls: ['app/styles/css/team.component.css'],
  directives: [ImageBannerComponent]
})

export class TeamComponent implements AfterViewInit {
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
