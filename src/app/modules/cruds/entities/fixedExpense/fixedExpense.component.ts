import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { FixedExpense } from "../../../../models/entities";
import { CrudManagerService } from "../../base/services/crud-manager.service";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { FormBuilder, Validators } from "@angular/forms";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { MessageService, PrimeIcons } from "primeng/api";
import { LoaderService } from "../../../../services/utils/loader.service";

@Component({
  selector: "app-fixed-expense",
  standalone: false,
  templateUrl: "./fixedExpense.component.html",
  providers: [CrudManagerService]
})
export class FixedExpenseComponent extends CrudBaseComponent<FixedExpense> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.WALLET;

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
    return "fixedExpense";
  }

  public override getDescription(entity: FixedExpense): string {
    return entity.description;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Conta fixa", plural: "Contas Fixas", isFemale: true };
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
        field: "dueDay",
        description: "Dia do pagamento",
        columnType: ColumnTypeEnum.Numeric,
        suffix: " de todo mês"
      },
      {
        field: "isActive",
        description: "Conta ativa?",
        columnType: ColumnTypeEnum.Boolean
      }
    ];
  }

  public override initForm(): void {
    this.entityForm = this.formBuilder.group({
      description: [this.selectedEntity?.description ?? null, Validators.required],
      amount: [this.selectedEntity?.amount ?? null, Validators.required],
      dueDay: [this.selectedEntity.dueDay ?? null, Validators.required],
      isActive: [this.selectedEntity?.isActive ?? null, Validators.required]
    });
  }

  //#endregion

}
