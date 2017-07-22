import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import { SmileRate } from '../components/smile-rate/smile-rate';
import {SucKhoePage} from '../pages/suc-khoe/suc-khoe';
import {TabsPage} from '../pages/tabs/tabs';
import {TrangchuPage} from '../pages/trangchu/trangchu';
import { ThongkePage} from '../pages/thongke/thongke';
import {CaidatPage} from'../pages/caidat/caidat';
import {DevicePage} from'../pages/device/device';
import {ThemPage} from '../pages/them/them';
import { SettingPage} from '../pages/setting/setting';
import {TodosPage} from '../pages/todos/todos';
import {TabsbsPage} from '../pages/tabsbs/tabsbs';
import {QuantamPage} from '../pages/quantam/quantam';
import {ThongbaoPage} from '../pages/thongbao/thongbao';
import {ListbnPage} from '../pages/listbn/listbn';
import {LichsuPage} from '../pages/lichsu/lichsu';


@NgModule({
  declarations: [
    MyApp,
   TrangchuPage,
    SmileRate,
    SucKhoePage,
    LoginPage,
    TabsPage,
    ThongkePage,
    CaidatPage,
    DevicePage,
    ThemPage,
    SettingPage,
    TodosPage,
    TabsbsPage,
    QuantamPage,
    ThongbaoPage,
    ListbnPage,
    LichsuPage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   TrangchuPage,
  
    LoginPage,
    TabsPage,
    ThongkePage,
    CaidatPage,
    DevicePage,
    ThemPage,
    SettingPage,
    TodosPage,
    TabsbsPage,
    QuantamPage,
    ThongbaoPage,
    ListbnPage,
    LichsuPage

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
