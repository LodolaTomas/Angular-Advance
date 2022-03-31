import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunction():undefined;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit{

  constructor( private settingSrv:SettingService) { }
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    customInitFunction();
  }
}
