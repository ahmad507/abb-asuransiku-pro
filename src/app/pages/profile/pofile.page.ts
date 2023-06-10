import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pofile',
  templateUrl: './pofile.page.html',
  styleUrls: ['./pofile.page.scss'],
})
export class PofilePage implements OnInit {

  constructor(
    private authService : AuthenticationService,
    private router : Router,
  ) { }

  async logout()
  {
    await this.authService.doLogout();
    await this.router.navigateByUrl('/', {replaceUrl:true})
  }

  ngOnInit() {
  }

}
