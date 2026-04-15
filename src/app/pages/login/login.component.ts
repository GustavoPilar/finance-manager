import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { pageSettings } from "../../core/page-settings";
import { LoaderService } from "../../services/utils/loader.service";
import { ApiService } from "../../services/communication/api.service";
import { AuthService } from "../../services/auth/authentication.service";
import { MessageService } from "primeng/api";
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

  loginForm!: FormGroup;

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

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public validForm(): boolean {
    if (!this.loginForm || !this.loginForm.valid)
      return false;

    return true;
  }

  public async login(): Promise<void> {
    let value: LoginRequest = this.loginForm.value;

    await this.authService.loginFlow(value);
  }

  public onCloseToast(): void {
    this.router.navigate(["/home"]);
  }

  //#endregion

}
