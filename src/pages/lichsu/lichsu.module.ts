import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LichsuPage } from './lichsu';

@NgModule({
  declarations: [
    LichsuPage,
  ],
  imports: [
    IonicPageModule.forChild(LichsuPage),
  ],
  exports: [
    LichsuPage
  ]
})
export class LichsuPageModule {}
