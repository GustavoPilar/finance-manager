import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Category, User } from "../../../../models/entities";
import { CrudManagerService } from "../../base/services/crud-manager.service";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { FormBuilder, Validators } from "@angular/forms";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { MessageService, PrimeIcons } from "primeng/api";
import { LoaderService } from "../../../../services/utils/loader.service";

@Component({
  selector: "app-category",
  standalone: false,
  templateUrl: "./category.component.html",
  providers: [CrudManagerService]
})
export class CategoryComponent extends CrudBaseComponent<Category> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.TAG;

  //#endregion

  //#region Construtor
  constructor(
    public override crudManagerService: CrudManagerService,
    protected override apiService: ApiService,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService,
    protected override loaderService: LoaderService
  ) {
    super(crudManagerService, apiService, formBuilder, messageService, loaderService)
  }
  //#endregion

  //#region OnInit
  public override ngOnInit(): void {
    super.ngOnInit();
  }
  //#endregion

  //#region Members 'CrudBase'

  public override getEntityName(): string {
    return "category";
  }

  public override getDescription(entity: Category): string {
    return entity.description;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Categoria", plural: "Categorias", isFemale: true };
  }

  public override getDisplayColumn(): DisplayColumn[] {
    return [
      {
        field: "code",
        description: "Código",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "description",
        description: "Nome",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "isActive",
        description: "Ativo?",
        columnType: ColumnTypeEnum.Boolean
      }
    ];
  }

  public override initForm(): void {
    this.entityForm = this.formBuilder.group({
      code: [this.selectedEntity?.code ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      isActive: [this.selectedEntity?.isActive ?? false, Validators.required]
    });
  }

  //#endregion

}
