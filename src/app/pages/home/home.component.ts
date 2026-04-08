import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  //#region Fields

  /** Itens para escolha */
  public items: MenuItem[] = [];

  //#endregion

  //#region Construtor
  constructor(
    private route: Router,
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
   * @description Navega para a rota escolhida
   * @param {string} route Rota
   * @returns {void} Vazio
   */
  public navigateTo(route: string): void {
    this.route.navigate([route]);
  }

  //#endregion

}
