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

  @Input()
  public entityName!: string;

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

  //#region Members 'init' :: initEntity()

  /**
   * @description Carrega o crudBase
   * @async
   * @returns {Promise<void>} Promessa vazia
   */
  public async loadCrudBase(): Promise<void> {

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

  //#region Members

  public getColumnValue(entity: any, column: DisplayColumn): string {
    if (column.columnType == ColumnTypeEnum.Boolean)
      return entity[column.field] ? "Sim" : "Não";

    return entity[column.field];
  }

  public editEntity(entity: any): void {
    this.router.navigate(["manager/edit", this.entityName, entity.id]);
  }

  public newEntity(): void {
    this.router.navigate(["manager/new", this.entityName]);
  }

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
