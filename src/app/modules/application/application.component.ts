import { Component, OnInit } from "@angular/core";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";
import { MenuItem } from "primeng/api";

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
    private menuSelectionService: MenuSelectionService
  ) {

  }
  //#endregion

  //#region OnInit

  public ngOnInit(): void {
    this.items = this.menuSelectionService.getApplicationItem().items!;
  }

  //#endregion

}
