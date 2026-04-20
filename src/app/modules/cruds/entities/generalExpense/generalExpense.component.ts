import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { Category, GeneralExpense } from "../../../../models/entities";
import { CrudManagerService } from "../../base/services/crud-manager.service";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { FormBuilder, Validators } from "@angular/forms";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { MessageService, PrimeIcons } from "primeng/api";
import { LoaderService } from "../../../../services/utils/loader.service";
import { forkJoin, Observable, tap } from "rxjs";

@Component({
  selector: "app-general-expense",
  standalone: false,
  templateUrl: "./generalExpense.component.html",
  providers: [CrudManagerService]
})
export class GeneralExpenseComponent extends CrudBaseComponent<GeneralExpense> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.WALLET;

  public categories: any[] = [];

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
    return "generalExpense";
  }

  public override getDescription(): string {
    return "Esse lugar é reservado para aqueles que gostam de registrar todas as compras do mês que foram pagas em: Dinheiro, PIX, Cartão débito, Boleto ou alguma outra forma, tendo assim um controle maior sobre o dinheiro e onde está sendo gasto.";
  }

  public override getName(entity: GeneralExpense): string {
    return entity.name;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Compra geral", plural: "Compras Gerais", isFemale: true };
  }

  public override getDisplayColumn(): DisplayColumn[] {
    return [
      {
        field: "description",
        description: "Descrição",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "amount",
        description: "Valor",
        columnType: ColumnTypeEnum.Numeric,
        prefix: "R$ "
      },
      {
        field: "purchaseDate",
        description: "Data da compra",
        columnType: ColumnTypeEnum.Date
      }
    ];
  }

  public override initForm(): void {

    let purchaseDate: Date | null = null;
    if (this.selectedEntity?.purchaseDate) {
      purchaseDate = new Date(this.selectedEntity.purchaseDate);
    }

    let category: any = this.categories[0];
    if (this.selectedEntity.categoryId) {
      category = this.categories.find(x => x.id == this.selectedEntity.categoryId);
    }

    this.entityForm = this.formBuilder.group({
      name: [this.selectedEntity?.name ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      amount: [this.selectedEntity?.amount ?? null, Validators.required],
      purchaseDate: [purchaseDate, Validators.required],
      category: [category, Validators.required]
    });
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      categories: this.apiService.getEntities("category")
    }).pipe(
      tap(({ categories }) => {
        this.categories = categories;
      })
    )
  }

  public override prepareEntity(): GeneralExpense {
    let entity = this.entityForm.value;

    if (entity.category != null)
      entity.categoryId = entity.category.id;

    return entity;
  }

  //#endregion

}
