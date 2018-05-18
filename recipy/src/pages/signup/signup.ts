import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  tabsPage: any = TabsPage;

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthService
  ) {}

  signup(form: NgForm) {
    const loading = this.loadingController.create({
      content: 'Registering...'
    });
    loading.present();

    console.log('-- SignupPage.signup - form ', form);
    this.authService.signup(form.value.email, form.value.password)
      .then((signupResult) => {
        console.log('-- SignupPage.signup -then- - signupResult ', signupResult);
        loading.dismiss();
        this.load(this.tabsPage);
      })
      .catch((error) => {
        loading.dismiss();
        let toast = this.alertController.create({
          title: 'Registration failed!',
          message: error.message,
          buttons: ['Ok']
        });
        toast.present();
      });
  }

  private load(page: any) {
    this.navController.push(page);
  }
}
