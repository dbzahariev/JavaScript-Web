import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { BeerList } from './../beer/./models/beer-list.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  user: string;
  isAnonimus = false;

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  signUp(email: string, password: string) {
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.toastr.success('Signed Up', 'Success');
        this.router.navigate(['/auth/signin']);
      )
      .catch((err) => {
        this.toastr.error(err.message, 'Warning');
      });
  }

  signIn(email: string, password: string, anonimus: boolean) {
    if (anonimus === true) {
      firebase.auth().signInAnonymously().then((data) => {
        this.isAnonimus = anonimus;
        firebase.auth()
          .currentUser
          .getIdToken()
          .then((token: string) => {
            this.token = token;
          });
      })
        .catch((err) => {
          this.toastr.error(err.message, 'Warning');
        })
    }

    this.isAnonimus = anonimus
    if (anonimus === false) {

      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          this.isAnonimus = anonimus
          this.user = data.user.email
          firebase.auth()
            .currentUser
            .getIdToken()
            .then((token: string) => {
              this.token = token;
            })

            this.router.navigate(['/']);
            this.toastr.success('Logged In', 'Success')
        })
        .catch((err) => {
          this.toastr.error(err.message, 'Warning')
        });
      }

    this.isAnonimus = anonimus;
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.router.navigate(['/']);
        this.token = null;
      });
      this.user = '';
      this.toastr.success('Logged Out', 'Success');
  }

  getToken() {
    firebase.auth()
    .currentUser
    .getIdToken()
    .then((token: string) => {
      this.token = token;
    });

    return this.token;
  }

  isAuthenticated(): boolean {
    if (this.isAnonimus) {
      return false;
    }

    return this.token != null;
  }

  isAuthor(beer: BeerList): boolean {
    return beer.author === this.user;
 }
}
