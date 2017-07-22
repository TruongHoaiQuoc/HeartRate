import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SucKhoePage  } from '../suc-khoe/suc-khoe';
import { SmileRateComponentModule } from '../../components/smile-rate/smile-rate.module';
 
@NgModule({
  declarations: [
    SucKhoePage
  ],
  imports: [
    SmileRateComponentModule,
    IonicPageModule.forChild(SucKhoePage)
  ],
  exports: [
    SucKhoePage
  ]
})
export class HomePageModule {}