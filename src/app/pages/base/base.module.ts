import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasePageRoutingModule } from './base-routing.module';

import { BasePage } from './base.page';
import {BottombarComponent} from "../../components/navigation/bottombar/bottombar.component";
import {DashboardPageModule} from "../dashboard/dashboard.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasePageRoutingModule,
    DashboardPageModule
  ],
  declarations: [BasePage, BottombarComponent]
})
export class BasePageModule {}
