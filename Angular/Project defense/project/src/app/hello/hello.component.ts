import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.user == undefined){
      this.authService.signIn("", "", true)
    }
  }
}
