import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

export const INTRO_KEY = 'intro-seen';
import { Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  constructor(private router : Router) {
  }

  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await Preferences.get({key: INTRO_KEY});
    console.log(hasSeenIntro);
    if (hasSeenIntro && (hasSeenIntro.value === 'true'))
    {
      return true;
    } else {
      await this.router.navigateByUrl('/intro', {replaceUrl: true});
      return true;
    }
  }
}
