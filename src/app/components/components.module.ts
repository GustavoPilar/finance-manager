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
import { AvatarModule } from "primeng/avatar";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { SettingsModalComponent } from "./settings-modal/settings-modal.component";
import { InputIconModule } from "primeng/inputicon";
import { IconFieldModule } from "primeng/iconfield";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [
    MenuBarComponent,
    CardListComponent,
    HeaderComponent,
    CardComponent,
    LogoHeaderComponent,
    SettingsModalComponent,
  ],
  exports: [
    MenuBarComponent,
    CardListComponent,
    HeaderComponent,
    CardComponent,
    LogoHeaderComponent,
    SettingsModalComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    TagModule,
    AvatarModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    CardModule
  ],
  providers: [
    DialogService
  ]
})
export class ComponentsModule { }
