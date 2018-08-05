// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init data at ngOnInit', () => {
    const article = component.article;
    expect(article).not.toBeNull();
    expect(article.title).toEqual('Angular 2');
    expect(article.link).toEqual('http://angular.io');
    expect(article.votes).toEqual(10);
  });

  it('should increase the vote when called onClickVoteUp() ', () => {
    spyOn(component.article, 'voteUp');
    component.onClickVoteUp();
    expect(component.article.voteUp).toHaveBeenCalled();
  });

  it('should decrease the vote when called onClickVoteDown', () => {
    spyOn(component.article, 'voteDown');
    component.onClickVoteDown();
    expect(component.article.voteDown).toHaveBeenCalled();
  });

});
