import { provideRouter, RouterConfig } from '@angular/router';
import { LoginFormComponent } from './components/login-form.component';
import { SolarHomeComponent } from './components/solar-home.component';
import { HomeComponent } from './components/home.component';
import { SponsorsComponent } from './components/sponsors.component';
import { SupportComponent } from './components/support.component';
import { PressComponent } from './components/press.component';
import { PressReleaseComponent } from './components/press-release.component';

const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'sign_in',
    component: LoginFormComponent
  },
  {
    path: 'solar_home',
    component: SolarHomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'press_release/:id',
    component: PressReleaseComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
]
