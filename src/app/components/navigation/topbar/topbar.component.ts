import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent  implements OnInit {



  constructor() { }

ionViewWillEnter()
{
  addIcons({
    'user_button' : "assets/core/user_button.svg",
    'polis_button' : "assets/core/polis_button.svg"
  })
}

  ngOnInit() {
  }

}
