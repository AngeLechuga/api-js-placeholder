# Pokémon API Fetcher

Simple front‑end demo that lets a user search for a Pokémon by name and displays
its sprite and abilities using the [PokeAPI](https://pokeapi.co/).

## 📁 Project structure
- api.js
- index.html
- styles.css

- `index.html` – the single page UI: a header, a search form and a `<div id="app">`
  where results or errors are shown.
- `styles.css` – custom styles and variables for layout/colours.
- `api.js` – module that handles form submission, fetches from the API and
  renders the Pokémon card.

## 🚀 Usage

1. Clone or download the repository.
2. Open `index.html` in a browser.  
   (For some browsers you may need to serve it via a local web server
   to avoid CORS; e.g. `npx http-server` or `python -m http.server` from the
   project folder.)

3. Enter the name of a Pokémon (e.g. `pikachu`) and press **Buscar**.

   - While fetching, a “Cargando…” message is shown.
   - On success a card with the name, image and abilities appears.
   - Invalid names or network errors show an error message.

## 🛠 How it works

- `api.js` selects the elements (`.contenedor-texto_form`, `#inputPokemon`,
  `#app`) and registers a `submit` listener.
- `getPokemon(name)` fetches `https://pokeapi.co/api/v2/pokemon/{name}` (lower‑
  cased/trimmed).  
  Errors are caught and displayed.
- `showPokemon(pokemon)` builds and injects an HTML fragment with the data.

## 🎨 Styling

The CSS defines root variables for colors/fonts and basic layout.  
The `.pokemon-card` class centers the card and the dashed border around `#app`
provides visual feedback.

## 📄 License

This repository is for learning/demo purposes. Feel free to copy and tweak it.
