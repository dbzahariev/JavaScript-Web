import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HelloComponent } from './hello/hello.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },]
  },
  { path: '', component: HelloComponent},
  { path: 'recipes/list', component: RecipeListComponent},
  { path: 'recipes/create', component: RecipeCreateComponent, canActivate: [AuthGuard] }

  // {},
  // { path: '**', redirectTo: '/auth/signin' }
  // { path: '**', redirectTo: '/auth/signin' canActivate: [AuthGuard]  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }