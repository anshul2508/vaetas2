import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {State} from '../reducers/index';
import {Router} from '@angular/router';

const AUTH_TOKEN = 'auth_token';

@Injectable()
export class VaetasService {

  private BASE_URL = 'https://app.vaetas.com/api';

  constructor( private httpClient: HttpClient, private store: Store<State>,
               private router: Router) {}

  public login(email: string, password: string) {
    return this.httpClient.request( 'get', this.BASE_URL + '/authenticate',
      {params: new HttpParams().set('email', email).set('password', password)} );
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
}

