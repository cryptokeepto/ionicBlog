import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact2Page } from './contact2';

@NgModule({
  declarations: [
    Contact2Page,
  ],
  imports: [
    IonicPageModule.forChild(Contact2Page),
  ],
  exports: [
    Contact2Page
  ]
})
export class Contact2PageModule {}
