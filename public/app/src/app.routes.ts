import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesComponent } from './components/heroes.component';
import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { LoginFormComponent } from './components/login-form.component';
import { HomeComponent } from './components/home.component';
import { SolarHomeComponent } from './components/solar-home.component';
import { HeroFormComponent } from './components/hero-form.component';
import { PrimaryBannerComponent } from './components/primary-banner.component';

const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/solar_home'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
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
    path: 'add_hero',
    component: HeroFormComponent
  },
  {
    path: 'primary_banner',
    component: PrimaryBannerComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
]
