import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { CommonModule } from "@angular/common";
import { ReportRoutingModule } from "./report-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { MonthlyReportComponent } from "./monthly-report/monthly-report.component";
import { CardModule } from "primeng/card";
import { BadgeModule } from "primeng/badge";
import { MeterGroupModule } from 'primeng/metergroup';
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

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

        DividerModule,
        CardModule,
        BadgeModule,
        MeterGroupModule,
        ToastModule
    ],
    providers: [
      MessageService
    ]
})
export class ReportModule { }
