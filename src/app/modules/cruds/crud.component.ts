import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MenuSelectionService } from "../../services/utils/menu-selection.service";

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
    private menuSelectionService: MenuSelectionService
  ) {

  }
  //#endregion

  //#region OnInit

  public ngOnInit(): void {
    this.items = this.menuSelectionService.getManagerItem().items!;
  }

  //#endregion

}
