import { TwjExamenQuimbitaLilianPage } from './app.po';

describe('twj-examen-quimbita-lilian App', () => {
  let page: TwjExamenQuimbitaLilianPage;

  beforeEach(() => {
    page = new TwjExamenQuimbitaLilianPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
