import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './Modules/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './Modules/app.routing.module';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {AlertService} from './services/alert.service';
import {IntroService} from './services/intro.service';
import {YoutubeService} from './services/youtube.service';
import {VaetasService} from './services/vaetas.service';
import {reducers} from './reducers/index';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { VideosComponent } from './Components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AccountsComponent,
    NotFoundComponent,
    ForgetPasswordComponent,
    VideosComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers),


  ],
  providers: [AlertService, IntroService, YoutubeService, VaetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
