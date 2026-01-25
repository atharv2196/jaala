# Jaala — Premium Clothing (India)

A premium, animated e-commerce site for **Jaala**, built with React and Vite. Black and gold theme, custom cursor, preloader, and responsive layout.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

> **Note:** If `npm install` fails with a cache error, run it in your system terminal (outside Cursor) or run `npm config set cache ./.npm-cache` and retry.

## Build

```bash
npm run build
npm run preview
```

## Features

- **Preloader**: Black screen → Jaala logo (≈3.8s) → main page
- **Custom cursor**: Gold dot + ring, hover state on links/buttons
- **Sections**: Hero, Our Story, Categories, Contact
- **Fonts**: Cinzel, Cormorant Garamond, Montserrat (Google Fonts)
- **Animations**: Framer Motion for scroll and hover
- **Theme**: Black and gold (`#0a0a0a`, `#c9a227`)

## Project structure

```
src/
├── components/
│   ├── CustomCursor.jsx
│   ├── Preloader.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── OurStory.jsx
│   ├── Categories.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
public/
└── assets/
    └── logo.png    # Jaala logo
```

## Logo

Place your Jaala logo at `public/assets/logo.png` or update the path in `Preloader.jsx`.
