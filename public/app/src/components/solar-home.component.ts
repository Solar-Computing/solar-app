import { Component } from '@angular/core';
import { ContributionComponent } from './contributions.component';

@Component({
  selector: 'solar-home',
  templateUrl: 'app/templates/solar-home.component.html',
  directives: [ContributionComponent]
})

export class SolarHomeComponent {
  private showContributions: boolean = false;

  toggleShowContributions() {
    this.showContributions = !this.showContributions;
  }
}
