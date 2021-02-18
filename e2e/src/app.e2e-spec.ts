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
    page.addCity('quebec');
    expect(page.getCityMin('quebec')).toBeTruthy();
    expect(page.getCityMax('quebec')).toBeTruthy();
  })

  it('should be able to add many cities', async () => {
    await page.addCity('quebec');
    await page.addCity('portland');
    expect(page.getCityMin('quebec')).toBeTruthy();
    expect(page.getCityMax('quebec')).toBeTruthy();
    expect(page.getCityMin('portland')).toBeTruthy();
    expect(page.getCityMax('portland')).toBeTruthy();
  })

  it('should not be able to add a fake city', () => {
    page.addCity('asdfgsda');
    expect(page.getCityNotFound()).toBe('No forecast found for asdfgsda');
  })

});
