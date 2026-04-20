import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { AuthService } from "../../services/auth/authentication.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-settings-modal",
  standalone: false,
  templateUrl: "./settings-modal.component.html"
})
export class SettingsModalComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Fields

  public userForm!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private dialogRef: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    // let data = this.config;
  }
  //#endregion

  //#region Interfaces 'On' :: OnInit, OnAfterViewInit, OnDestroy

  public ngOnInit(): void {
    this.initUserForm();
  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void {

  }

  //#endregion

  //#region Members

  private initUserForm(): void {
    const user = this.authService.GetUser();

    this.userForm = this.formBuilder.group({
      userName: [user.userName],
      userEmail: [user.userEmail]
    });

    this.userForm.disable();
  }

  public logout(): void {
    this.authService.logout();

    this.dialogRef.close();
  }

  //#endregion

}
