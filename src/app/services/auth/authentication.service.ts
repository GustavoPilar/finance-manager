import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderService } from "../utils/loader.service";
import { API_URL } from "../../core/global/config";
import { LocalStorageService } from "../utils/local-storage.service";
import { jwtDecode } from "jwt-decode";
import { MessageService } from "primeng/api";
import { LoginRequest } from "../../models/auth/login-request";
import { RegisterRequest } from "../../models/auth/register-request";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  //#region Fields

  /** Nome para chave de segurança */
  private keySecurity: string = "key_security"

  /** Id do toast de sucesso */
  public loginSuccessId: string = "login_success";

  /** Id do toast de erro */
  public loginErrorId: string = "login_error";

  /** Id do toast de sucesso */
  public registerSuccessId: string = "register_success";

  /** Id do toast de erro */
  public registerErrorId: string = "register_error";

  //#endregion

  //#region Constructor
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    private loaderService: LoaderService
  ) {

  }
  //#endregion

  //#region Members :: Login(), isAuthenticated()

  /**
   * @description Fluxo para login de usuário
   * @param login Formulário
   * @returns {Promise<boolean>}
   */
  public async loginFlow(login: LoginRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show();

        const url: string = `${API_URL}/auth/login`;

        login.email = login.email.toLowerCase();

        this.httpClient.post(url, login, { headers: { "Content-Type": "application/json" } }).subscribe({
          next: (result: any) => {
            this.localStorageService.SetItem(this.keySecurity, result.token);
            this.loaderService.hide();

            this.showMessage("success", "Bem vindo(a)!", "Aguarde um instante, você será redirecionado.", this.loginSuccessId);

            resolve();
          },
          error: (err: any) => {
            console.log(err);
            this.localStorageService.RemoveItem(this.keySecurity);
            this.loaderService.hide();
            this.showMessage("error", "Erro!", "Erro ao fazer o login.", this.loginErrorId);
            reject();
          }
        });

      } catch (error) {
        console.log(error);
        this.loaderService.hide();
        reject();
      }
    });
  }

  /**
   * @description Fluxo para registro de usuário
   * @param register Formulário
   * @returns {Promise<boolean>}
   */
  public async registerFlow(register: RegisterRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.show();

        const url: string = `${API_URL}/auth/register`;

        this.httpClient.post(url, register, { headers: { "Content-Type": "application/json" } }).subscribe({
          next: (result: any) => {
            this.loaderService.hide();
            this.showMessage("success", "Bem vindo(a)!", "Aguarde um instante, você será redirecionado.", this.registerSuccessId);
            resolve();
          },
          error: (err: any) => {
            console.log(err);
            this.localStorageService.RemoveItem(this.keySecurity);
            this.loaderService.hide();
            this.showMessage("error", "Erro!", "Erro ao fazer o cadastro.", this.registerErrorId);
            reject();
          }
        });

      } catch (error) {
        console.log(error);
        this.loaderService.hide();
        reject();
      }
    })
  }

  public async logout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.localStorageService.RemoveItem(this.keySecurity);
        resolve();
      } catch (error) {
        console.log(error);
        this.localStorageService.RemoveItem(this.keySecurity);
        reject();
      }
    })
  }

  /**
   * @description Retorna o valor do token guardado
   * @returns {any} Token
   */
  public GetToken(): any {
    return this.localStorageService.GetItem(this.keySecurity);
  }

  /**
   * @description Verifica se o usuário está autenticado
   * @returns {boolean} Valor booleano
   */
  public IsAuthenticated(): boolean {
    const token = this.GetToken();

    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);

      const expired = Date.now() >= decoded.exp * 1000;

      return !expired;
    } catch {
      return false;
    }
  }

  /**
   * @description Mostra o Toast
   * @param severity Severidade
   * @param summary Titulo
   * @param detail Texto
   * @param id Id da mensagem
   * @returns {void} Vazio
   */
  private showMessage(severity: "error" | "success", summary: string, detail: string, id: string): void {
    this.messageService.add({
      id,
      severity,
      summary,
      detail,
      closable: true,
      life: 1500
    });
  }

  //#endregion

}
