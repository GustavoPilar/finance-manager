import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base.component";
import { User } from "../../../../models/entities";
import { CrudManagerService } from "../../base/services/crud-manager.service";
import { ApiService } from "../../../../services/communication/api.service";
import { DisplayColumn } from "../../../../models/base/list/display-column";
import { ColumnTypeEnum } from "../../../../models/base/list/column-type-enum";
import { FormBuilder, Validators } from "@angular/forms";
import { TypeDescription } from "../../../../models/base/list/type-description";
import { MessageService, PrimeIcons } from "primeng/api";
import { LoaderService } from "../../../../services/utils/loader.service";

@Component({
  selector: "app-user",
  standalone: false,
  templateUrl: "./user.component.html",
  providers: [CrudManagerService]
})
export class UserComponent extends CrudBaseComponent<User> implements OnInit {

  //#region Fields

  public override icon = PrimeIcons.USERS;

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
    return "user";
  }

  public override getDescription(entity: User): string {
    return entity.name;
  }

  public override getTypeDescription(): TypeDescription {
    return { single: "Usuário", plural: "Usuários", isFemale: false };
  }

  public override getDisplayColumn(): DisplayColumn[] {
    return [
      {
        field: "name",
        description: "Nome",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "email",
        description: "Email",
        columnType: ColumnTypeEnum.Text
      },
      {
        field: "isActive",
        description: "ativo?",
        columnType: ColumnTypeEnum.Boolean
      },
    ];
  }

  public override initForm(): void {
    this.entityForm = this.formBuilder.group({
      name: [this.selectedEntity?.name ?? null, Validators.required],
      email: [this.selectedEntity?.email ?? null, Validators.required],
      passwordHash: [this.selectedEntity?.passwordHash ?? null, Validators.required],
      isActive: [this.selectedEntity?.isActive ?? false, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required]
    });
  }

  //#endregion

}
