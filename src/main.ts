// Polyfills
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ts-helpers';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppModule } from './app/app.module';

// const ENV_PROVIDERS = [];
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
