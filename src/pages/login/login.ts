import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, ToastController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

declare var navigator : any;
declare var Connection : any;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  email: string;
  mail; data;
  password: string;
  loginData = {email:'', password:'', lang:'en', NEWMOBILE: '1'};
  public sessionid;
  constructor(
    public storage: Storage, 
    private nav: NavController, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private Alert : AlertController,
    private toastCtrl : ToastController,
  ) { }
  
  public login() {
    this.showLoading();
    //this.loginData ='?login='+this.email+'&password='+this.password+'&lang=en&NEWMOBILE=1';
    this.auth.login(this.loginData).then((result)=> {
      this.loading.dismiss();
      this.data = result;
      if(this.data.status.err_code == 0){
        localStorage.setItem('sessionid', this.data.sessionid);
        localStorage.setItem('url', this.data.url);        
        localStorage.setItem('mail', this.data.resources.mailAddress);
        localStorage.setItem('test', this.data);
        this.nav.setRoot( HomePage );
      } else if(this.data.status.err_code == 1000) {
        this.showError(this.data.status.err_txt);
      } else {
        this.showError("Access Denied")
      }
    }, (err) =>{
      this.loading.dismiss();
      this.presentToast(err);
    })
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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