import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HelloComponent } from './hello/hello.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { BeerCreateComponent } from './beer/beer-create/beer-create.component';
import { BeerDetailsComponent } from './beer/beer-details/beer-details.component';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },]
  },
  { path: '', component: HelloComponent},
  { path: 'beers/list', canActivate: [AuthGuard], component: BeerListComponent},
  { path: 'beers/create', canActivate: [AuthGuard], component: BeerCreateComponent},
  { path: 'beers/details/:id', canActivate: [AuthGuard], component: BeerDetailsComponent }

  // {},
  // { path: '**', redirectTo: '/auth/signin' }
  // { path: '**', redirectTo: '/auth/signin' canActivate: [AuthGuard]  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }