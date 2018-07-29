import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable()
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private teaters: string = `discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
  private authentication: string = '&api_key=';
  private apiKey: string = '19493a1d160b6bf6c61e4d834191777c'
 

  constructor(private http: HttpClient) { }

  getPopular() : Observable<object> {
    return this.http.get(`${this.path}${this.popular}${this.authentication}${this.apiKey}`)
  }

  getNowDate(afterDay?:number) {
    var returnDate = "";
    var today = new Date();
    if (afterDay){today.setDate(today.getDate()-afterDay)}
    //split
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //because January is 0! 
    var yyyy = today.getFullYear();
    //Interpolation date
    returnDate += yyyy+'-';
    if (dd < 10) {
        returnDate += `0${dd}-`;
    } else {
        returnDate += `${dd}-`;
    }

    if (mm < 10) {
        returnDate += `0${mm}`;
    } else {
        returnDate += `${mm}`;
    }
    return returnDate;
  }

  getTeaters() {
    return this.http.get(`${this.path}${this.teaters}${this.authentication}${this.apiKey}`)
  }
}
