import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-banner',
  templateUrl: 'app/templates/image-banner.component.html',
  styleUrls: ['app/styles/css/image-banner.component.css']
})

export class ImageBannerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() button = false;
  @Input() tint: boolean = true;
}
