import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Router } from "@angular/router";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-crud-form",
  standalone: false,
  templateUrl: "./crud-form.component.html"
})
export class CrudFormComponent implements OnInit, AfterViewInit {

  //#region Fields

  @Input()
  public entityName!: string;

  @Input()
  public entityId!: number;

  @ViewChild("crudForm", { read: ViewContainerRef })
  public crudFormView!: ViewContainerRef;

  public crudBaseComponent!: CrudBaseComponent;

  //#region

  //#region Constructor
  constructor(
    private messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {

  }
  //#endregion

  //#region OnInit && AfterViewInit
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  //#endregion

  //#region Members 'Init'

  /**
 * @description Carrega o crudBase
 * @async
 * @returns {Promise<void>} Promessa vazia
 */
  public async loadCrudBase(): Promise<void> {

    try {

      this.crudFormView.clear();

      const module = await import(`../../entities/${this.entityName}/${this.entityName}.component.ts`);
      const componentName: string = Object.keys(module)[0];
      const createdComponent = this.crudFormView.createComponent(module[componentName]);
      this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

      if (this.crudBaseComponent) {
        this.crudBaseComponent.entityId = this.entityId;
        this.crudBaseComponent.isForm = true;

        this.crudBaseComponent.getRefreshObservable().subscribe((result: boolean) => {
          this.changeDetectorRef.detectChanges();
        });
      }

    } catch (error) {
      console.log(error);
      this.changeDetectorRef.detectChanges();
    }

  }

  public getFormDescription(): string {
    if (!this.crudBaseComponent)
      return "Formulário";

    const description: TypeDescription = this.crudBaseComponent.getTypeDescription();

    if (this.entityId > 0) {
      return description.single;
    }
    else {
      let prefix: string = description.isFemale ? "Nova " : "Novo ";
      return prefix + description.single;
    }


  }

  public returnToList(): void {
    this.router.navigate(["manager/list", this, this.entityName]);
  }

  public save(): void {
    this.crudBaseComponent.crudManagerService.save().subscribe({
      next: (entity: any) => {
        this.returnToList();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao tentar salvar o registro."
        });
      }
    });
  }

  public canSave(): boolean {
    if (!this.crudBaseComponent)
      return false;

    return this.crudBaseComponent.canSave()
  }

  //#endregion

}
