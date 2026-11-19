# Valentins Schultrainer – Übergabe für Claude Code

## Worum es geht
Private Lern-App für Valentin (3. Klasse). Fächer: Deutsch, Mathe, Sachkunde, Musik. Nach und nach kommen neue Themen dazu,
meist aus seinen Arbeitsheft-Seiten. Jedes Thema gibt es digital (Übungen mit Sternen) und als **druckbares Arbeitsblatt mit Lösungsblatt**.

**Zielgerät:** Amazon Fire Kids Tablet (Kinderprofil, Amazon-Kids-Webbrowser). Die Adresse wird im Amazon-Eltern-Dashboard freigegeben.
Gedruckt wird am Computer oder Handy (im Kids-Browser geht Drucken meist nicht).

## Aufbau
Statische Seite, **kein Build-Schritt, keine Abhängigkeiten**.

| Datei | Inhalt |
|---|---|
| `index.html` | Grundgerüst (Kopfzeile, Eule, Container) |
| `app.css` | Design für Bildschirm und Druck (`@media print`, A4) |
| `app.js` | App-Logik: Navigation per Hash (`#/fach/…`, `#/thema/…`, `#/drucken/…`, `#/runde`), Aufgabentypen (`RENDER`), Arbeitsblätter (`DRUCK`), Vorlesen, Sticker |
| `inhalte/katalog.js` | Fächer (Farben) und Liste der Themen-Dateien, Name des Kindes |
| `inhalte/<fach>/<thema>.js` | Ein Thema pro Datei, ruft `thema({...})` auf |
| `tools/pruefen.js` | Prüft Syntax und alle Inhalte (`node tools/pruefen.js`) |
| `INHALTE.md` | Format-Referenz und Vorlage für das Aufbereiten mit Claude |

- Externe Ressource: nur Google Fonts (Andika, Nunito). Fällt das weg, greifen System-Schriften.
- Vorlesen über die Web Speech API (`speechSynthesis`, `de-DE`).
- Fortschritt (Sterne, beste Sterne je Übung, falsch gelöste Aufgaben, Diktat-Modus) in `localStorage` mit Präfix `vs_`, alle Zugriffe in try/catch.
- Falsch gelöste Aufgaben werden über `themaId/uebungId/hash(Aufgabe)` gemerkt. Aufgaben dürfen also beliebig eingefügt, verschoben oder gelöscht werden.
- `noindex` als Meta-Tag und als Header (`vercel.json`). Die Seite soll nicht in Suchmaschinen auftauchen.

## Neues Thema anlegen (häufigste Aufgabe)
Wenn der Nutzer Fotos von Arbeitsheft-Seiten oder Stichpunkte schickt:
1. Format in `INHALTE.md` lesen. Neue Datei `inhalte/<fach>/<kurzname>.js` anlegen, `datum` = heute.
2. Pfad in `inhalte/katalog.js` unter `themen` eintragen.
3. `node tools/pruefen.js` muss mit ✓ enden (Hinweise lesen und wenn sinnvoll beheben).
4. Im Browser prüfen (lokaler Server, z. B. `python3 -m http.server`): Thema öffnen, jede Übung einmal durchspielen, Arbeitsblatt-Vorschau ansehen.
5. Committen. Vercel deployt automatisch.

Inhaltliche Regeln:
- Fachlich korrekt und passend für die 3. Klasse. Bei Unsicherheit eine Aufgabe lieber weglassen.
- Prüfung ist bewusst **case-sensitive** (Groß/klein ist Lernziel). Eingabefelder haben `autocapitalize/autocorrect/spellcheck = off`, das muss so bleiben.
- Bei `auswahl` ist die **erste** Option die richtige.
- Bei `gross` keine Wörter mit Bindestrich (z. B. „T-Shirt“).
- Ein neues Fach: Eintrag in `faecher` in `inhalte/katalog.js` (id, titel, emoji, farbe, dunkel, hell). Sonst nichts ändern.

## Deployment (Vercel)
- Projekt aus diesem Repo importieren, Framework Preset **Other**, Build Command leer, Output Directory = Root.
- **Deployment Protection / Vercel Authentication für Production aus**, sonst landet das Tablet auf einer Login-Seite.
- Nach dem Deploy prüfen: Startseite lädt, Fächer und Themen öffnen sich, eine Runde bis zum Sterne-Bildschirm, Arbeitsblatt-Vorschau, keine Konsolenfehler, Aufruf ohne Vercel-Login (Inkognito).

## Freigabe auf dem Tablet (macht der Nutzer selbst)
Amazon-Eltern-Dashboard (eltern.amazon.de) → Profil des Kindes → „Fire Tablet Webbrowser“:
- Webbrowser einschalten und die Vercel-URL als erlaubte Website hinzufügen.
- „Cookies aktivieren“, sonst speichert der Kids-Browser keinen Fortschritt (localStorage).
- Vorlesen testen. Falls es nicht klappt: Modus „Auf Papier“ plus „Satz zeigen“, ein Erwachsener liest vor.

## Stil
- Sprache der App: Deutsch, kindgerecht, ermutigend.
- In Texten keine langen Gedankenstriche (—) im Fließtext.
- Nach Änderungen an `app.js`: `node tools/pruefen.js`, im Browser durchklicken (auch Druckvorschau), dann committen.
