import { PlaygroundAngular2Page } from './app.po';

describe('playground-angular2 App', function() {
  let page: PlaygroundAngular2Page;

  beforeEach(() => {
    page = new PlaygroundAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
