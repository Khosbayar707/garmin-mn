# Garmin storefront clone

Simple split: `frontend/` holds the React + Vite site; `backend/` holds Express API and production static serving.

## Run

```sh
cd frontend
npm install
npm run dev
```

Vite serves the app at http://localhost:5173. Start the Express production server on port 3000 with `npm run backend` after building (`npm run build`).
