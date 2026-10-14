import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.scss',
})
export class WeatherSearch {
  city = signal('');

  search = output<string>();

  onCityChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.city.set(input.value);
  }

  onSearch(): void {
    const cityName = this.city().trim();

    if (!cityName) return;

    this.search.emit(cityName);
  }
}
