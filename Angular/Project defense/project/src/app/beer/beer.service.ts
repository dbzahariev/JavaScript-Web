import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BeerList } from './models/beer-list.model';
import { BeerCreate } from './models/beer-create.model';

const baseUrl = 'https://workshop-b6e0e.firebaseio.com/beers/'

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(
    private http : HttpClient
  ) {  }

  getAllBeers() {
    return this.http.get(`${baseUrl}.json`)
      .pipe(map((res : Response) => {
        const ids = Object.keys(res);
        const beers : BeerList[] = [];
        for (const i of ids) {
          beers.push(new BeerList(i, res[i].name, 
            res[i].imagePath, res[i].description));
        }

        return beers;
      }));
  }

  createBeer(body : BeerCreate) {
    return this.http.post(`${baseUrl}.json`, body);
  }

  getById(beerId : string) {
    return this.http.get<BeerList>(`${baseUrl}${beerId}/.json`);
  }

  editBeer(body) {
    return this.http.patch(`${baseUrl}.json`, body);
  }

  deleteBeer(beerId : string) {
    return this.http.delete(`${baseUrl}${beerId}/.json`);
  }
}