import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/authentication.service";
import { Router } from "@angular/router";
import { pageSettings } from "../../core/page-settings";
import { RegisterRequest } from "../../models/auth/register-request";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-register",
  standalone: false,
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

  //#region Fields

  public registerForm!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    pageSettings.canShowMenuBar = false;
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initRegisterForm();
  }
  //#endregion

  //#region Members :: initRegisterForm()

  public initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required, Validators.minLength(6)]
    });
  }

  /**
   * @description Verifica se o formulário é valido
   * @returns {boolean} Valor booleano
   */
  public validForm(): boolean {
    if (!this.registerForm)
      return false;

    return this.registerForm.valid;
  }

  /**
   * @description Navega para o formulário de registro
   * @returns {void} Vazio
   */
  public register(): void {
    const register: RegisterRequest = this.registerForm.value;

    this.authService.registerFlow(register);
  }

  /**
   * @description Navega para a página de login
   * @returns {void}
   */
  public login(): void {
    this.router.navigate(["/login"]);
  }

  /**
   * @description Quanto o Toast de sucesso fechar, navega para a página Home
   * @returns {void}
   */
  public onCloseToast(): void {
    this.login();
  }

  //#endregion

}
