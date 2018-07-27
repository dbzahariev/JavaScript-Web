import { MoviesService } from './../Service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title:string = "rame App"
  popular : Object

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data
        console.log(this.popular)
      })
  }

}
