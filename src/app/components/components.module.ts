import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { CardListComponent } from "./card-list/card-list.component";
import { ButtonModule } from "primeng/button";
import { AppRoutingModule } from "../app-routing-module";

@NgModule({
  declarations: [
    MenuBarComponent,
    CardListComponent
  ],
  exports: [
    MenuBarComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    AppRoutingModule
],
  providers: [

  ]
})
export class ComponentsModule { }
