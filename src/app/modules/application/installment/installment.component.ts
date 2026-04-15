import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../../services/communication/api.service";
import { LoaderService } from "../../../services/utils/loader.service";

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

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
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

  public updateInstallmet(installment: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show();
        console.log("Entrou");

        installment.isPaid = true;
        installment.paymentDate = new Date();

        this.apiService.updateEntity("installment", installment, installment.id).subscribe({
          next: (result: any) => {
            this.cdr.detectChanges();
            this.loaderService.hide();
            resolve();
          },
          error: (err) => {
            console.log(err);
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

  public getBooleanValue(isPaid: boolean): string {
    return isPaid ? "Pago" : "Aberta";
  }

  public getTagSeverity(isPaid: boolean): "success" | "danger" {
    return isPaid ? "success" : "danger";
  }

  //#endregion

}
