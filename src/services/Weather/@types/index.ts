type WeatherInfo = {
  id: string;
  main: string;
  description: string;
  icon: string;
}

type CurrentWeather = {
  temp: number;
  weather: WeatherInfo[]
}

type TemperatureInfo = {
  min: number;
  max: number;
}

type DailyWeather = {
  temp: TemperatureInfo;
}

export type WeatherAPIResponse = {
  current: CurrentWeather;
  daily: DailyWeather[];
}
