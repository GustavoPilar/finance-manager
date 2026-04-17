import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";

@Component({
  selector: "app-report",
  standalone: false,
  templateUrl: "./report.component.html"
})
export class ReportComponent implements OnInit {

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
    this.items = this.menuSelectionService.getReportItem().items!;
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
