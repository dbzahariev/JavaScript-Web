import { Component, OnInit } from '@angular/core';
import { BeerCreate } from '../models/beer-create.model';
import { BeerService } from '../beer.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-beer-create',
  templateUrl: './beer-create.component.html',
  styleUrls: ['./beer-create.component.css']
})
export class BeerCreateComponent implements OnInit {
  bindingModel : BeerCreate;

  constructor(
    private beerService : BeerService,
    private toastr : ToastrService,
    private router : Router
  ) {
    this.bindingModel = new BeerCreate("", "", "");
  }

  ngOnInit() {
  }

  create() {
    this.beerService.createBeer(
      this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Beer created!', 'Success');
        this.router.navigate(['/beers/list']);
      })
  }

}
