import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThemPage } from './them';

@NgModule({
  declarations: [
    ThemPage,
  ],
  imports: [
    IonicPageModule.forChild(ThemPage),
  ],
  exports: [
    ThemPage
  ]
})
export class ThemPageModule {}
