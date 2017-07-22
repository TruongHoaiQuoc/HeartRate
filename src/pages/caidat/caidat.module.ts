import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaidatPage } from './caidat';

@NgModule({
  declarations: [
    CaidatPage,
  ],
  imports: [
    IonicPageModule.forChild(CaidatPage),
  ],
  exports: [
    CaidatPage
  ]
})
export class CaidatPageModule {}
