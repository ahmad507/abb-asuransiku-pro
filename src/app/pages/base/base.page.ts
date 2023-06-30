import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {
  public tab_name: any ;
  public activeTab = false;

  public  dashboard = "assets/core/beranda.svg";
  public  policy = "assets/core/polis.svg";
  public  cart = "assets/core/cart.svg";
  public  claim = "assets/core/claim.svg";
  public  profile = "assets/core/account.svg";

  public  dashboard_a = "assets/core/beranda_a.svg";
  public  policy_a = "assets/core/polis_a.svg";
  public  cart_a = "assets/core/cart_a.svg";
  public  claim_a = "assets/core/claim_a.svg";
  public  profile_a = "assets/core/account_a.svg";

  public cart_notification = 12;


  constructor() { }

  ngOnInit() {
  }

  selectedTabs($event:any) {
    this.activeTab = !this.activeTab;
    this.tab_name = $event.tab;
    console.log(this.tab_name)
  }

}
