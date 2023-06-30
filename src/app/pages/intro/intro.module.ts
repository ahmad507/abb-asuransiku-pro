import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MainHeaderComponent} from "../../components/main-header/main-header.component";


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule,
  ],
  declarations: [IntroPage, MainHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroPageModule {}
