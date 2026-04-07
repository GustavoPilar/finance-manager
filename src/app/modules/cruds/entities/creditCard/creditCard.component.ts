import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { CreditCard } from "../../../../models/entities";
import { FormBuilder, Validators } from "@angular/forms";
import { PrimeIcons, MessageService } from "primeng/api";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { ApiService } from "../../../../services/communication/api.service";
import { CrudManagerService } from "../../base/services/crud-manager.service";

@Component({
  selector: "app-credit-card",
  standalone: false,
  templateUrl: "./creditCard.component.html",
  providers: [CrudManagerService]
})
export class CreditCardComponent extends CrudBaseComponent<CreditCard> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.CREDIT_CARD;

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
    return "bank";
  }

  public override getDescription(entity: CreditCard): string {
    return entity.description;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Cartão de crédito", plural: "Cartões de créditos", isFemale: false };
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
      }
    ];
  }

  public override initForm(): void {
    this.entityForm = this.formBuilder.group({
      code: [this.selectedEntity?.code ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      user: [this.selectedEntity?.user ?? null, Validators.required]
    });
  }

  //#endregion

}
