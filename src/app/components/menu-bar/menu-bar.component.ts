import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";

@Component({
  selector: "app-menu-bar",
  standalone: false,
  templateUrl: "./meu-bar.component.html"
})
export class MenuBarComponent implements OnInit {

  //#region Fields

  /** Items de menu */
  public items: MenuItem[] = [];

  //#endregion

  //#region Constructor
  constructor(
    private menuSelectionService: MenuSelectionService
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

}
