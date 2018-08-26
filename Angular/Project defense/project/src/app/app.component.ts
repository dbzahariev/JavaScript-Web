import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  
  ngOnInit(): void {
    firebase.initializeApp({
      // tslint:disable-next-line:quotemark
      apiKey: "AIzaSyD63Z48U8EOO5o9cBaGGMjL25CN5qHFS8M",
      // tslint:disable-next-line:quotemark
      authDomain: "workshop-b6e0e.firebaseapp.com"
    })    
  }
}
