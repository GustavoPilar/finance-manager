import { Component, Input, OnInit } from "@angular/core";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-header",
  standalone: false,
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {

  //#region Fields

  @Input()
  public title: string = "";

  @Input()
  public icon: string | PrimeIcons = "";

  @Input()
  public iconPos: "left" | "right" = "left";

  @Input()
  public size: "xl" | "2xl" | "3xl" = "xl";

  @Input()
  public description: string = "";

  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members

  //#endregion

}
