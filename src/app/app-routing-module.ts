import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth-guard';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "manager", loadChildren: () => import ("./modules/cruds/cruds.module").then(cm => cm.CrudsModule), canActivate: [authGuard] },
  { path: "application", loadChildren: () => import ("./modules/application/application.module").then(cm => cm.ApplicationModule), canActivate: [authGuard] },
  { path: "report", loadChildren: () => import ("./modules/report/report.module").then(cm => cm.ReportModule), canActivate: [authGuard] },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
