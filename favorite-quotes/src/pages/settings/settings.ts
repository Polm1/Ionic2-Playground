import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';

import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingService: SettingsService) {

  }

  toggle(toggle: Toggle) {
    console.log('-- SettingsPage.toggle - toggle',toggle);
    this.settingService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingService.isAltBackground();
  }
}
