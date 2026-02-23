# D&D UI

A React single-page application for browsing Dungeons & Dragons heroes and monsters. Features login authentication, interactive navigation, animated visuals, and detailed game statistics.

## Features

- **Login** - Authenticated access via the D&D API, with session caching
- **Hero Pages** - Browse hero classes (Fighter, Cleric, Sorcerer, Rogue) with descriptions and character art fetched from the API
- **Monster Compendium** - View monsters organized by size (Small, Medium, Large) with collapsible stat blocks showing AC, HP, speed, and ability scores
- **Animated Sidebar** - Toggleable navigation with dragon eye open/close animation and logout button
- **Dark Fantasy Theme** - Gold and bronze accents on a dark background

## Tech Stack

- React 19 with TypeScript
- React Router 7 for client-side routing
- Bootstrap 5 for styling
- Create React App

## Getting Started

### Prerequisites

- Node.js
- D&D API running at `http://localhost:5071` (see `dnd-api`)

### Install and Run

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Project Structure

```
src/
├── assets/        # Images and animations
├── components/
│   ├── Header/    # Logo and navigation header
│   ├── Hero/      # Hero detail page with API integration
│   ├── Home/      # Landing page with dragon animation
│   ├── Login/     # Login page with API authentication
│   ├── Monster/   # Monster list and collapsible details
│   └── SideNav/   # Sidebar navigation with submenus and logout
├── data/          # Static hero and monster data
├── helpers/       # Utility functions for data lookup
└── tests/
```
