import { Component, Input } from '@angular/core';

@Component({
  selector: 'secondary-banner',
  templateUrl: 'app/templates/secondary-banner.component.html',
  styleUrls: ['app/styles/css/secondary-banner.component.css']
})

export class SecondaryBannerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() text: string = "Lorem ipsum dolor sit amet, consectetur adipisici elit, \nsed eiusmod tempor incidunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud";

  show_text: boolean;

  toggleShow() {
    this.show_text = !this.show_text;
  }
}
