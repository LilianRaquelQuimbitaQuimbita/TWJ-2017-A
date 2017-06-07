import { AWebPage } from './app.po';

describe('a-web App', () => {
  let page: AWebPage;

  beforeEach(() => {
    page = new AWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
