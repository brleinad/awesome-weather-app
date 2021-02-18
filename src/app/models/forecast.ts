export interface Forecast {
  list: DayForecast[];
}

export interface DayForecast {
  main: MainDayForecast;
}

export interface MainDayForecast {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
