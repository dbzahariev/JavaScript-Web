import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerList } from '../models/beer-list.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers : Observable<BeerList[]>

  constructor(
    private beerService : BeerService
  ) { }

  ngOnInit() {
     this.beers = this.beerService
     .getAllBeers();
  }

}
