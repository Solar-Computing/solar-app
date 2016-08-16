import { provideRouter, RouterConfig } from '@angular/router';
import { LoginFormComponent } from './components/login-form.component';
import { SolarHomeComponent } from './components/solar-home.component';
import { HomeComponent } from './components/home.component';
import { SponsorsComponent } from './components/sponsors.component';
import { SupportComponent } from './components/support.component';

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
  }
];

export const appRouterProviders = [
  provideRouter(routes)
]
