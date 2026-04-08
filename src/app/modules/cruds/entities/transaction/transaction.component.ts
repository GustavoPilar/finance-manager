import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { CreditCard, Installment, Transaction } from "../../../../models/entities";
import { FormBuilder, Validators } from "@angular/forms";
import { PrimeIcons, MessageService } from "primeng/api";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { ApiService } from "../../../../services/communication/api.service";
import { CrudManagerService } from "../../base/services/crud-manager.service";
import { forkJoin, Observable, tap } from "rxjs";

@Component({
  selector: "app-transaction",
  standalone: false,
  templateUrl: "./transaction.component.html",
  providers: [CrudManagerService]
})
export class TransactionComponent extends CrudBaseComponent<Transaction> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.MONEY_BILL;

  public creditCards: any[] = [];
  public categories: any[] = [];

  //#endregion

  //#region Construtor
  constructor(
    public override crudManagerService: CrudManagerService,
    protected override apiService: ApiService,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService
  ) {
    super(crudManagerService, apiService, formBuilder, messageService)
  }
  //#endregion

  //#region OnInit
  public override ngOnInit(): void {
    super.ngOnInit();
  }
  //#endregion

  //#region Members 'CrudBase'

  public override getEntityName(): string {
    return "transaction";
  }

  public override getDescription(entity: Transaction): string {
    return entity.description;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Compra", plural: "Compras", isFemale: true };
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
        columnType: ColumnTypeEnum.Numeric
      },
      {
        field: "totalInstallments",
        description: "Qtd. Parcelas",
        columnType: ColumnTypeEnum.Numeric
      },
      {
        field: "purchaseDate",
        description: "Data da compra",
        columnType: ColumnTypeEnum.Date
      },
    ];
  }

  public override initForm(): void {
    this.entityForm = this.formBuilder.group({
      code: [this.selectedEntity?.code ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      creditCard: [this.selectedEntity?.creditCard ?? null, Validators.required],
      category: [this.selectedEntity?.category ?? null, Validators.required],
      totalAmount: [this.selectedEntity?.totalAmount ?? null, Validators.required],
      totalInstallments: [this.selectedEntity?.totalInstallments ?? null, Validators.required]
    });
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      creditCards: this.apiService.getEntities("creditCard"),
      categories: this.apiService.getEntities("category")
    }).pipe(
      tap(({creditCards, categories}) => {
        this.creditCards = creditCards;
        this.categories = categories
      })
    );
  }

  //#endregion

}
