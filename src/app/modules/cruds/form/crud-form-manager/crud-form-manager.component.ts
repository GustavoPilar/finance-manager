import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../../list/crud-list/crud-list.component";
import { CrudFormComponent } from "../crud-form/crud-form.component";

@Component({
  selector: "app-crud-form-manager",
  standalone: false,
  templateUrl: "./crud-form-manager.component.html"
})
export class CrudFormManagerComponent implements OnInit, AfterViewInit {

  //#region Fields

  /** Componente do formulário */
  @ViewChild(CrudFormComponent, { read: CrudFormComponent })
  public crudFormComponent!: CrudFormComponent;

  //#endregion

  //#region Construtor
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  //#region OnInit
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.loadCrudFormComponent();
  }
  //#endregion

  //#region Members :: loadCrudFormComponent()

  /**
   * @description Carrega o componente do formulário e faz tratativa inicial
   * @returns {void} Vazio
   */
  private loadCrudFormComponent(): void {
    const entityName: string = this.activatedRoute.snapshot.params["entityName"];
    const entityId: number = this.activatedRoute.snapshot.params["entityId"] ?? 0;

    if (entityName) {
      this.crudFormComponent.entityName = entityName;
      this.crudFormComponent.entityId = entityId;
      this.crudFormComponent.loadCrudBaseComponent();
    }
  }

  //#endregion

}
