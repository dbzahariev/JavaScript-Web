import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  private apiKey = '19493a1d160b6bf6c61e4d834191777c'
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private authentication: string = '&api_key=';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<object>{
    return this.http.get(this.path + this.popular + this.authentication + this.apiKey)
  }
}
