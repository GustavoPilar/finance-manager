import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";
import { AuthService } from "../../services/auth/authentication.service";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { SettingsModalComponent } from "../settings-modal/settings-modal.component";

@Component({
  selector: "app-menu-bar",
  standalone: false,
  templateUrl: "./meu-bar.component.html"
})
export class MenuBarComponent implements OnInit {

  //#region Fields

  /** Items de menu */
  public items: MenuItem[] = [];

  public itemUser: MenuItem = [];

  public logoUrl: string = "logo-branca-transparente.png";

  public settingsModalRef: DynamicDialogRef<SettingsModalComponent> | null = null;

  //#endregion

  //#region Constructor
  constructor(
    private menuSelectionService: MenuSelectionService,
    private authService: AuthService,
    private DialogService: DialogService
  ) {

  }
  //#endregion

  //#region OnInit

  public ngOnInit(): void {
    this.items = this.menuSelectionService.getMenuItems();
  }

  //#endregion

  //#region Members

  /**
   * @description Navega até a página principal
   * @returns {void} Vazio
   */
  public navigateToHome(): void {
    this.menuSelectionService.navigateToHome();
  }

  public logout(): void {
    this.authService.logout().then(() => {
      location.reload();
    })
  }

  public openSettings(): void {
    this.settingsModalRef = this.DialogService.open(SettingsModalComponent, {
      closable:  true,
      draggable: false,
      styleClass: "max-w-30rem",
      header: "Usuário"
    });
  }

  //#endregion
}
