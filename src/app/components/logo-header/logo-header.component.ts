import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logo-header",
  standalone: false,
  templateUrl: "./logo-header.component.html"
})
export class LogoHeaderComponent implements OnInit {

  //#region Fields

  public logoUrl: string = "logo-branca-transparente.png";

  //#endregion

  //#region
  constructor() {

  }
  //#endregion

  //#region Members 'OnInit'
  public ngOnInit(): void {

  }
  //#endregion

}
