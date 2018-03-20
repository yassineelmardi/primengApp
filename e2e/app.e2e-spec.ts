import { PrimengAppPage } from './app.po';

describe('primeng-app App', () => {
  let page: PrimengAppPage;

  beforeEach(() => {
    page = new PrimengAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
