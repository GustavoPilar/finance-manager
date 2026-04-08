import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { CreditCard, Installment } from "../../../../models/entities";
import { FormBuilder, Validators } from "@angular/forms";
import { PrimeIcons, MessageService } from "primeng/api";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { ApiService } from "../../../../services/communication/api.service";
import { CrudManagerService } from "../../base/services/crud-manager.service";
import { forkJoin, Observable, tap } from "rxjs";

@Component({
  selector: "app-installment",
  standalone: false,
  templateUrl: "./installment.component.html",
  providers: [CrudManagerService]
})
export class InstallmentComponent extends CrudBaseComponent<Installment> implements OnInit {

  //#region Fields

  public override icon: string | PrimeIcons = PrimeIcons.MONEY_BILL;
  public override isOnlyRead: boolean = true;

  public transactions: any[] = [];

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
    return "installment";
  }

  public override getDescription(entity: Installment): string {
    return entity.description;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Parcela", plural: "Parcelas", isFemale: true };
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
        description: "Descrição",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "installmentNumber",
        description: "N° da parcela",
        columnType: ColumnTypeEnum.Numeric
      },
      {
        field: "isPaid",
        description: "Paga?",
        columnType: ColumnTypeEnum.Boolean
      },

    ];
  }

  public override initForm(): void {

    this.entityForm = this.formBuilder.group({
      code: [this.selectedEntity?.code ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      transaction: [this.selectedEntity?.transaction ?? null, Validators.required],
      dueDate: [this.selectedEntity?.duaDate ?? null, Validators.required],
      amount: [this.selectedEntity?.amount ?? null, Validators.required],
      installmentNumber: [this.selectedEntity?.installmentNumber ?? 0, Validators.required],
      isPaid: [this.selectedEntity?.isPaid ?? false, Validators.required]
    });
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      transactions: this.apiService.getEntities("transaction")
    }).pipe(
      tap(({transactions}) => {
        this.transactions = transactions;
      })
    );
  }

  //#endregion

}
