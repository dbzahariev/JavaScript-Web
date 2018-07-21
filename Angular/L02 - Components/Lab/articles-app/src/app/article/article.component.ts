import { Article } from '../models/Article.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article
  @Input() articleDsc: string
  descToShow: string
  articleDescLen: number
  showReadMoreBtn: boolean = true
  showHideBtn: boolean = false
  imageIsShown: boolean = false
  imageButtonTitle: string = 'Show Image'
  
  constructor() {
    this.articleDescLen = 0
    this.descToShow = ""
  }

  ngOnInit() {
    debugger
  }

  readMore(){
    this.articleDescLen += this.symbols
    if (this.articleDescLen>=this.articleDsc.length){
      this.showHideBtn = true
      this.showReadMoreBtn = false
    } else {
      this.descToShow = this.articleDsc.substring(0, this.articleDescLen)
    }
  }

  toggleImage(){
    this.imageIsShown = !this.imageIsShown
    this.imageButtonTitle = 
    this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image"
  }

  hideDesc(){
    this.descToShow = ""
    this.articleDescLen = 0;
    this.showHideBtn = false
    this.showReadMoreBtn = true
  }
}
