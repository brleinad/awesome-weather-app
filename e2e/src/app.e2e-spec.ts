import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have the right title', () => {
    expect(page.getTitleText()).toEqual('Daniel\'s Awesome Weather App');
  });

  it('should be able to add a city', () => {
    page.addCity('Quebec');
    expect(page.getCityMin()).toBeTruthy();
    expect(page.getCityMax()).toBeTruthy();
  })

  // TODO
  // it('should not be able to add a fake city', () => {
  //   page.addCity('asdfgsda');
  //   expect(page.getCityMin()).toBeFalsy();
  //   expect(page.getCityMax()).toBeFalsy();
  // })


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
