import {Component, OnInit} from '@angular/core';
import { Preferences } from "@capacitor/preferences";
import { Router } from "@angular/router";
import {INTRO_KEY} from "../../guards/intro/intro.guard";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  async start()
  {
    await Preferences.set({key: INTRO_KEY, value: 'true'});
    await this.router.navigateByUrl('/login', {replaceUrl: true});
  }

}
