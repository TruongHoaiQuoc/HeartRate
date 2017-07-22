import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListbnPage } from './listbn';

@NgModule({
  declarations: [
    ListbnPage,
  ],
  imports: [
    IonicPageModule.forChild(ListbnPage),
  ],
  exports: [
    ListbnPage
  ]
})
export class ListbnPageModule {}
