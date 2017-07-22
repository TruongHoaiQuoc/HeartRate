import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading:LoadingController) {
  }
   onLogin() {
        let loader = this.loading.create({
            content: "chờ đợi...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push(TabsPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
