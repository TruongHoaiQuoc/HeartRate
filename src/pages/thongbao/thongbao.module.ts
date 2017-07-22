import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThongbaoPage } from './thongbao';

@NgModule({
  declarations: [
    ThongbaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ThongbaoPage),
  ],
  exports: [
    ThongbaoPage
  ]
})
export class ThongbaoPageModule {}
