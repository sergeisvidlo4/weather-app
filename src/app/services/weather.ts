import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

import {
  GeocodingResponse,
  WeatherResponse,
  WeatherData,
} from '../models/weather.model';

interface CacheEntry {
  data: WeatherData;
  timestamp: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);

  private cache = new Map<string, CacheEntry>();

  private readonly CACHE_TTL = 10 * 60 * 1000;

  private geocodingUrl =
    'https://geocoding-api.open-meteo.com/v1/search';

  private weatherUrl =
    'https://api.open-meteo.com/v1/forecast';

  getWeather(city: string): Observable<WeatherData> {
    const cacheKey = city.trim().toLowerCase();
    const cached = this.cache.get(cacheKey);

    if (cached) {
      const age = Date.now() - cached.timestamp;

      if (age < this.CACHE_TTL) {
        console.log('Weather from cache:', cacheKey);
        return of(cached.data);
      }

      this.cache.delete(cacheKey);
    }

    return this.http
      .get<GeocodingResponse>(this.geocodingUrl, {
        params: {
          name: city.trim(),
          count: 1,
          language: 'en',
        },
      })
      .pipe(
        switchMap((response) => {
          const location = response.results?.[0];

          if (!location) {
            return throwError(() => new Error('City not found'));
          }

          return this.http
            .get<WeatherResponse>(this.weatherUrl, {
              params: {
                latitude: location.latitude,
                longitude: location.longitude,
                current:
                  'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
              },
            })
            .pipe(
              map((weather) => ({
                city: location.name,
                country: location.country,
                temperature: weather.current.temperature_2m,
                humidity: weather.current.relative_humidity_2m,
                windSpeed: weather.current.wind_speed_10m,
                weatherCode: weather.current.weather_code,
              }))
            );
        }),
        tap((weather) => {
          this.cache.set(cacheKey, {
            data: weather,
            timestamp: Date.now(),
          });

          console.log('Weather saved to cache:', cacheKey);
        })
      );
  }
}