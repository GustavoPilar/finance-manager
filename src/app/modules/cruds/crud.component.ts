import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-crud",
  standalone: false,
  templateUrl: "./crud.component.html"
})
export class CrudComponent implements OnInit {

  //#region Fields

  /** Itens para cadastros */
  public items: MenuItem[] = [];

  //#endregion

  //#region Construtor
  constructor(
    private menuSelectionService: MenuSelectionService,
    private router: Router
  ) {

  }
  //#endregion

  //#region OnInit

  public ngOnInit(): void {
    this.items = this.menuSelectionService.getManagerItem().items!;
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
