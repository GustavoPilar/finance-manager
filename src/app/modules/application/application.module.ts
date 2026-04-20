import { NgModule } from "@angular/core";
import { ApplicationRoutingModule } from "./application-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../../components/components.module";
import { ApplicationComponent } from "./application.component";
import { InstallmentComponent } from "./installment/installment.component";
import { SelectModule } from "primeng/select";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { DividerModule } from "primeng/divider";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [
    ApplicationComponent,

    InstallmentComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,

    SelectModule,
    ButtonModule,
    TagModule,
    DividerModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class ApplicationModule { }
