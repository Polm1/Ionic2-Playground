import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SamuraiPage } from '../dojo/samurai/samurai';

/**
 * Generated class for the DojoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dojo',
  templateUrl: 'dojo.html',
})
export class DojoPage {

  samuraiPage = SamuraiPage;

  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DojoPage');
  }


  loadSamurai(samuraiName: string) {
    this.navCtrl.push(this.samuraiPage, { name: samuraiName }).catch((error) => {
      console.log('-- loadSamurai - error', error);
    });
  }

}
