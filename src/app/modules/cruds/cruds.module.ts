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
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./entities/user/user.component";
import { CheckboxModule } from "primeng/checkbox";
import { ToolbarModule } from "primeng/toolbar";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListComponent,
    CrudListManagerComponent,
    CrudFormComponent,
    CrudFormManagerComponent,

    UserComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,

    ButtonModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    ToolbarModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class CrudsModule { }
