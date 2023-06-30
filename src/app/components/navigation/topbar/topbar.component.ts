import {Component, ContentChild, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent  implements OnInit {
  @Input() push_notification:any = 18;
  constructor() { }


  ngOnInit() {
  }

}
