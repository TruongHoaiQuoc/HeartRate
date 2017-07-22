import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SucKhoePage} from'../suc-khoe/suc-khoe';
import { TrangchuPage} from '../trangchu/trangchu';
import{ ThongkePage} from '../thongke/thongke';

import { SettingPage} from '../setting/setting';


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any=TrangchuPage;
tab2: any= SucKhoePage;
tab3: any=ThongkePage;
tab4:any=SettingPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
