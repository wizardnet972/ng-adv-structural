import { NgAdvStructuralPage } from './app.po';

describe('ng-adv-structural App', () => {
  let page: NgAdvStructuralPage;

  beforeEach(() => {
    page = new NgAdvStructuralPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
