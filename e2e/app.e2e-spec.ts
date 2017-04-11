import { NgChartPage } from './app.po';

describe('ng-chart App', () => {
  let page: NgChartPage;

  beforeEach(() => {
    page = new NgChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
