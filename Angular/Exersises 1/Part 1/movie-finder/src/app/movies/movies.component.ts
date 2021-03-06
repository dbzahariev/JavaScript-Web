import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Rame App'
  popular: Object
  teaters: Object

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
      });

    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
        console.log(data)
      });

      this.moviesService
        .getTeaters()
        .subscribe(data => {
          this.teaters = data;
      });
  }
}
