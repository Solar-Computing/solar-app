import { Component, AfterViewInit, Input, AfterViewChecked } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SessionsService } from '../services/sessions.service';
import '../rxjs-extensions';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  styleUrls: ['app/styles/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    SessionsService
  ]
})

export class AppComponent implements AfterViewInit {
  @Input() private contentLoaded: boolean = false;
  title = 'Tour of Heroes';

  constructor(
    private sessions: SessionsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  logout() {
    this.sessions.logout();
  }

  ngAfterViewInit() {
    console.log(this.route.snapshot);
  }
}
