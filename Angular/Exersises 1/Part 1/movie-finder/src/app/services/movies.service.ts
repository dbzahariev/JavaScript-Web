import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable()
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  teaters: string = `discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
  private authentication: string = '&api_key=';
  private apiKey: string = '19493a1d160b6bf6c61e4d834191777c'

  constructor(private http: HttpClient) { }

  getPopular() : Observable<object> {
    return this.http.get(`${this.path}${this.popular}${this.authentication}${this.apiKey}`)
  }  

  getTeaters() : Observable<object> {
    return this.http.get(`${this.path}${this.teaters}${this.authentication}${this.apiKey}`)
  }
}
