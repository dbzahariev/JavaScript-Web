import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../moduls/register.modul';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel

  constructor() { }

  ngOnInit() {
  }

}
