import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  
  constructor(private settingSrv:SettingService) { }

  ngOnInit(): void {
    this.settingSrv.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingSrv.changeTheme(theme);
  }

  
}
