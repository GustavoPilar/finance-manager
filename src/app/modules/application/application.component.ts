import { Component, OnInit } from "@angular/core";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: "app-application",
  standalone: false,
  templateUrl: "./application.component.html"
})
export class ApplicationComponent implements OnInit {

  /** Itens para cadastros */
  public items: MenuItem[] = [];

  //#region Construtor
  constructor(
    private menuSelectionService: MenuSelectionService,
    private router: Router
  ) {

  }
  //#endregion

  //#region OnInit

  public ngOnInit(): void {
    this.items = this.menuSelectionService.getApplicationItem().items!;
  }

  //#endregion

  //#region Members :: navigateTo()

  /**
   * @description Navega para a rota escolhida
   * @param {string} routerLink Rota
   * @returns {void} Vazio
   */
  public navigateTo(routerLink: string): void {
    this.router.navigate([routerLink]);
  }

  //#endregion

}
