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
import { UserComponent } from "./entities/user/user.component";
import { CheckboxModule } from "primeng/checkbox";
import { ToolbarModule } from "primeng/toolbar";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { SelectModule } from "primeng/select";
import { InputNumberModule } from "primeng/inputnumber";
import { MessageModule } from "primeng/message";
import { CategoryComponent } from "./entities/category/category.component";
import { DatePickerModule } from "primeng/datepicker";
import { ColorPicker } from "primeng/colorpicker";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListComponent,
    CrudListManagerComponent,
    CrudFormComponent,
    CrudFormManagerComponent,

    UserComponent,
    CategoryComponent
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
    ColorPicker
  ],
  providers: [
    MessageService
  ]
})
export class CrudsModule { }
