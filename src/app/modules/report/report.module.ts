import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { CommonModule } from "@angular/common";
import { ReportRoutingModule } from "./report-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { MonthlyReportComponent } from "./monthly-report/monthly-report.component";

@NgModule({
    declarations: [
        ReportComponent,

        MonthlyReportComponent
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,

        DividerModule
    ],
    providers: [

    ]
})
export class ReportModule { }
