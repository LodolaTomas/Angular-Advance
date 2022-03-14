import { Component } from '@angular/core';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {

  constructor( private settingSrv:SettingService) { }
  year: number = new Date().getFullYear();

}
