

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../Components/login/login.component';
import {SignupComponent} from '../Components/signup/signup.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from '../not-found/not-found.component';
import {ForgetPasswordComponent} from '../Components/forget-password/forget-password.component';
import {VideosComponent} from '../Components/videos/videos.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'plans', component: SignupComponent},
  {path: 'password/forget', component: ForgetPasswordComponent},
  {path: 'videos', component: VideosComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
