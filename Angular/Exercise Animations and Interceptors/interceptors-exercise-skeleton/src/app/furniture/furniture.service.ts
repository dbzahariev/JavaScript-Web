import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

const createdUrl = 'http://localhost:5000/furniture/create'
const alldUrl = 'http://localhost:5000/furniture/all'
const mydUrl = 'http://localhost:5000/furniture/my'

@Injectable()
export class FurnitureService {

    constructor(private http:HttpClient) {}

    creteFurniture(){
        return this.http.get(createdUrl)
    }
}