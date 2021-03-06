require('zone.js');
import 'bootstrap';
import 'reflect-metadata';
import './styles/site.css';
//TODO: import css from component itself
import './components/app/app.css';
import './components.shared/responsive-table/responsive-table.component.css';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormBuilder } from '@angular/common';
import * as router from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { App } from './components/app/app';

bootstrap(App, [router.ROUTER_BINDINGS, HTTP_PROVIDERS, FormBuilder]);

// Basic hot reloading support. Automatically reloads and restarts the Angular 2 app each time
// you modify source files. This will not preserve any application state other than the URL.
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
