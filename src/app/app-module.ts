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
import { RegisterComponent } from './pages/register/register.component';
import { DividerModule } from 'primeng/divider';
import { ReportModule } from './modules/report/report.module';

@NgModule({
  declarations: [
    App,
    RegisterComponent,
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
    DividerModule
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
