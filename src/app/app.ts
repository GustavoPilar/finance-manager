import { Component, signal } from '@angular/core';
import { pageSettings } from './core/page-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  //#region Fields
  pageSettings = pageSettings;
  //#endregion

}
