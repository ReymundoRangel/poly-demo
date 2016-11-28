import { PolyDemoPage } from './app.po';

describe('poly-demo App', function() {
  let page: PolyDemoPage;

  beforeEach(() => {
    page = new PolyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
