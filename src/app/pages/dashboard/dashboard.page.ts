import { Component, OnInit } from '@angular/core';
import {StatusbarSetup} from "../../utils/core/statusbarSetup";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ionViewWillEnter()
  // {
  //   StatusbarSetup.LightStatusBar();
  // }

}
