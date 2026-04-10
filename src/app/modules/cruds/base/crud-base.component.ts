import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { IEntityBase } from "../../../models/base/entities/i-entity-base";
import { DisplayColumn } from "../../../models/base/list/display-column";
import { CrudManagerService } from "./services/crud-manager.service";
import { ApiService } from "../../../services/communication/api.service";
import { BehaviorSubject, catchError, Observable, of, switchMap, throwError } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TypeDescription } from "../../../models/base/list/type-description";
import { MessageService, PrimeIcons } from "primeng/api";
import { EntityBase } from "../../../models/base/entities/entity-base";
import { LoaderService } from "../../../services/utils/loader.service";

@Component({
  selector: "app-crud-base",
  standalone: false,
  template: "",
  providers: [CrudManagerService]
})
export abstract class CrudBaseComponent<T = IEntityBase> implements OnInit, AfterViewInit {

  //#region Fields

  /** Identificador do registro */
  @Input()
  public entityId: number | null = null;

  /** Lista de registros */
  public entities: any[] = [];

  /** Registro selecionado */
  public selectedEntity: any | null = null;

  /** É formulário? */
  public isForm: boolean = false;

  /** É lista? */
  public isList: boolean = false;

  /** Formulário do registro */
  public entityForm!: FormGroup;

  /** BehaviorSubject para refresh da página */
  private refreshBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /** Observable para refresh da página */
  public refresh: Observable<boolean> = this.refreshBehavior.asObservable();

  /**
   * @description Ícone do CRUD
   * @default PrimeIcons.List
  */
  public icon: string | PrimeIcons = PrimeIcons.LIST;

  /** É apenas leitura? */
  public isOnlyRead: boolean = false;

  //#endregion

  //#region Construtor
  constructor(
    public crudManagerService: CrudManagerService,
    protected apiService: ApiService,
    protected formBuilder: FormBuilder,
    protected messageService: MessageService,
    protected loaderService: LoaderService
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

  /**
   * @description Tratativa para carregamento da lista de registros
   * @returns {void} Vazio
   */
  public loadEntities(): void {
    this.loaderService.show();

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
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  /**
   * @description Tratativa para carregamento de um registro
   * @returns {void} Vazio
   */
  public loadEntity(): void {
    this.loaderService.show();

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

        this.loaderService.hide();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao carregar o registro."
        });

        this.loaderService.hide();
      }
    });
  }

  /**
   * @description Carrega os recursos necessários para o formulário
   * @returns {Observable<any>} Observable
   */
  public loadResources(): Observable<any> {
    return of([]);
  }

  /**
   * @description Configura o campos pela chave estrangeira
   * @param fk Chave estrangeira
   * @param field Nome do campo
   * @param array Lista do campo
   */
  public setForeignKey(fk: number, field: string, array: any[]): void {
    if (array && fk)
      this.selectedEntity[field] = array.find(x => x.id == fk);
  }

  //#endregion

  //#region Members :: getRefreshObsersable()

  /**
   * @description Retorna o Observable para refresh da página
   * @returns {Observable<any>} Observable<any>
   */
  public getRefreshObservable(): Observable<boolean> {
    return this.refresh;
  }

  //#region Members 'abstract'

  /**
   * @description Retorna o nome da entidade
   * @abstract
   * @returns {string} Nome da entidade
   */
  public abstract getEntityName(): string;

  /**
   * @description Retorna a descrição da entidade
   * @param entity Entidade
   * @abstract
   * @returns {string} Descrição da entidade
   */
  public abstract getDescription(entity: T): string;

  /**
   * @description Retorna o tipo de descrição
   * @abstract
   * @returns {TypeDescription} Descrição singular, descrição no plural e se é fêmea
   */
  public abstract getTypeDescription(): TypeDescription

  /**
   * @description Retorna as colunas quando é listagem
   * @abstract
   * @returns {DisplayColumn} Colunas
   */
  public abstract getDisplayColumn(): DisplayColumn[];

  /**
   * @description Inicia o formulário
   * @abstract
   * @returns {void} Vazio
   */
  public abstract initForm(): void;

  /**
   * @description Retorna um valor booleano para a validação do formulário
   * @returns {boolean} Valor booleano
   */
  public canSave(): boolean {
    if (!this.entityForm || this.isOnlyRead)
      return false;

    return this.entityForm.valid;
  }

  /**
   * @description Retorna o valor do formulário como o tipo do registro
   * @returns {T} Tipo do registro
   */
  public prepareEntity(): T {
    return this.entityForm.value;
  }
  //#endregion

}
