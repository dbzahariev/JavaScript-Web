import { Component, OnInit } from '@angular/core';
import { BeerList } from '../models/beer-list.model';
import { BeerService } from '../beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  beer : BeerList;
  id : string;

  constructor(
    private beerService : BeerService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.beerService.getById(this.id)
      .subscribe(data => {
        this.beer = data;
      })
  }

  delete() {
    this.beerService.deleteBeer(this.id)
      .subscribe((data) => {
        this.toastr.success('Beer delted!', 'Success!');
        this.router.navigate(['/beers/list']);
      })
  }

}
