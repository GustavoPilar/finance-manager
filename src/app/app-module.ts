import { ApplicationModule, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
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
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';
import { authInterceptor } from './interceptors/auth-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';
import { ReportModule } from './modules/report/report.module';
import { TabsModule } from 'primeng/tabs';
import { definePreset } from "@primeuix/themes";

export const customPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      primary: {
        50: '{zinc.50}',
        100: '{zinc.100}',
        200: '{zinc.200}',
        300: '{zinc.300}',
        400: '{zinc.400}',
        500: '{zinc.500}',
        600: '{zinc.600}',
        700: '{zinc.700}',
        800: '{zinc.800}',
        900: '{zinc.900}',
        950: '{zinc.950}',
      },
      secondary: {
        50: '{cyan.50}',
        100: '{cyan.100}',
        200: '{cyan.200}',
        300: '{cyan.300}',
        400: '{cyan.400}',
        500: '{cyan.500}',
        600: '{cyan.600}',
        700: '{cyan.700}',
        800: '{cyan.800}',
        900: '{cyan.900}',
        950: '{cyan.950}',
      }
    }
  }
});

@NgModule({
  declarations: [
    App,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    CrudsModule,
    ApplicationModule,
    ReportModule,

    NgxSpinnerModule.forRoot({ type: "ball-atom" }),
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    DividerModule,
    TabsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: customPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      },
      ripple: true,
      translation: {
        dateFormat: "dd/mm/yy",
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        emptyMessage: "Nenhum registro",
        accept: "Sim",
        reject: "Não",
        emptySelectionMessage: "Nenhum registro encontrado.",
        emptyFilterMessage: "Nenhum registro encontrado."
      }
    }),
    MessageService,
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
