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

  public confirmModal: boolean = false;

  public selectedInstallment: any = null;

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

        const creditTransactionId: number = this.form.value.creditTransactionId;

        this.apiService.getEntities(`installment/creditTransaction/${creditTransactionId}`).subscribe({
          next: (result: any) => {
            const creditTransactionId: number = this.form.value.creditTransactionId;
            this.installments = result.filter((x: any) => x.creditTransactionId == creditTransactionId);

            this.cdr.detectChanges();
            this.loaderService.hide();
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

  public updateInstallmet(installment: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show();
        this.confirmModal = false;

        installment.isPaid = !installment.isPaid;
        installment.paymentDate = new Date();

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

  public onCloseModal(): void {
    this.confirmModal = false;
    this.selectedInstallment = null;

    this.messageService.add({
      severity: "info",
      summary: "Cancelamento",
      detail: "Atualização foi cancelada."
    });
  }

  public openModal(installment: any): void {
    this.confirmModal = true;
    this.selectedInstallment = installment;
  }

  public getBooleanValue(isPaid: boolean): string {
    return isPaid ? "Concluída" : "Aberta";
  }

  public getTagSeverity(isPaid: boolean): "success" | "danger" {
    return isPaid ? "success" : "danger";
  }

  public validForm(): boolean {
    if (!this.form)
      return false;

    return this.form.valid;
  }

  //#endregion

}
