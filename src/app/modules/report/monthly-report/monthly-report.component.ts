import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { CategoryRanking, MonthlyResume, TotalKey } from "../models/monthlyResume";
import { MeterItem } from "primeng/metergroup";
import { LoaderService } from "../../../services/utils/loader.service";
import { MessageService } from "primeng/api";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-monthly-report",
  standalone: false,
  templateUrl: "./monthly-report.component.html"
})
export class MonthlyReportComponent implements OnInit {

  //#region Fields

  public monthlyReport: MonthlyResume = new MonthlyResume();

  public totalKeys: TotalKey[] = this.monthlyReport.getTotalKeys();

  public currentDate: Date = new Date();

  public monthForm!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {

  }
  //#endregion

  //#region OnInit
  public async ngOnInit(): Promise<void> {
    this.initForm();
    await this.loadResume();
  }
  //#endregion

  //#region Members 'load' :: loadResume()

  public async loadResume(): Promise<void> {
    try {
      this.loaderService.show();

      this.monthlyReport = new MonthlyResume();

      let dateSelected: Date = new Date(this.monthForm.value.month);

      if (!dateSelected)
        dateSelected = this.currentDate;

      const month: number = dateSelected.getMonth() + 1;
      const year: number = dateSelected.getFullYear();

      this.apiService.getEntities("report/resume/" + month + "/" + year).subscribe({
        next: (result: MonthlyResume) => {
          this.monthlyReport = result;
          this.monthlyReport.categoryRankings.sort((a: CategoryRanking, b: CategoryRanking) => b.percentage - a.percentage);

          this.messageService.add({
            severity: "success",
            summary: "Sucesso",
            detail: "Relatório carregado!"
          });

          this.loaderService.hide();
          this.changeDetectorRef.detectChanges();
        },
        error: (err: any) => {
          console.log(err);

          this.messageService.add({
            severity: "error",
            summary: "Falha!",
            detail: "Não foi possível carregar o relatório!"
          });

          this.loaderService.hide();
          this.changeDetectorRef.detectChanges();
        }
      });

    } catch (error) {
      console.log(error);

      this.messageService.add({
        severity: "error",
        summary: "Sucesso",
        detail: "Não foi possível carregar o relatório!"
      });

      this.loaderService.hide();

      this.changeDetectorRef.detectChanges();
    }
  }

  private initForm(): void {
    this.monthForm = this.formBuilder.group({
      month: [this.currentDate]
    });
  }

  //#endregion

  //#region Members 'Get' :: getTopThreeCategory, getCategoryMeterItem()

  public getTopThreeCategory(categories: CategoryRanking[]): CategoryRanking[] {
    let topThree: CategoryRanking[] = [];

    for (let i = 0; i < 3; i++) {
      topThree = [...topThree, categories[i]];
    }

    return topThree;
  }

  public getCategoryMeterItem(categories: CategoryRanking[]): MeterItem[] {
    let meterItems: MeterItem[] = [];

    for (let i = 0; i < categories.length; i++) {
      const category: CategoryRanking = categories[i];

      const meterItem: MeterItem = {
        label: category.name,
        color: category.color,
        value: category.percentage
      }

      meterItems = [...meterItems, meterItem];
    }

    return meterItems;
  }

  public onSelectDate(event: any): void {
    console.log(event);
  }

  //#endregion

}
