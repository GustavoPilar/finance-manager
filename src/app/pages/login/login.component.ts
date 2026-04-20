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
import { RegisterRequest } from "../../models/auth/register-request";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  //#region Fields

  /** Formulário para Login */
  public loginForm!: FormGroup;

  /** Formulário para Cadastro */
  public registerForm!: FormGroup

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {
    pageSettings.canShowMenuBar = false;
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initForms();
  }
  //#endregion

  //#region Members 'Form' :: initForms(), isValidLoginForm(), isValidRegisterForm()

  /**
   * @description Inicia o formulário de login
   * @returns {void} Vazio
   */
  private initForms(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * @description É valido o formulário de login de usuário?
   * @returns {boolean}
   */
  public isValidLoginForm(): boolean {
    if (!this.loginForm)
      return false;

    return this.loginForm.valid;
  }

  /**
   * @description É valido o formulário de cadastro de usuário?
   * @returns {boolean}
   */
  public isValidRegisterForm(): boolean {
    if (!this.registerForm)
      return false;

    return this.registerForm.valid;
  }

  //#endregion

  //#region Members 'Login' :: login(), onCloseToastSuccess()

  /**
   * @description Faz o login
   * @returns {void}
   */
  public login(): void {
    let login: LoginRequest = this.loginForm.value;

    this.authService.loginFlow(login);
  }

  /**
   * @description Quanto o Toast de sucesso fechar, navega para a página Home
   * @returns {void}
   */
  public onCloseToast(): void {
    this.router.navigate(["/home"]);
  }

  //#endregion

  //#region Members 'Register' :: register()

  public register(): void {
    let register: RegisterRequest = this.registerForm.value;

    this.authService.registerFlow(register).then((result: boolean) => {
      if (result) {
        this.loginForm.patchValue(register);

        console.log(this.loginForm);

        this.login();
      }
    });
  }

  //#endregion


  //#endregion

}
