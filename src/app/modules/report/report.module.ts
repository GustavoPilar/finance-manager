import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { CommonModule } from "@angular/common";
import { ReportRoutingModule } from "./report-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ReportComponent
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    providers: [

    ]
})
export class ReportModule { }
