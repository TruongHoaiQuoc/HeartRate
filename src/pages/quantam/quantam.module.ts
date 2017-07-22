import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuantamPage } from './quantam';

@NgModule({
  declarations: [
    QuantamPage,
  ],
  imports: [
    IonicPageModule.forChild(QuantamPage),
  ],
  exports: [
    QuantamPage
  ]
})
export class QuantamPageModule {}
