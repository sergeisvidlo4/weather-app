import { Component, computed, input } from '@angular/core';
import { WeatherData } from '../../models/weather.model';
import { getWeatherCondition } from '../../utils/weather.utils';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
  weather = input.required<WeatherData>();

  condition = computed(() =>
    getWeatherCondition(this.weather().weatherCode)
  );
}
