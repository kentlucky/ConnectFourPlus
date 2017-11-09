import { Connect4PlusPage } from './app.po';

describe('connect4-plus App', function() {
  let page: Connect4PlusPage;

  beforeEach(() => {
    page = new Connect4PlusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
