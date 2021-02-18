# AwesomeWeatherApp

This is a simple app that uses the open weather api to display temperature information for a given city.

A live version of this project is available at [awesome-weather-app.danielrb.dev](https://awesome-weather-app.danielrb.dev)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Getting up and running

Don't forget to do `npm install`.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project structure

`./src/app/` ->
`data-tracker/`: contains the Data Tracker class and its tests
`components/`: contains the components used in the project 
`services/`: contains the services
`models/`: contains the models

## Tests

Due to lack of time not all the code is tested but the main functionality has tests.
End to end tests are found under `./e2e`.
The class `DataTracker` has tests under `./src/app/data-tracker/data-tracker.spec.ts`.

###  Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
If you're getting an error like:
```
E/launcher - session not created: This version of ChromeDriver only supports Chrome version 88
```
Then try doing this:
```bash
 ./node_modules/protractor/bin/webdriver-manager update --versions.chrome=$(google-chrome --version | cut -d ' ' -f 3)
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
