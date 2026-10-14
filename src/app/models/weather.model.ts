export interface City {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface GeocodingResponse {
  results?: City[];
}

export interface WeatherResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
}