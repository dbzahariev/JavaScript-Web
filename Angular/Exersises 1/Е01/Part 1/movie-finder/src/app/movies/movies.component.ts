// import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: object

  constructor( private ms: movise) {

  }

  ngOnInit() { console.log('hi') }

}
