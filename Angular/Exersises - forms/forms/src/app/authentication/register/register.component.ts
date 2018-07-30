import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../moduls/register.modul';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel

  constructor() {
    this.model = new RegisterModel('', '', '', '', '', 18)
  }

  ngOnInit() {
  }

  register(){
    delete this.model['confirmPassword']
    console.log(this.model)
  }
}
