import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrimaryBannerComponent } from './primary-banner.component';
import { AlternateBannerComponent } from './alternate-banner.component';
import { PressRelease } from '../models/press-release';
import { PressReleasesData } from '../data/press-releases.data';

@Component({
  selector: 'press',
  templateUrl: 'app/templates/press.component.html',
  styleUrls: ['app/styles/css/press.component.css'],
  directives: [
    PrimaryBannerComponent,
    AlternateBannerComponent
  ],
  providers: [PressReleasesData]
})

export class PressComponent implements OnInit, AfterViewInit {
  private title = "Press";
  private description = "Read more about the wonderful people who support us."
  private releases: PressRelease[];

  constructor(
    private pressData: PressReleasesData,
    private router: Router
  ) { }

  ngOnInit() {
    this.pressData.getAllPressReleases().then(
      res => this.releases = res
    );
  }

  goToPressRelease(id: number) {
    this.router.navigateByUrl(`press_release/${id}`);
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
