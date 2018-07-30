import { Component, OnInit } from '@angular/core';
import { CreateModel } from '../models/create.model';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  model: CreateModel

  constructor(body: CreateModel) {
    this.model = new CreateModel('', '', -1, '', -1, '', '')
  }

  ngOnInit() {
  }

  create(){
    console.log(this.model)
  }
}
