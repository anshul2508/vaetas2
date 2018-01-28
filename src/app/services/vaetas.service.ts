import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {State} from '../reducers/index';
import {Router} from '@angular/router';
import {User} from '../models/user';

const AUTH_TOKEN = 'auth_token';

@Injectable()
export class VaetasService {

  private BASE_URL = 'https://api.invidz.com/api';


  constructor(private httpClient: HttpClient, private store: Store<State>,
              private router: Router) {
  }

  public login(email: string, password: string) {
    return this.httpClient.request('get', this.BASE_URL + '/authenticate',
      {params: new HttpParams().set('email', email).set('password', password)});
  }

  public resetPassword(data: {email: string}) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.httpClient.post(this.BASE_URL + '/password/forgot', data,
      // {headers: headers}
    );
  }


  public importVideos() {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({'Authorisation': 'bearer ' + token});
    return this.httpClient.get(this.BASE_URL + '/videos' ,
      {headers: headers });
  }

}





  // private get (url: string, data?: any ) {
  //   const options = this.buildRequestOption();
  //   if (data) {
  //     options.params = ServicesUtil.objToSearchParams(data);
  //   }
  //   return this.httpClient.get(this.BASE_URL + url, options );
  // }
  //
  // private buildRequestOption(): RequestOptions {
  //   const options = new RequestOptions ({headers: new Headers()});
  //   const authToken = localStorage.getItem(AUTH_TOKEN);
  //   if (authToken) {
  //     options.headers.append('Authorisation', 'bearer ' + authToken);
  //   }
  //   return options;
  // }

