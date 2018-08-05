// Models
import { ArticleModel } from './article.model';

describe('Article', () => {
  let model: ArticleModel;
  beforeEach(() => {
    model = new ArticleModel('Angular 2',
      'http://angular.io',
      10);
  });

  it('should create an instance', () => {
    expect(model).toBeTruthy();
  });

  it('should increase the vote when called voteUp() ', () => {
    model.voteUp();
    const votes = model.votes;
    expect(votes).toEqual(11);
  });

  it('should decrease the vote when called voteDown', () => {
    model.voteDown();
    const votes = model.votes;
    expect(votes).toEqual(9);
  });

});
