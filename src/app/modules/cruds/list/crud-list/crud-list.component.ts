import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Observable } from "rxjs";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";

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
    private messageService: MessageService,
    private confirmationService: ConfirmationService
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

  //#region Members :: editEntity(), newEntity(), removeEntity()

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

  public confirmDelete(entity: any): void {
    this.confirmationService.confirm({
      header: "Confirmar exclusão",
      icon: PrimeIcons.QUESTION_CIRCLE,
      message: "Todos os registros ligados a \"" + entity.name + "\" também serão excluídos. Deseja continuar mesmo assim?",
      accept: () => {
        this.deleteEntity(entity.id);
      },
      acceptButtonStyleClass: "bg-black",
      rejectButtonStyleClass: "bg-red-500 border-red-500"
    })
  }

  /**
   * @description Faz a tratativa de exclusão do registro
   * @param entityId Identificador do registro
   * @returns {void} Vazio
   */
  private deleteEntity(entityId: number): void {
    this.crudBaseComponent.crudManagerService.delete(entityId).subscribe({
      next: (result) => {
        if (result) {
          this.messageService.add({
            severity: "success",
            summary: "Sucesso",
            detail: "Registro removido."
          });

          this.crudBaseComponent.loadEntities();
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
