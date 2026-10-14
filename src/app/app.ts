import { Component, inject, signal } from '@angular/core';

import { WeatherSearch } from './components/weather-search/weather-search';
import { WeatherCard } from './components/weather-card/weather-card';
import { WeatherService } from './services/weather';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherSearch, WeatherCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private weatherService = inject(WeatherService);

  weather = signal<WeatherData | null>(null);
  loading = signal(false);
  error = signal('');

  onSearch(city: string): void {
    this.loading.set(true);
    this.error.set('');
    this.weather.set(null);

    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weather.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load weather. Please try again.');
        this.loading.set(false);
      },
    });
  }
}