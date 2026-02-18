# StreamList (Create React App)

A React app that lets you search movies via **TMDB**, view posters, title, year, and rating, and save items to your personal **StreamList**. The app remembers your last search and recent items using `localStorage`. Navigation includes a left‑aligned NavBar with logo and tagline, and a gold‑ticket dropdown for quick access to recent titles.

> **Tech:** React (CRA), Fetch/axios (whichever used in `src/api/tmdb.js`), LocalStorage

---

## ✨ Features

- **/movies page** powered by TMDB  
  - Search bar with debounced queries (if implemented)  
  - Results show **poster, title, year, rating**  
- **LocalStorage persistence**  
  - Last query and last results restored on refresh  
  - Recent items shown in a gold‑ticket dropdown on the Home page  
- **StreamList Home page**  
  - Gold ticket opens a **recent items** dropdown (last 5 distinct items)  
- **Navigation**  
  - Left‑aligned **NavBar** with PNG logo and tagline  
- **Movie actions**  
  - **Play** (placeholder or opens trailer/stream link)  
  - **Add to StreamList** (persists)

---

## 🖼️ Screenshots (Optional but recommended)

Create a `docs/` folder (or `public/screenshots/`) and add screenshots:

1. Home page with **gold ticket** dropdown open  
2. **/movies** search with results  
3. StreamList with saved items

Then reference them here:

```markdown
![Home with gold ticket](docs/home-gold-ticket.png)
![Movies search results](docs/movies-results.png)
![StreamList saved items](docs/streamlist.png)