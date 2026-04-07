import { Injectable, Input } from "@angular/core";
import { IEntityBase } from "../../../../models/base/entities/i-entities-base";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { CrudBaseComponent } from "../crud-base.component";
import { BehaviorSubject, Observable, of } from "rxjs";
import { EntitiyBase } from "../../../../models/base/entities/entities-base";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class CrudManagerService {

  //#region

  /** Nome da entidade */
  public entityName: string | null = null;

  public entityId: number | null = null;

  public crudBaseComponent: CrudBaseComponent<any> | null = null;

  //#endregion

  //#region Construtor
  constructor(
    private apiService: ApiService
  ) {

  }
  //#endregion

  //#region Members

  public initialize(crudBaseComponent: CrudBaseComponent<any>): void {
    this.crudBaseComponent = crudBaseComponent;

    this.entityName = crudBaseComponent.getEntityName();
    this.entityId = crudBaseComponent.entityId
  }

  public loadEntities(): Observable<any> {
    return this.apiService.getEntitiesTest();

    return this.apiService.getEntities(this.entityName!);
  }

  public loadEntity(): Observable<any> {
    return this.apiService.getEntityTest(this.entityId);
    return this.apiService.getEntityById(this.entityName!, this.entityId!);
  }

  //#endregion

  //#region Members 'save'

  public save(): Observable<any> {
    let entity: any = this.crudBaseComponent!.prepareEntity();
    entity.id = this.crudBaseComponent?.selectedEntity!.id;

    console.log(entity);

    // return this.apiService.saveEntityTest(entity);
    return this.apiService.saveEntity(this.entityName!, entity);
  }

  public delete(entityId: number): Observable<any> {
    // this.crudBaseComponent!.entities = this.crudBaseComponent!.entities.filter(x => x.id != entityId);

    // return of(true);

    return this.apiService.deleteEntityById(this.entityName!, entityId);
  }

  //#endregion

}
