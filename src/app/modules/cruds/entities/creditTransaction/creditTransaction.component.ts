import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { CreditTransaction } from "../../../../models/entities";
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
  selector: "app-credit-transaction",
  standalone: false,
  templateUrl: "./creditTransaction.component.html",
  providers: [CrudManagerService]
})
export class CreditTransactionComponent extends CrudBaseComponent<CreditTransaction> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.CREDIT_CARD;

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
    return "creditTransaction";
  }

  public override getDescription(entity: CreditTransaction): string {
    return entity.description;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Compra no crédito", plural: "Compras no crédito", isFemale: true };
  }

  public override getDisplayColumn(): DisplayColumn[] {
    return [
      {
        field: "description",
        description: "Descrição",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "totalAmount",
        description: "Valor da compra",
        columnType: ColumnTypeEnum.Numeric,
        prefix: "R$ "
      },
      {
        field: "purchaseDate",
        description: "Data da compra",
        columnType: ColumnTypeEnum.Date
      },
      {
        field: "totalInstallments",
        description: "Qtd. Parcelas",
        columnType: ColumnTypeEnum.Numeric
      }
    ];
  }

  public override initForm(): void {

    let purchaseDate: Date | null = null;

    if (this.selectedEntity?.purchaseDate) {
      purchaseDate = new Date(this.selectedEntity.purchaseDate);
    }

    this.entityForm = this.formBuilder.group({
      description: [this.selectedEntity?.description ?? null, Validators.required],
      categoryId: [this.selectedEntity?.categoryId ?? null, Validators.required],
      totalAmount: [this.selectedEntity?.totalAmount ?? null, Validators.required],
      totalInstallments: [this.selectedEntity?.totalInstallments ?? null, Validators.required],
      purchaseDate: [purchaseDate ?? null, Validators.required]
    });
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      categories: this.apiService.getEntities("category")
    }).pipe(
      tap(({categories}) => {
        this.categories = categories;
      })
    );
  }

  //#endregion

}
