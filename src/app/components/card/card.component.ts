import { Component, input, Input, OnInit } from "@angular/core";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-card",
  standalone: false,
  templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {

  //#region Fields

  @Input()
  public title: string = "";

  @Input()
  public icon: string | PrimeIcons = "";

  @Input()
  public description: string = "";

  @Input()
  public command = () => {}

  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {

  }
  //#endregion


}
