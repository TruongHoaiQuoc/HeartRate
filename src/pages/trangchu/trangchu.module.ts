import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrangchuPage } from './trangchu';

@NgModule({
  declarations: [
    TrangchuPage,
  ],
  imports: [
    IonicPageModule.forChild(TrangchuPage),
  ],
  exports: [
    TrangchuPage
  ]
})
export class TrangchuPageModule {}
