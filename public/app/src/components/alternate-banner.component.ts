import { Component, Input } from '@angular/core';

@Component({
  selector: 'alternate-banner',
  templateUrl: 'app/templates/alternate-banner.component.html',
  styleUrls: ['app/styles/css/alternate-banner.component.css']
})

export class AlternateBannerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() manifesto: string;
  @Input() text: string = "Lorem ipsum dolor sit amet, consectetur adipisici elit, \nsed eiusmod tempor incidunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud";

  show_text: boolean;

  toggleShow() {
    this.show_text = !this.show_text;
  }
}
