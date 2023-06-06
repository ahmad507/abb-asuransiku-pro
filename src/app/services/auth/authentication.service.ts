import { Injectable } from '@angular/core';
import { Preferences } from "@capacitor/preferences";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, switchMap, tap} from "rxjs/operators";
import {BehaviorSubject, from, Observable} from "rxjs";



export const USER_DETAIL = "user-detail";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  headers = new HttpHeaders({'asri-api-key':'o480ks8g0oo84sw8kg0ogo4c8occwkc88gg0c84w'});
  user_detail = "";
  constructor( private http : HttpClient ) {
    this.loadUserData();
  }

  async loadUserData(){
    const user_detail = await Preferences.get({key: USER_DETAIL});
    if (user_detail && user_detail.value)
    {
      console.log('set user detail :', JSON.parse(user_detail.value));
      this.user_detail = JSON.parse(user_detail.value);
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  public doLogin(params:any)
  {
    let formData: FormData = new FormData();
    formData.append("uName",params.username);
    formData.append("uPass",params.password);
    return this.http.post("http://localhost/API_STAGE_1/v02/login/login", formData, {headers: this.headers}).pipe(
      map((data: any) => data.r_data),
      switchMap(user_detail => {
        console.log(user_detail);
        return from(Preferences.set({key: USER_DETAIL, value: JSON.stringify(user_detail)})
        )
      }),
      tap(_ => {
        this.isAuthenticated.next(true)
      })
    );
  }


}
