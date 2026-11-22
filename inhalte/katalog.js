/*
  Katalog: Hier steht, welche Fächer es gibt und welche Themen-Dateien geladen werden.

  Neues Thema veröffentlichen:
    1. Datei anlegen, z. B. inhalte/mathe/geld.js  (Format: siehe INHALTE.md)
    2. Den Pfad unten bei "themen" eintragen.
    3. node tools/pruefen.js  ausführen, dann committen.
*/
window.KATALOG = {
  kind: "Valentin",
  appTitel: "Valentins Schultrainer",

  faecher: [
    { id: "deutsch",   titel: "Deutsch",   emoji: "📖", farbe: "#E0662B", dunkel: "#A9471A", hell: "#FFE7D9" },
    { id: "mathe",     titel: "Mathe",     emoji: "🔢", farbe: "#3A78D6", dunkel: "#24549E", hell: "#E0ECFF" },
    { id: "sachkunde", titel: "Sachkunde", emoji: "🌍", farbe: "#2B9455", dunkel: "#1C6A3B", hell: "#DDF5E6" },
    { id: "musik",     titel: "Musik",     emoji: "🎵", farbe: "#8E52D9", dunkel: "#6334A3", hell: "#EFE3FF" }
  ],

  themen: [
    "deutsch/diktat-wortarten.js",
    "deutsch/zeitformen.js",
    "deutsch/wortarten-saetze.js",
    "deutsch/rechtschreibung.js",
    "mathe/einmaleins.js",
    "mathe/zahlen-bis-1000.js",
    "mathe/rechnen-bis-1000.js",
    "mathe/groessen.js",
    "mathe/geometrie.js",
    "sachkunde/igel.js",
    "musik/instrumente.js",
    "musik/noten.js"
  ]
};
