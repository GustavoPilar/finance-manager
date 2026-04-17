import { Component, EventEmitter, input, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { DisplayColumn } from "../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../models/base/list/column-type-enum";

@Component({
  selector: "app-card-list",
  standalone: false,
  templateUrl: "./card-list.component.html"
})
export class CardListComponent implements OnInit {

  //#region Fields

  @Input()
  public entity: any = [];

  @Input()
  public displayColumns: DisplayColumn[] = [];

  @Input()
  public isReadOnly: boolean = false;

  @Output()
  public editCommand: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public deleteCommand: EventEmitter<void> = new EventEmitter<void>();

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

  public isBooleanColumn(column: DisplayColumn): boolean {
    return column.columnType == ColumnTypeEnum.Boolean;
  }

  /**
   * @description Verifica o tipo do valor da coluna e faz a trativa correta para a o retorna do valor legível
   * @returns {string} String
   */
  public getColumnValue(entity: any, column: DisplayColumn): string {
    const result: any = entity[column.field];
    if (result == null)
      return "-";

    let value: string = "";

    if (column.prefix)
      value += `${column.prefix} `;

    if (this.isBooleanColumn(column))
      value += result ? "Sim" : "Não";
    else if (column.columnType == ColumnTypeEnum.Date)
      value += new Date(result).toLocaleDateString("PT-BR");
    else if (column.columnType == ColumnTypeEnum.Numeric)
      value += Number(result).toLocaleString("PT-BR");
    else if (column.columnType == ColumnTypeEnum.Text)
      value += result;

    if (column.suffix)
      value += ` ${column.suffix}`;

    return value;
  }

  //#endregion

  //#region Members :: editEntityEmitter(), deleteEntityEmitter()

  public editEntityEmitter(): void {
    this.editCommand.emit();
  }

  public deleteEntityEmitter(): void {
    this.deleteCommand.emit();
  }

  //#endregion

}
