import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner-tertiary',
  templateUrl: 'app/templates/tertiary-banner.component.html',
  styleUrls: ['app/styles/css/tertiary-banner.component.css']
})

export class TertiaryBannerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() text: string = "Lorem ipsum dolor sit amet, consectetur adipisici elit, \nsed eiusmod tempor incidunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud";

  show_text: boolean;

  toggleShow() {
    this.show_text = !this.show_text;
  }
}
