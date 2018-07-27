import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const apiKey = '19493a1d160b6bf6c61e4d834191777c'

@Injectable()
export class MoviesService {
  private path = 'https://api.themoviedb.org/3/';
  private popular = 'discover/movie?sort_by=popularity.desc';
  private authentication = '&api_key=';

  url = `${this.path}${this.popular}${this.authentication}${apiKey}`

  constructor(private http: HttpClient) { }

  getPopular() : Observable<object> {
    return this.http.get(this.url)
  }
}
