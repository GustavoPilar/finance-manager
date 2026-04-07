import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { providePrimeNG } from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { ComponentsModule } from './components/components.module';
import { CrudsModule } from './modules/cruds/cruds.module';
@NgModule({
  declarations: [
    App,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CrudsModule,

    ButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
