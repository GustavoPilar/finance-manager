import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationComponent } from "./application.component";
import { authGuard } from "../../guards/auth-guard";
import { InstallmentComponent } from "./installment/installment.component";

const routes: Routes = [
  { path: "", component: ApplicationComponent, canActivate: [authGuard] },
  { path: "installment", component: InstallmentComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class ApplicationRoutingModule { }
