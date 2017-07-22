import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CaidatPage} from '../caidat/caidat';
import {TodosPage} from '../todos/todos';
import {LoginPage} from '../login/login';
import {TabsbsPage} from '../tabsbs/tabsbs';




/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 onbluetooth() {
        
        
        this.navCtrl.push(CaidatPage);
    }
   onbs(){
     this.navCtrl.push(TabsbsPage);
   }
     onthem() {
        
        
        this.navCtrl.push(TodosPage);
    }
    onlogout() {
        
        
        this.navCtrl.push(LoginPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
