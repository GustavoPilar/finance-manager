import { Injectable, Input } from "@angular/core";
import { ApiService } from "../../../../services/communication/api.service";
import { CrudBaseComponent } from "../crud-base.component";
import { BehaviorSubject, Observable, of } from "rxjs";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class CrudManagerService {

  //#region

  /** Nome da entidade */
  @Input()
  public entityName: string | null = null;

  /** Identificador da entidade */
  @Input()
  public entityId: number | null = null;

  /** Componente de CRUD básico */
  public crudBaseComponent: CrudBaseComponent<any> | null = null;

  //#endregion

  //#region Construtor
  constructor(
    private apiService: ApiService
  ) {

  }
  //#endregion

  //#region Members 'init' :: initialize()

  /**
   * @description Inicia os valores das propriedades
   * @param {CrudBaseComponent} crudBaseComponent Componente de CRUD básico
   * @returns {void} Vazio
   */
  public initialize(crudBaseComponent: CrudBaseComponent<any>): void {
    this.crudBaseComponent = crudBaseComponent;

    this.entityName = crudBaseComponent.getEntityName();
    this.entityId = crudBaseComponent.entityId
  }

  //#endregion

  //#region Members 'load' :: loadEntities(), loadEntity()

  /**
   * @description Retorna o observable para a consulta dos registros a entidade
   * @returns {Observable<any>} Observable
   */
  public loadEntities(): Observable<any> {
    return this.apiService.getEntities(this.entityName!);
  }

  /**
   * @description Retorna o observable para a consulta de um registro a entidade pelo identificador
   * @returns {Observable<any>} Observable
   */
  public loadEntity(): Observable<any> {
    return this.apiService.getEntityById(this.entityName!, this.entityId!);
  }

  //#endregion

  //#region Members 'save' :: save()

  /**
   * @description Pega os valores do formulário e envia para a API para a tratativa de salvamento, retornando o Observable
   * @returns {Observable<any>} Observable
   */
  public save(): Observable<any> {
    let entity: any = this.crudBaseComponent!.prepareEntity();
    entity.id = this.crudBaseComponent?.selectedEntity!.id;

    console.log(entity);

    return this.apiService.saveEntity(this.entityName!, entity);
  }

  //#endregion

  //#region Members 'delete' :: delete()

  /**
   * @description Retorna o Observable para a exclusão do registro pelo identificador
   * @returns {Observable<any>} Observable
   */
  public delete(entityId: number): Observable<any> {
    return this.apiService.deleteEntityById(this.entityName!, entityId);
  }

  //#endregion

}
