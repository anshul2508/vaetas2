

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../Components/login/login.component';
import {SignupComponent} from '../Components/signup/signup.component';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from '../not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'plans', component: SignupComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
