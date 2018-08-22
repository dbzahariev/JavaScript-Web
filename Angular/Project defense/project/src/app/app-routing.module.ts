import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HelloComponent } from './hello/hello.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { BeerCreateComponent } from './beer/beer-create/beer-create.component';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },]
  },
  { path: '', component: HelloComponent},
  { path: 'beers/list', component: BeerListComponent},
  { path: 'beers/create', canActivate: [AuthGuard], component: BeerCreateComponent}

  // {},
  // { path: '**', redirectTo: '/auth/signin' }
  // { path: '**', redirectTo: '/auth/signin' canActivate: [AuthGuard]  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }