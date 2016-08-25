import { Component, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SponsorsData } from '../data/sponsors.data';

declare var window: Window;

@Component({
  selector: 'sponsor',
  styleUrls: ['app/styles/css/sponsors.component.css'],
  templateUrl: 'app/templates/sponsors.component.html',
  providers: [SponsorsData],
  directives: [ROUTER_DIRECTIVES]
})

export class SponsorsComponent implements AfterViewInit {
  constructor(private sponsorsData: SponsorsData) { }

  openLink(link: string) {
    window.open(link, '_blank');
  }

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
