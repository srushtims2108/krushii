# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---------------------------------------------------------------------------------------------_____________________________________________________________________________________________# Krushii

Short description: Krushii is a marketplace for farmers and produce (frontend + backend).

## Project structure
c:\Users\Chait\Desktop\krushii
├─ back-end/
│  ├─ package.json
│  ├─ server.js (or app.js)
│  ├─ routes/
│  ├─ controllers/
│  ├─ models/
│  └─ .env
├─ front-end/
│  ├─ package.json
│  ├─ public/
│  └─ src/
│     ├─ index.jsx
│     ├─ App.jsx
│     ├─ pages/
│     │  └─ FarmerPage.jsx
│     ├─ components/
│     └─ styles/ (e.g., tailwind.config.js, css files)
└─ README.md

> Note: The above is a representative tree — adjust filenames and folders to match your repo.

## Quick start

Front-end:
1. cd front-end
2. npm install
3. npm start
- The frontend expects the API at `http://localhost:5000/api/*` by default (example: `/api/farmers`).

Back-end:
1. cd back-end
2. npm install
3. Configure `.env` (PORT, DB connection string, etc.)
4. npm start (or `node server.js` / `nodemon server.js`)

## Important files
- front-end/src/pages/FarmerPage.jsx — page that lists farmers and links to profiles.
- back-end/routes/* — API endpoints (e.g., GET /api/farmers).
- back-end/models/* — database models for Farmer/Product.

## Troubleshooting
- If frontend fails to fetch data, ensure backend is running and CORS is configured.
- Check console for errors and verify the API URL in your frontend fetch calls.

## Contributing
- Follow existing folder patterns. Open PRs with clear change descriptions.

