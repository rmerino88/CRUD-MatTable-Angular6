// Este fichero es requerido por karma.conf.js
// y lo que hace es cargar de manera recursiva todos los ficheros *.spec.ts y los ficheros del framework

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// No hay un tipo definido para __karma__, se declara como 'any'
declare const __karma__: any;
declare const require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

// Primer paso, se inicializa el entorno de pruebas de Angular
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Segundo paso, se buscan todos los tests.
const context = require.context('./', true, /\.spec\.ts$/);
// Tercer paso, se cargan los modulos necesarios.
context.keys().map(context);
// Finalmente, se inicia __karma__ para ejecutar los test
__karma__.start();
