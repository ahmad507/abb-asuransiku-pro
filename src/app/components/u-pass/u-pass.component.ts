import {Component, ContentChild, OnInit} from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-u-pass',
  templateUrl: './u-pass.component.html',
  styleUrls: ['./u-pass.component.scss'],
})
export class UPassComponent  implements OnInit {
  showPassword = false;
  @ContentChild(IonInput) input: any;
  constructor(
    // private input : IonInput
  ) { }

    toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

  ngOnInit() {}

}


