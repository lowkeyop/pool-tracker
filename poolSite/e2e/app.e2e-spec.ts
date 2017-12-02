import { PoolSitePage } from './app.po';

describe('pool-site App', () => {
  let page: PoolSitePage;

  beforeEach(() => {
    page = new PoolSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
