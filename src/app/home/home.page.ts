import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import CleverPush from 'cleverpush-capacitor-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  public pluginAvailable = false;

  constructor() {
    this.pluginAvailable = Capacitor.isPluginAvailable('CleverPush');
    CleverPush.init({
      channelId: 'YOUR_CHANNEL_ID',
      autoRegister: true,
    });
  }
}
