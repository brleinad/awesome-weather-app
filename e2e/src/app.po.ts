import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('app-title')).getText() as Promise<string>;
  }


  addCity(cityName: string): Promise<unknown> {
    element(by.id('city-input')).sendKeys(cityName);
    return element(by.id('city-button')).click() as Promise<unknown>
  }

  getCityMin(): Promise<string> {
    return element(by.id('city-min')).getText() as Promise<string>;
  }

  getCityMax(): Promise<string> {
    return element(by.id('city-max')).getText() as Promise<string>;
  }
}
