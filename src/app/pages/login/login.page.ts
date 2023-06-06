import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private loadingController : LoadingController,
    private alertController : AlertController,
    private autService : AuthenticationService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  async login()
  {
    const params = {
      username: 'it@abb-insurance.com',
      password: 'it123'
    };
    const loading = await this.loadingController.create();
    await loading.present();
    this.autService.doLogin(params).subscribe(async (res)=>{
      await loading.dismiss();
      this.router.navigateByUrl('/dashboard',{replaceUrl:true});
    }, async (res) =>{
      await loading.dismiss();
      console.log(res)
      const alert = await this.alertController.create({
        header : 'Gagal Login',
        message : res.error.r_data.message,
        buttons: ["OK"]
      });
      await alert.present();
    })
  }
}
