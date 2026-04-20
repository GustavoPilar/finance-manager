import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
  public iconSize: "xl" | "2xl" | "3xl" = "xl";

  @Input()
  public description: string = "";

  @Input()
  public showButton: boolean = false;

  @Input()
  public buttonLabel: string = "";

  @Input()
  public buttonIcon: string = "";

  @Output()
  public buttonCommand: EventEmitter<void> = new EventEmitter<void>();

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

  public buttonCommandEmit(): void {
    this.buttonCommand.emit();
  }

  //#endregion

}
