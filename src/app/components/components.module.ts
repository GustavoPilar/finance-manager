import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { CardListComponent } from "./card-list/card-list.component";
import { ButtonModule } from "primeng/button";
import { AppRoutingModule } from "../app-routing-module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    MenuBarComponent,
    CardListComponent,
    HeaderComponent
  ],
  exports: [
    MenuBarComponent,
    CardListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
],
  providers: [

  ]
})
export class ComponentsModule { }
