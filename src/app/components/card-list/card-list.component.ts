import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-card-list",
  standalone: false,
  templateUrl: "./card-list.component.html"
})
export class CardListComponent implements OnInit {

  //#region Fields

  /** Itens */
  @Input()
  public items: MenuItem[] = [];

  //#endregion

  //#region Construtor
  constructor(
    private router: Router
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members

  /**
   * @description Navega até a rota escolhia
   * @param {string} route Rota
   * @returns {void} Vazio
   * */
  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
