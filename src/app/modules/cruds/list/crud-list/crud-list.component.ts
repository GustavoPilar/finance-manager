import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Observable } from "rxjs";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-crud-list",
  standalone: false,
  templateUrl: "./crud-list.component.html"
})
export class CrudListComponent implements OnInit, AfterViewInit {

  //#region Fields

  /** Nome da entidade */
  @Input()
  public entityName!: string;

  /** Componente do CRUD básico */
  public crudBaseComponent!: CrudBaseComponent;

  //#endregion

  //#region Construtor
  constructor(
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private messageService: MessageService
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
  //#endregion

  //#region Members 'load' :: loadCrudBaseComponent()

  /**
   * @description Carrega o componente do CRUD básico
   * @async
   * @returns {Promise<void>} Promessa vazia
   */
  public async loadCrudBaseComponent(): Promise<void> {

    try {

      this.viewContainerRef.clear();

      const module = await import(`../../entities/${this.entityName}/${this.entityName}.component.ts`);
      const componentName: string = Object.keys(module)[0];
      const createdComponent = this.viewContainerRef.createComponent(module[componentName]);
      this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

      if (this.crudBaseComponent) {
        this.crudBaseComponent.isList = true;

        this.crudBaseComponent.getRefreshObservable().subscribe((result: boolean) => {
          this.changeDetectorRef.detectChanges();
        });
      }

    } catch (error) {
      console.log(error);
      this.changeDetectorRef.detectChanges();
    }

  }

  //#endregion

  //#region Members :: getColumnVale(), editEntity(), newEntity(), removeEntity()

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

    if (column.columnType == ColumnTypeEnum.Boolean)
      value += result ? "Sim" : "Não";
    else if (column.columnType == ColumnTypeEnum.Date)
      value += new Date(result).toLocaleDateString("PT-BR");
    else if (column.columnType == ColumnTypeEnum.Numeric)
      value += Number(result).toLocaleString("PT-BR");
    else if (column.columnType == ColumnTypeEnum.Text)
      value += result;

    if (column.suffix)
      value += ` ${column.prefix}`;

    return value;
  }

  /**
   * @description Navega até a edição do registro
   * @param {any} entity Registro
   * @returns {void} Vazio
   */
  public editEntity(entity: any): void {
    this.router.navigate(["manager/edit", this.entityName, entity.id]);
  }

  /**
   * @description Navega até a criação de um registro
   * @returns {void} Vazio
   */
  public newEntity(): void {
    this.router.navigate(["manager/new", this.entityName]);
  }

  /**
   * @description Faz a tratativa de exclusão do registro
   * @param entityId Identificador do registro
   * @returns {void} Vazio
   */
  public removeEntity(entityId: number): void {
    this.crudBaseComponent.crudManagerService.delete(entityId).subscribe({
      next: (result) => {
        if (result) {
          this.changeDetectorRef.detectChanges();

          this.messageService.add({
            severity: "success",
            summary: "Sucesso",
            detail: "Registro removido."
          });
        }
        else {
          this.messageService.add({
            severity: "error",
            summary: "Erro",
            detail: "Erro ao remover o registro."
          });
        }
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao remover o registro."
        });
      }
    });
  }

}
