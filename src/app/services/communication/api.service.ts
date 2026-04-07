import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IEntityBase } from "../../models/base/entities/i-entities-base";
import { EntitiyBase } from "../../models/base/entities/entities-base";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  public entities: any[] = [
    { id: 1, code: "001", description: "Usuário 1", name: "Gustavo", active: true },
    { id: 2, code: "002", description: "Usuário 2", name: "Yasmin", active: true },
  ];

  //#region Construtor
  constructor(
    private httpClient: HttpClient
  ) {

  }
  //#endregion

  //#region Members 'Get' :: getEntities()

  /**
   * @description Retorna o Observable para consulta da lista de entidades
   * @param {string} entityName Nome da entidade
   * @returns {Observable<any>} Observable
   */
  public getEntities(entityName: string): Observable<any> {
    return this.httpClient.get<any>(entityName);
  }

  public getEntitiesTest(): Observable<any[]> {
    return of(this.entities)
  }

  public getEntityById(entityName: string, entityId: number): Observable<any> {
    if (!entityId)
      return of({ id: 0 });

    return this.httpClient.get<any>(entityName);
  }

  public getEntityTest(entityId: number | null): Observable<any> {
    if (!entityId)
      return of({ id: 0 });

    return of(this.entities.find(x => x.id == entityId));
  }

  //#endregion

  //#region Members 'Post'

  public saveEntity(entityName: string, entity: any): Observable<any> {
    return this.httpClient.post<any>(entityName, entity);
  }

  public saveEntityTest(entity: any): Observable<any> {
    return of(entity);
  }

  //#endregion

  //#region DeleteTeste

  public deleteEntityById(entityName: string, entityId: number): Observable<any[]> {
    return this.httpClient.delete<any>(entityName);
  }

  //#endregion

}
