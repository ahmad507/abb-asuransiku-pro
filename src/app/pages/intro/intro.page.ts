import {Component, OnInit} from '@angular/core';
import { Preferences } from "@capacitor/preferences";
import { Router } from "@angular/router";
import {INTRO_KEY} from "../../guards/intro/intro.guard";
import {StatusBar, Style} from "@capacitor/status-bar";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  private scrollDepthTriggered = false;
  header_name:string = 'ASURANSIKU.id PRO';
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    StatusBar.setStyle({style: Style.Light});
    StatusBar.setOverlaysWebView({ overlay: true });
  }


  async start()
  {
    await Preferences.set({key: INTRO_KEY, value: 'true'});
    await this.router.navigateByUrl('/login', {replaceUrl: true});
  }

  public async onScrollPage($event: any) {
    const scrollElement = await $event.target.getScrollElement();
    console.log({scrollElement});
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    console.log({scrollHeight});
    const currentScrollDepth = scrollElement.scrollTop;
    console.log({currentScrollDepth});
    const targetPercent = 80;

    let triggerDepth = ((scrollHeight / 100) * targetPercent);
    console.log({triggerDepth});

    if(currentScrollDepth > triggerDepth) {
      console.log(`Scrolled to ${targetPercent}%`);
      // this ensures that the event only triggers once
      this.scrollDepthTriggered = true;
      // do your analytics tracking here
    }
  }
}
