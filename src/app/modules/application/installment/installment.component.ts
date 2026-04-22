import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../../services/communication/api.service";
import { LoaderService } from "../../../services/utils/loader.service";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-installment",
  standalone: false,
  templateUrl: "./installment.component.html"
})
export class InstallmentComponent implements OnInit {

  //#region Fields

  public form!: FormGroup;

  public creditTransactions: any[] = [];

  public installments: any[] = [];

  public installmentsFiltered: any = [];

  public filters: any[] = [];

  public sorts: any[] = [];

  public selectedFilter!: any;

  public selectedSort!: any;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.filters = [
      { id: 0, description: "Parcela concluída", target: "isPaid", value: true },
      { id: 1, description: "Parcela em aberto", target: "isPaid", value: false }
    ];

    this.sorts = [
      { id: 0, description: "Data do pagamento crescente", target: "paymentDate", value: "ASC" },
      { id: 1, description: "Data do pagamento decrescente", target: "paymentDate", value: "DESC" },
      { id: 2, description: "Status Aberto -> Concluído", target: "isPaid", value: "ASC" },
      { id: 3, description: "Status Concluído -> Aberto", target: "isPaid", value: "DESC" },
    ];
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initForm();
    this.loadCreditTransaction();
  }
  //#endregion

  //#region Members

  public initForm(): void {
    this.form = this.formBuilder.group({
      creditTransactionId: [null, Validators.required]
    });
  }

  public loadCreditTransaction(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show();
        this.apiService.getEntities("creditTransaction").subscribe({
          next: (result: any) => {
            this.creditTransactions = result;
            this.cdr.detectChanges();
            this.loaderService.hide();
            resolve();
          },
          error: (err) => {
            console.log(err);
            this.loaderService.hide();
            reject();
          }
        })
      } catch (error) {
        console.log(error);
        this.loaderService.hide();
        reject(error);
      }
    })
  }

  public loadInstallments(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show();

        this.installments = [];
        this.installmentsFiltered = [];

        this.cdr.detectChanges();

        const creditTransactionId: number = this.form.value.creditTransactionId;

        this.apiService.getEntities(`installment/creditTransaction/${creditTransactionId}`).subscribe({
          next: (result: any) => {
            const creditTransactionId: number = this.form.value.creditTransactionId;
            this.installments = result.filter((x: any) => x.creditTransactionId == creditTransactionId);

            this.filter();
            this.sort();

            this.loaderService.hide();
            this.cdr.detectChanges();
            resolve();
          },
          error: (err) => {
            console.log(err);
            this.cdr.detectChanges();
            this.loaderService.hide();
            reject();
          }
        })
      } catch (error) {
        console.log(error);
        this.cdr.detectChanges();
        this.loaderService.hide();
        reject(error);
      }
    })
  }

  public updateInstallment(installment: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show(); this

        installment.isPaid = !installment.isPaid;

        if (!installment.isPaid) {
          installment.paymentDate = null;
        }
        else {
          installment.paymentDate = new Date();
        }

        this.apiService.updateEntity("installment", installment, installment.id).subscribe({
          next: (result: any) => {

            this.messageService.add({
              severity: "success",
              summary: "Parcela atualizada!",
              detail: "Atualização realizada com sucesso."
            });

            this.cdr.detectChanges();
            this.loaderService.hide();
            resolve();
          },
          error: (err) => {
            console.log(err);

            this.messageService.add({
              severity: "error",
              summary: "Erro!",
              detail: "Erro ao atualizar a parcela."
            });

            this.loaderService.hide();
            installment.isPaid = false;
            installment.paymentDate = false;
            this.cdr.detectChanges();
            reject();
          }
        });
      } catch (error) {
        console.log(error);
        this.loaderService.hide();
        reject(error);
      }
    })
  }

  public confirmUpdate(installment: any): void {
    this.confirmationService.confirm({
      header: "Confirmar atualização?",
      message: "Deseja prosseguir com a atualização da parcela: " + installment.description,
      closable: true,
      rejectButtonStyleClass: "bg-red-500 border-red-500 text-white",
      accept: () => {
        this.updateInstallment(installment);
      },
      reject: () => {
        this.messageService.add({
          severity: "info",
          summary: "Cancelada",
          detail: "A atualização da parcela foi cancelada"
        })
      }
    })
  }

  public getBooleanValue(isPaid: boolean): string {
    return isPaid ? "Concluída" : "Aberta";
  }

  public getTagSeverity(isPaid: boolean): "success" | "danger" {
    return isPaid ? "success" : "danger";
  }

  public getDateString(date: Date): string {
    if (date == null)
      return "--/--/--";

    return new Date(date).toLocaleDateString("pt-BR");
  }

  public validForm(): boolean {
    if (!this.form)
      return false;

    return this.form.valid;
  }

  public onChangeFilter(evnt: any): void {
    this.selectedFilter = evnt;

    this.filter();
  }

  public filter(): void {

    if (this.selectedFilter) {

      const field = this.selectedFilter.target;
      const value = this.selectedFilter.value;

      this.installmentsFiltered = this.installments.filter(x => x[field] == value);
    }
    else {
      this.installmentsFiltered = this.installments;
    }

  }

  public onChangeSort(evnt: any): void {
    this.selectedSort = evnt;

    this.sort();
  }

  public sort(): void {

    if (this.selectedSort) {

      const field = this.selectedSort.target;
      const value = this.selectedSort.value;

      if (value == "ASC") {
        this.installmentsFiltered.sort((a: any, b: any) => {
          let valueA: any = a[field];
          let valueB: any = b[field];

          if ((field as string).includes("Date")) {

            // PARA DATA DEVE INVERTER, JÁ QUE O VALOR NULO FICA ACIMA DE TUDO
            valueA = new Date(b[field]);
            valueB = new Date(a[field]);
          }

          return valueA - valueB;
        });
      }
      else {
        this.installmentsFiltered.sort((a: any, b: any) => {
          let valueA: any = a[field];
          let valueB: any = b[field];

          if ((field as string).includes("Date")) {

            // PARA DATA DEVE INVERTER, JÁ QUE O VALOR NULO FICA ACIMA DE TUDO
            valueA = new Date(b[field]);
            valueB = new Date(a[field]);
          }

          return valueB - valueA;
        });
      }

    }
    else {
      this.installmentsFiltered = this.installments;
    }

  }

  //#endregion

}
