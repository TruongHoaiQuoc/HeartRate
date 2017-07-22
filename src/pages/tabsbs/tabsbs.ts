import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuantamPage} from '../quantam/quantam';
import {ThongbaoPage} from'../thongbao/thongbao';
import {ListbnPage} from '../listbn/listbn';

/**
 * Generated class for the TabsbsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabsbs',
  templateUrl: 'tabsbs.html',
})
export class TabsbsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
tab1Root: any = ListbnPage;
  tab2Root: any = ThongbaoPage;
  tab3Root: any = QuantamPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsbsPage');
  }
  onthongbao(){
    this.navCtrl.push(ThongbaoPage);
  }
  onthanhvien(){
    this.navCtrl.push(ListbnPage);
  }
  onquantam(){
    this.navCtrl.push(QuantamPage);
  }

}
