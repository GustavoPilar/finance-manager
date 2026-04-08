import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudListComponent } from "../crud-list/crud-list.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-crud-list-manager",
  standalone: false,
  templateUrl: "./crud-list-manager.component.html"
})
export class CrudListManagerComponent implements OnInit, AfterViewInit {

  //#region Fields

  /** Componente do formulário */
  @ViewChild(CrudListComponent, { read: CrudListComponent })
  public crudListComponent!: CrudListComponent;

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
    this.loadCrudList();
  }
  //#endregion

  //#region Members :: loadCrudList()

  /**
   * @description Carrega o componente do formulário e faz tratativa inicial
   * @returns {void} Vazio
   */
  private loadCrudList(): void {
    const entityName: string = this.activatedRoute.snapshot.params["entityName"];

    if (entityName) {
      this.crudListComponent.entityName = entityName;
      this.crudListComponent.loadCrudBaseComponent();
    }
  }


}
