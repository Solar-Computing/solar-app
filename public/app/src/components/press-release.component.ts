import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PressReleasesData } from '../data/press-releases.data';
import { PressRelease } from '../models/press-release';

@Component({
  selector: 'press-release',
  templateUrl: 'app/templates/press-release.component.html',
  styleUrls: ['app/styles/css/press-release.component.css'],
  providers: [PressReleasesData]
})

export class PressReleaseComponent implements OnInit, OnDestroy {
  release: PressRelease;
  sub: any;

  constructor(
    private pressData: PressReleasesData,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.pressData.getPressRelease(id).then(
          data => this.release = data
        );
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
