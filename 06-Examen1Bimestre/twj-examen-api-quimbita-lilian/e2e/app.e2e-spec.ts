import { TwjExamenApiQuimbitaLilianPage } from './app.po';

describe('twj-examen-api-quimbita-lilian App', () => {
  let page: TwjExamenApiQuimbitaLilianPage;

  beforeEach(() => {
    page = new TwjExamenApiQuimbitaLilianPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
