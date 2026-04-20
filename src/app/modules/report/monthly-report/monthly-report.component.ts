import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ApiService } from "../../../services/communication/api.service";
import { CategoryRanking, MonthlyResume, TotalKey } from "../models/monthlyResume";
import { MeterItem } from "primeng/metergroup";
import { LoaderService } from "../../../services/utils/loader.service";
import { MessageService } from "primeng/api";

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

  //#endregion

  //#region Constructor
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private messageService: MessageService
  ) {

  }
  //#endregion

  //#region OnInit
  public async ngOnInit(): Promise<void> {
    await this.loadResume();
  }
  //#endregion

  //#region Members 'load' :: loadResume()

  public async loadResume(): Promise<void> {
    try {
      this.loaderService.show();

      this.monthlyReport = new MonthlyResume();
      const month = this.currentDate.getMonth() + 1;

      console.log(month);

      this.apiService.getEntities("report/resume/" + month).subscribe({
        next: (result: MonthlyResume) => {
          this.monthlyReport = result;

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
        value: category.total
      }

      meterItems = [...meterItems, meterItem];
    }

    return meterItems;
  }

  //#endregion

}
