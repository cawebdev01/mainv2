import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  email: string;
  password: string;
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  public login() {
    this.showLoading();
    /*if(this.registerCredentials.email == "ca" && this.registerCredentials.password == "pass"){
      this.nav.setRoot(HomePage);
    }
    else{
      this.showError("Access Denied");
    }*/
    this.auth.login(this.email, this.password).subscribe(allowed => {
      if (allowed.status.err_code == 0) {        
        this.nav.setRoot('HomePage');
        console.log(allowed);
      } else if(allowed.status.err_code == 1000) {
        this.showError(allowed.status.err_text);
      }
      else{
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}