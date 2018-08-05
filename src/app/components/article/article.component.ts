// Angular
import { Component, OnInit } from '@angular/core';

// Models
import { ArticleModel } from './../../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: ArticleModel;

  constructor() { }

  ngOnInit() {
    this.article = new ArticleModel(
      'Angular 2',
      'http://angular.io',
      10
    );
  }

  onClickVoteUp(): any {
    this.article.voteUp();
  }

  onClickVoteDown(): any {
    this.article.voteDown();
  }
}
