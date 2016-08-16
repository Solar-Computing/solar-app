import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-banner',
  templateUrl: 'app/templates/primary-banner.component.html',
  styleUrls: ['app/styles/css/primary-banner.component.css'],
})

export class PrimaryBannerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() text: string;
}
