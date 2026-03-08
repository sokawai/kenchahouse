# Kencha House

A boutique play cafe for babies and toddlers in Toronto, ON.

## Tech Stack

- [Next.js](https://nextjs.org/) (Pages Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Brevo](https://www.brevo.com/) (email forms)

## Project Structure

```
kenchahouse/
├── components/        # Shared React components
│   ├── Layout.js      # Page wrapper (Nav + Footer)
│   ├── Nav.js         # Responsive sticky navigation
│   ├── Footer.js      # Site footer
│   └── Forms.js       # Newsletter & inquiry form components
├── pages/             # Next.js file-based routing
│   ├── _app.js        # Global app wrapper (imports global CSS)
│   ├── _document.js   # Custom HTML document (fonts, favicon)
│   ├── index.js       # Homepage (/)
│   ├── about.js       # About page (/about)
│   ├── faq.js         # FAQ page (/faq)
│   ├── parties.js     # Parties page (/parties)
│   ├── play.js        # Play sessions page (/play)
│   └── studio.js      # Studio rental page (/studio)
├── public/            # Static assets served at /
│   ├── logo3.png      # Primary logo
│   └── ...
├── styles/
│   └── globals.css    # Global CSS (Tailwind imports + design tokens)
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js  # PostCSS configuration
```

## Getting Started

### GitHub Codespaces (recommended)

Open the repo in a Codespace — it will automatically run `npm install` and `npm run dev` and forward port **3000** as the preview.

> **Important:** the app runs on **port 3000**, not port 5500.  
> If you see a directory listing, click the **Ports** tab in VS Code, find port `3000`, and open the preview URL there. Alternatively, rebuild the container: `Ctrl+Shift+P` → **"Codespaces: Rebuild Container"**.

### Local development

#### Install dependencies

```bash
npm install
```

#### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Deployment

The site is deployed to GitHub Pages at [kenchahouse.ca](https://kenchahouse.ca).

For static export (GitHub Pages), configure `next.config.js` with `output: 'export'` and run `npm run build`.
