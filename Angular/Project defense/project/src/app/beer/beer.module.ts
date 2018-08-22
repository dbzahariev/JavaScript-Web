import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BeerStartComponent } from './beer-start/beer-start.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerCreateComponent } from './beer-create/beer-create.component';
import { BeerRoutingModule } from './beer-routing.module';

@NgModule({
  declarations: [
    BeerStartComponent,
    BeerDetailsComponent,
    BeerEditComponent,
    BeerListComponent,
    BeerCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BeerRoutingModule
  ]
})
export class BeerModule { }