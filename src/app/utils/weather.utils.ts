export type WeatherType =
  | 'sunny'
  | 'cloudy'
  | 'rainy'
  | 'snowy'
  | 'stormy';

export interface WeatherCondition {
  type: WeatherType;
  description: string;
  icon: string;
}

export function getWeatherCondition(code: number): WeatherCondition {
  if (code === 0) {
    return {
      type: 'sunny',
      description: 'Clear sky',
      icon: '☀️',
    };
  }

  if ([1, 2, 3].includes(code)) {
    return {
      type: 'cloudy',
      description: 'Cloudy',
      icon: '☁️',
    };
  }

  if ([45, 48].includes(code)) {
    return {
      type: 'cloudy',
      description: 'Foggy',
      icon: '🌫️',
    };
  }

  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return {
      type: 'rainy',
      description: 'Rainy',
      icon: '🌧️',
    };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return {
      type: 'snowy',
      description: 'Snowy',
      icon: '❄️',
    };
  }

  if ([95, 96, 99].includes(code)) {
    return {
      type: 'stormy',
      description: 'Thunderstorm',
      icon: '⛈️',
    };
  }

  return {
    type: 'cloudy',
    description: 'Unknown',
    icon: '🌤️',
  };
}