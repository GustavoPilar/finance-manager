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
import { forkJoin, Observable, tap } from "rxjs";
import { LoaderService } from "../../../../services/utils/loader.service";

@Component({
  selector: "app-credit-card",
  standalone: false,
  templateUrl: "./creditCard.component.html",
  providers: [CrudManagerService]
})
export class CreditCardComponent extends CrudBaseComponent<CreditCard> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.CREDIT_CARD;

  public users: any[] = [];
  public banks: any[] = [];

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
    return "creditCard";
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
        field: "description",
        description: "Descrição",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "isActive",
        description: "ativo?",
        columnType: ColumnTypeEnum.Boolean
      }
    ];
  }

  public override initForm(): void {
    this.entityForm = this.formBuilder.group({
      code: [this.selectedEntity?.code ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      user: [this.selectedEntity?.user ?? null, Validators.required],
      bank: [this.selectedEntity?.bank ?? null, Validators.required],
      isActive: [this.selectedEntity?.isActive ?? false, Validators.required],
      closingDay: [this.selectedEntity?.closingDay ?? null, Validators.required],
      dueDay: [this.selectedEntity?.dueDay ?? null, Validators.required],
      limit: [this.selectedEntity?.limit ?? null, Validators.required]
    });
  }

  public override loadResources(): Observable<any> {
    return forkJoin({
      users: this.apiService.getEntities("user"),
      banks: this.apiService.getEntities("bank")
    }).pipe(
      tap(({users, banks}) => {
        this.users = users;
        this.banks = banks;

        if (this.users && this.selectedEntity.userId)
          this.setForeignKey(this.selectedEntity.userId, "user", this.users);

        if (this.banks && this.selectedEntity.bankId)
          this.setForeignKey(this.selectedEntity.bankId, "bank", this.banks);
      })
    );
  }

  public override prepareEntity(): CreditCard {
    let entity = this.entityForm.value;
    entity.userId = entity.user.id;
    entity.bankId = entity.bank.id;

    return entity;
  }

  //#endregion

}
