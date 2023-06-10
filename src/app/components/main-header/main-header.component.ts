import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent  implements OnInit {
  @Input() header_name:string = '';
  constructor() { }

  ngOnInit() {
    console.log(this.header_name)
  }
}
