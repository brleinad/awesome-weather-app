import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('app-title')).getText() as Promise<string>;
  }


  addCity(cityName: string): Promise<unknown> {
    element(by.id('city-input')).clear();
    element(by.id('city-input')).sendKeys(cityName);
    return element(by.id('city-button')).click() as Promise<unknown>
  }

  getCityMin(cityName: string): Promise<string> {
    return element(by.id(`${cityName}-city-min`)).getText() as Promise<string>;
  }

  getCityMax(cityName: string): Promise<string> {
    return element(by.id(`${cityName}-city-max`)).getText() as Promise<string>;
  }

  getCityNotFound(): Promise<string> {
    return element(by.id('city-not-found')).getText() as Promise<string>;
  }
}
