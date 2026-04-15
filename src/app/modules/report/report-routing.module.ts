import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportComponent } from "./report.component";
import { authGuard } from "../../guards/auth-guard";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: "", component: ReportComponent, canActivate: [authGuard] }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [CommonModule, RouterModule]
})
export class ReportRoutingModule { }
