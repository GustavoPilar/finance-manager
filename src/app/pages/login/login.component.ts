import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { pageSettings } from "../../core/page-settings";
import { LoaderService } from "../../services/utils/loader.service";
import { ApiService } from "../../services/communication/api.service";
import { AuthService } from "../../services/auth/authentication.service";
import { MessageService, PrimeIcons } from "primeng/api";
import { LocalStorageService } from "../../services/utils/local-storage.service";
import { LoginRequest } from "../../models/auth/login-request";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  //#region Fields

  public loginForm!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    pageSettings.canShowMenuBar = false;
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initLoginForm();
  }
  //#endregion

  //#region Members :: initLoginForm()

  /**
   * @description Inicia o formulário de login
   * @returns {void} Vazio
   */
  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * @description Verifica se o formulário é valido
   * @returns {boolean} Valor booleano
   */
  public validForm(): boolean {
    if (!this.loginForm)
      return false;

    return this.loginForm.valid;
  }

  /**
   * @description Faz o login
   * @returns {void} Vazio
   */
  public login(): void {
    let value: LoginRequest = this.loginForm.value;

    this.authService.loginFlow(value);
  }

  /**
   * @description Navega para o formulário de registro
   * @returns {void} Vazio
   */
  public register(): void {
    this.router.navigate(["/register"]);
  }

  /**
   * @description Quanto o Toast de sucesso fechar, navega para a página Home
   * @returns {void}
   */
  public onCloseToast(): void {
    console.log("Entrou aqui");
    this.router.navigate(["/home"]);
  }

  //#endregion

}
