import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CrudRoutingModule } from "./crud-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { CrudComponent } from "./crud.component";
import { ButtonModule } from "primeng/button";
import { CrudManagerService } from "./base/services/crud-manager.service";
import { CrudBaseComponent } from "./base/crud-base.component";
import { CrudListComponent } from "./list/crud-list/crud-list.component";
import { CrudListManagerComponent } from "./list/crud-list-manager/crud-list-manager.component";
import { TableModule } from "primeng/table";
import { CrudFormComponent } from "./form/crud-form/crud-form.component";
import { CrudFormManagerComponent } from "./form/crud-form-manager/crud-form-manager.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { ToolbarModule } from "primeng/toolbar";
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { SelectModule } from "primeng/select";
import { InputNumberModule } from "primeng/inputnumber";
import { MessageModule } from "primeng/message";
import { DatePickerModule } from "primeng/datepicker";
import { ColorPicker } from "primeng/colorpicker";
import { FixedExpenseComponent } from "./entities/fixedExpense/fixedExpense.component";
import { CreditTransactionComponent } from "./entities/creditTransaction/creditTransaction.component";
import { ToggleSwitchModule } from "primeng/toggleswitch";
import { InputIconModule } from "primeng/inputicon";
import { IconFieldModule } from "primeng/iconfield";
import { TagModule } from "primeng/tag";
import { DividerModule } from "primeng/divider";
import { GeneralExpenseComponent } from "./entities/generalExpense/generalExpense.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListComponent,
    CrudListManagerComponent,
    CrudFormComponent,
    CrudFormManagerComponent,

    FixedExpenseComponent,
    GeneralExpenseComponent,

    CreditTransactionComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,

    ButtonModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    ToolbarModule,
    ToastModule,
    SelectModule,
    InputNumberModule,
    MessageModule,
    DatePickerModule,
    ColorPicker,
    ToggleSwitchModule,
    InputIconModule,
    IconFieldModule,
    TagModule,
    DividerModule,
    ConfirmDialogModule,
    CardModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class CrudsModule { }
