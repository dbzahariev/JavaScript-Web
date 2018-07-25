import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClient } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
