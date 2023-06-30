import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {TopbarComponent} from "../../components/navigation/topbar/topbar.component";
import {NotifBagdeComponent} from "../../components/notif-bagde/notif-bagde.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  exports: [
    NotifBagdeComponent
  ],
  declarations: [DashboardPage, TopbarComponent, NotifBagdeComponent]
})
export class DashboardPageModule {}
