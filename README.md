# Olympic Medal Count Mini App

This is a mini React app that displays the top 10 countries based on their Olympic medal counts. Users can sort results by gold, silver, bronze, or total medals using URL parameters or by clicking table headers.

## Features

- Displays top 10 countries by medals
- Sort by `gold`, `silver`, `bronze`, or `total` medals
- Tie-breaking logic:
  - Total → Gold
  - Gold → Silver
  - Silver → Gold
  - Bronze → Gold
- Sorting can be changed:
  - Via `?sort=` URL query parameter
  - By clicking on table headers
- Uses `flags.png` sprite sheet to render country flags
- Medals data is loaded via simulated async API call (local JSON)
- Shows error message on load failure
- Written in TypeScript + React
- No data re-fetching when sorting changes

## URL Parameter

- `?sort=` – Accepts: `gold` (default), `silver`, `bronze`, `total`

Example:  
`http://localhost:3000/?sort=total`

## Setup & Run

```bash
npm install
npm start
```

## Build
```bash
npm run build
```