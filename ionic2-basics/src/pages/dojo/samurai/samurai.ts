import { Component } from "@angular/core";
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-samurai',
  templateUrl: 'samurai.html'
})
export class SamuraiPage {

  name: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
      this.name = this.navParams.get('name');
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log(this.navParams.get('name'));
    if(this.navParams.get('name') === 'Kibagami Genjuro') {
      const rnd = Math.random();
      return rnd > 0.5;
    }
  }

  returnToDojo() {
    this.navCtrl.pop();
  }

  flee() {
    this.navCtrl.popToRoot();
  }
}
