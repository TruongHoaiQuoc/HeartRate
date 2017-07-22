import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsbsPage } from './tabsbs';

@NgModule({
  declarations: [
    TabsbsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsbsPage),
  ],
  exports: [
    TabsbsPage
  ]
})
export class TabsbsPageModule {}
