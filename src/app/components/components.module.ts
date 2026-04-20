import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { CardListComponent } from "./card-list/card-list.component";
import { ButtonModule } from "primeng/button";
import { AppRoutingModule } from "../app-routing-module";
import { HeaderComponent } from "./header/header.component";
import { DividerModule } from "primeng/divider";
import { CardComponent } from "./card/card.component";
import { TagModule } from "primeng/tag";
import { LogoHeaderComponent } from "./logo-header/logo-header.component";

@NgModule({
  declarations: [
    MenuBarComponent,
    CardListComponent,
    HeaderComponent,
    CardComponent,
    LogoHeaderComponent,
  ],
  exports: [
    MenuBarComponent,
    CardListComponent,
    HeaderComponent,
    CardComponent,
    LogoHeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    TagModule
],
  providers: [

  ]
})
export class ComponentsModule { }
