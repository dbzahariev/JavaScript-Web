import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const apiKey = '19493a1d160b6bf6c61e4d834191777c'

@Injectable()
export class MoviesService {
  

  constructor(private HttpClient: HttpClient) {
    
  }
}
