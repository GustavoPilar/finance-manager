import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: "root"
})
export class LoaderService {

  //#region Constructor
  constructor(
    private spinner: NgxSpinnerService
  ) {

  }
  //#endregion

  //#region Members :: hide(), show()

  /**
   * @description Esconde a tela de carregamento
   * @returns {void} Vazio
   */
  public hide(): void {
    this.spinner.hide();
  }

  /**
   * @description Mostra a tela de carregamento
   * @returns {void} Vazio
   */
  public show(): void{
    this.spinner.show();
  }

  //#endregion

}
