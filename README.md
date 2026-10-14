
# Weather App

A responsive weather application built with Angular and TypeScript.

The app allows users to search for a city and view its current weather conditions using the Open-Meteo API.

## Features

- Search for weather by city name
- Display current temperature, humidity, and wind speed
- Weather descriptions and icons
- Dynamic styling based on weather conditions
- 10-minute in-memory caching to reduce API requests
- Loading and error states
- Responsive design for desktop and mobile

## Tech Stack

- Angular
- TypeScript
- SCSS
- RxJS
- Open-Meteo API

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
```

Navigate to the project directory:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open http://localhost:4200 in your browser.

## Production Build

```bash
npm run build
```

## API

This application uses Open-Meteo:

- Geocoding API for city search
- Forecast API for current weather data

No API key is required for non-commercial use.

## Caching

Weather responses are cached in memory for 10 minutes using a JavaScript Map.

City names are normalized by trimming whitespace and converting to lowercase.

Repeated searches for the same normalized city name return cached data without additional API requests until the cache expires.

The cache is reset when the page is reloaded.
