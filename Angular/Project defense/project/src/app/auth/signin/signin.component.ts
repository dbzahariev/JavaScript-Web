import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  login(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const anonimus = form.value.anonimus;
    let isAnonimus = false
    if (anonimus === "true")
    {
      isAnonimus = true;
    }
    this.authService.signIn(email, password, isAnonimus);
  }
}
