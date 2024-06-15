import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PrettyPrintPipe } from './common/PrettyPrintPipe';

//export const appConfig: ApplicationConfig = {
//  providers: [provideRouter(routes), provideAnimationsAsync()]
//};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom([BrowserModule, BrowserAnimationsModule, CommonModule, PrettyPrintPipe])
  ],
};
