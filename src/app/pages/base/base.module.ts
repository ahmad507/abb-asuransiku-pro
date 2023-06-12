import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasePageRoutingModule } from './base-routing.module';

import { BasePage } from './base.page';
import {BottombarComponent} from "../../components/navigation/bottombar/bottombar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasePageRoutingModule
  ],
  declarations: [BasePage, BottombarComponent]
})
export class BasePageModule {}
