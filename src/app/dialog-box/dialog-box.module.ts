import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogBoxPageRoutingModule } from './dialog-box-routing.module';

import { DialogBoxPage } from './dialog-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogBoxPageRoutingModule
  ],
  declarations: [DialogBoxPage]
})
export class DialogBoxPageModule {}
