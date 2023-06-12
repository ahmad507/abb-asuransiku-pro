import {StatusBar, Style} from "@capacitor/status-bar";


export class StatusbarSetup {

//  Status Bar Setup Full Page
  public static LightStatusBar ()
  {
    StatusBar.setStyle({style : Style.Light});
    StatusBar.setOverlaysWebView({ overlay: true });
  }

  public static DarkStatusBar()
  {
    StatusBar.setStyle({style : Style.Dark});
    StatusBar.setOverlaysWebView({ overlay: true });
  }

  public static DefaultStatusBar()
  {
    StatusBar.setStyle({style : Style.Default});
    StatusBar.setOverlaysWebView({ overlay: true });
  }

}
