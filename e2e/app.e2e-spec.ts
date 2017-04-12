import { TestIgoLibPage } from './app.po';

describe('test-igo-lib App', () => {
  let page: TestIgoLibPage;

  beforeEach(() => {
    page = new TestIgoLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
