import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { API_URL } from "../../core/global/config";
import { LoaderService } from "../utils/loader.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {

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
    const url: string = `${API_URL}/${entityName}`;

    return this.httpClient.get<any>(url, { headers: { "Content-Type": "application/json" } });
  }

  /**
   * @description Retorna o Observable para consulta de um entidade pelo Identificador. Se o identificador indefinido, retornará um objeto de id com o valor 0
   * @param {string} entityName Nome da entidade
   * @param {number} entityId Identificador da entidade
   * @returns {Observable<any>} Observable
   */
  public getEntityById(entityName: string, entityId: number): Observable<any> {
    if (!entityId)
      return of({ id: 0, createdAt: new Date() });

    const url: string = `${API_URL}/${entityName}/${entityId}`;

    return this.httpClient.get<any>(url, { headers: { "Content-Type" : "application/json" } });
  }

  //#endregion

  //#region Members 'Post'

  /**
   * @description Save um registro
   * @param {string} entityName Nome da entidade
   * @param {any} data Dado à ser salvo
   * @returns {Observable<any>} Observable
   */
  public saveEntity(entityName: string, data: any): Observable<any> {
    const url: string = `${API_URL}/${entityName}`;

    return this.httpClient.post<any>(url, data, { headers: { "Content-Type" : "application/json" } });
  }

  //#endregion

  //#region Members 'Put'

  /**
   * @description Atualiza um registro
   * @param entityName Nome da entidade
   * @param data Registro atualizado
   * @param entityId Identificador da entidade
   * @returns {Observable<any>} Observable
   */
  public updateEntity(entityName: string, data: any, entityId: number): Observable<any> {
    const url: string = `${API_URL}/${entityName}/${entityId}`;

    return this.httpClient.put(url, data, { headers: { "Content-Type" : "application/json" } });
  }

  //#endregion

  //#region DeleteTeste

  /**
   * @description Remove um registro pelo identificador
   * @param entityName Nome da entidade
   * @param entityId Identificador da entidade
   * @returns {Observable<any>} Observable
   */
  public deleteEntityById(entityName: string, entityId: number): Observable<any[]> {
    const url: string = `${API_URL}/${entityName}/${entityId}`;

    return this.httpClient.delete<any>(url, { headers: { "Content-Type" : "application/json" } });
  }

  //#endregion

}
