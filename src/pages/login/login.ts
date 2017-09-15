import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { GlobalService } from '../../providers/global-service/global-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  email: string;
  password: string;
  global;
  sessionid;
  constructor(public storage: Storage, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public globalCtrl: GlobalService) { 
   
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
        this.globalCtrl.setmyGlobalVar(allowed.sessionid);       
        this.nav.setRoot(HomePage);
        console.log(allowed); 
        this.storage.set('sessionId', allowed.sessionid);
        this.storage.get('sessionId').then((val)=>{
          console.log("l'id session est ", val);
          this.sessionid = val;
        })
        //this.global = this.globalCtrl.getmyGlobalVar()
        //console.log(this.globalCtrl.myGlobalVar);
      } else if(allowed.status.err_code == 1000) {
        this.showError("Echec lors de l'authentification");
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