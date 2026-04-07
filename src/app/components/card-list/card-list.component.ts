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

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
