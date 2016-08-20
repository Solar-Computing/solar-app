import { Component } from '@angular/core';

import { ImageBannerComponent } from './image-banner.component';

@Component({
  selector: 'team',
  templateUrl: 'app/templates/team.component.html',
  styleUrls: ['app/styles/css/team.component.css'],
  directives: [ImageBannerComponent]
})

export class TeamComponent { }
