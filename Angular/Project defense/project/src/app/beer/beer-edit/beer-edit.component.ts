import { Component, OnInit } from '@angular/core';
import { BeerCreate } from '../models/beer-create.model';
import { BeerService } from '../beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.css']
})
export class BeerEditComponent implements OnInit {
  id : string;
  bindingModel : BeerCreate;

  constructor(
    private beerService : BeerService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.beerService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id] : this.bindingModel
    }
    
    this.beerService.editBeer(body)
      .subscribe((data) => {
        this.toastr.success('Beer edited!', 'Success!');
        this.router.navigate(['/beers/list']);
      })
  }

}
