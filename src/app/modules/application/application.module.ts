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
    TagModule
  ],
  providers: [

  ]
})
export class ApplicationModule { }
