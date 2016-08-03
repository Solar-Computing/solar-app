"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./components/heroes.component');
var dashboard_component_1 = require('./components/dashboard.component');
var hero_detail_component_1 = require('./components/hero-detail.component');
var login_form_component_1 = require('./components/login-form.component');
var solar_home_component_1 = require('./components/solar-home.component');
var hero_form_component_1 = require('./components/hero-form.component');
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/solar_home'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'sign_in',
        component: login_form_component_1.LoginFormComponent
    },
    {
        path: 'solar_home',
        component: solar_home_component_1.SolarHomeComponent
    },
    {
        path: 'add_hero',
        component: hero_form_component_1.HeroFormComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map