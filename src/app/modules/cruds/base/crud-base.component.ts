import { AfterViewInit, Component, OnInit } from "@angular/core";
import { IEntityBase } from "../../../models/base/entities/i-entities-base";
import { DisplayColumn } from "../../../models/base/list/display-column";
import { CrudManagerService } from "./services/crud-manager.service";
import { ApiService } from "../../../services/communication/api.service";
import { BehaviorSubject, catchError, Observable, of, switchMap, throwError } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TypeDescription } from "../../../models/base/list/type-description";
import { MessageService, PrimeIcons } from "primeng/api";
import { EntitiyBase } from "../../../models/base/entities/entities-base";

@Component({
  selector: "app-crud-base",
  standalone: false,
  template: "",
  providers: [CrudManagerService]
})
export abstract class CrudBaseComponent<T = IEntityBase> implements OnInit, AfterViewInit {

  //#region Fields

  public entityId: number | null = null;

  public entities: any[] = [];

  public selectedEntity: any | null = null;

  public isForm: boolean = false;
  public isList: boolean = false;

  public entityForm!: FormGroup;

  private refreshBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public refresh: Observable<boolean> = this.refreshBehavior.asObservable();

  public icon: string | PrimeIcons = PrimeIcons.LIST;
  public isOnlyRead: boolean = false;

  //#endregion

  //#region Construtor
  constructor(
    public crudManagerService: CrudManagerService,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder,
    protected messageService: MessageService
  ) {

  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.crudManagerService.initialize(this);

    if (this.isList) {
      this.loadEntities();
    }
    else if (this.isForm) {
      this.loadEntity();
    }
  }
  //#endregion

  //#region Members :: loadEntities()

  public loadEntities(): void {
    this.crudManagerService.loadEntities().subscribe({
      next: (entities: T[]) => {
        this.entities = entities;
        this.refreshBehavior.next(true);
      },
      error: (err: any) => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao carregar os registros."
        });
      }
    });
  }

  public loadEntity(): void {
    this.crudManagerService.loadEntity().pipe(
      switchMap((entity: T) => {
        this.selectedEntity = entity;
        return this.loadResources();
      }),
      catchError((err: any) => {
        console.log(err);
        return of(false);
      })
    ).subscribe({
      next: (result) => {

        if (!result) {
          this.messageService.add({
            severity: "error",
            summary: "Erro",
            detail: "Erro ao carregar o registro."
          });
        }

        this.initForm();
        this.refreshBehavior.next(true);
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao carregar o registro."
        });
      }
    });
  }

  public loadResources(): Observable<any> {
    return of([]);
  }

  //#endregion

  //#region Members :: getRefreshObsersable()

  public getRefreshObservable(): Observable<boolean> {
    return this.refresh;
  }

  //#region Members 'abstract'

  /**
   * @description Retorna o nome da entidade
   * @returns {string} Nome da entidade
   */
  public abstract getEntityName(): string;

  /**
   * @description Retorna a descrição da entidade
   * @param entity Entidade
   * @returns {string} Descrição da entidade
   */
  public abstract getDescription(entity: T): string;

  public abstract getTypeDescription(): TypeDescription

  /**
   * @description Retorna as colunas quando é listagem
   * @returns {DisplayColumn} Colunas
   */
  public abstract getDisplayColumn(): DisplayColumn[];

  public abstract initForm(): void;

  public canSave(): boolean {
    if (!this.entityForm || this.isOnlyRead)
      return false;

    return this.entityForm.valid;
  }

  public prepareEntity(): T {
    return this.entityForm.value;
  }
  //#endregion

}
