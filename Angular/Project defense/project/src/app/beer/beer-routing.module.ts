import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerStartComponent } from './beer-start/beer-start.component';
import { BeerCreateComponent } from './beer-create/beer-create.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes : Route[] = [
  { path: '', pathMatch: 'full', component: BeerStartComponent, canActivate: [ AuthGuard ] },
  { path: 'start', component: BeerStartComponent, canActivate: [ AuthGuard ]},
  { path: 'create', component: BeerCreateComponent },
  { path: 'details/:id', component: BeerDetailsComponent },
  { path: 'edit/:id', component: BeerEditComponent },
  { path: 'list', component: BeerListComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class BeerRoutingModule {}