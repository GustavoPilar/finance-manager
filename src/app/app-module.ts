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
import { NgxSpinnerModule } from "ngx-spinner";
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

    NgxSpinnerModule.forRoot({ type: "ball-atom" }),

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
      },
      translation: {
        dateFormat: "dd/mm/yy",
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
