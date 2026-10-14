
# Weather App

A responsive weather application built with Angular and TypeScript.

The application allows users to search for a city and view its current weather conditions using the Open-Meteo API.

## Live Demo

https://weather-app-delta-eight-74.vercel.app/

## Features

- Search for current weather by city name
- Display temperature, humidity, and wind speed
- Weather descriptions and icons
- Dynamic styling based on weather conditions
- 10-minute in-memory caching
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

- Node.js (compatible with the project's Angular version)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/sergeisvidlo4/weather-app.git
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

The application uses Open-Meteo:

- Geocoding API to find cities and their coordinates
- Forecast API to retrieve current weather conditions

No API key is required for non-commercial use.

## Caching

Weather responses are cached in memory for 10 minutes using a JavaScript Map.

City names are normalized by trimming whitespace and converting to lowercase.

Repeated searches using the same normalized city name return cached data without additional API requests until the cache expires.

The cache is cleared when the page is reloaded.

## Limitations

- The application uses the first matching city returned by the Geocoding API.
- Different spellings of the same city may create separate cache entries.
- The cache is stored in memory and does not persist across page reloads.

## Author

Serhii Svidlo

GitHub: https://github.com/sergeisvidlo4
