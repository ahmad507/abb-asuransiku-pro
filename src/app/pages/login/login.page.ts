import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials! : FormGroup;

  constructor(

    private loadingController : LoadingController,
    private alertController : AlertController,
    private authService : AuthenticationService,
    private router : Router,
    private fb: FormBuilder
  ) { }

  ngOnInit()
  {
    this.credentials = this.fb.group({
      email: ['it@abb-insurance.com', [Validators.required, Validators.email]],
      password: ['it123', [Validators.required, Validators.minLength(4)]],
    });
  }

  get email()
  {
    return this.credentials.get('email');
  }

  get password()
  {
    return this.credentials.get('password');
  }

  async login()
  {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.doLogin(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        await this.router.navigateByUrl('/base', {replaceUrl: true});
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: res.error.r_message,
          message: res.error.r_data.message,
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}
