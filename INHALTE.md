# Neue Inhalte für Valentins Schultrainer

Jedes Thema ist eine eigene Datei in `inhalte/<fach>/`. Die App selbst muss man dafür nicht anfassen.
Aus jedem Thema entstehen automatisch **digitale Übungen** und **druckbare Arbeitsblätter** mit Lösungsblatt.

## Ablauf in 4 Schritten

1. **Inhalte aufbereiten lassen:** Fotos der Arbeitsheft-Seiten an Claude geben, zusammen mit der Vorlage unten.
   Am einfachsten geht das direkt in Claude Code in diesem Repo („Hier sind Fotos, mach daraus ein neues Mathe-Thema“).
   Dort kennt Claude dieses Format bereits und erledigt die Schritte 2 und 3 selbst.
2. **Datei ablegen:** z. B. `inhalte/mathe/geld.js` und den Pfad in `inhalte/katalog.js` bei `themen` eintragen.
3. **Prüfen:** `node tools/pruefen.js` muss mit ✓ enden.
4. **Veröffentlichen:** Committen und pushen. Vercel stellt die neue Version automatisch online.

Altes Thema nicht mehr aktuell? `"archiv": true` setzen. Es wandert dann in „Ältere Themen“ und bleibt erhalten.

## Aufbau einer Themen-Datei

```js
thema({
  "id": "mathe-geld",              // eindeutig, nur a-z, 0-9 und -
  "fach": "mathe",                 // deutsch | mathe | sachkunde | musik
  "titel": "Rechnen mit Geld",
  "untertitel": "Euro und Cent",   // optional
  "emoji": "💶",
  "datum": "2026-12-01",           // zeigt 14 Tage lang „NEU“, neueste Themen stehen oben
  "uebungen": [
    {
      "id": "euro-cent",           // eindeutig innerhalb des Themas
      "titel": "Euro und Cent",
      "emoji": "🪙",
      "beschreibung": "1 € = 100 ct",  // kurzer Text auf der Kachel
      "runde": 8,                  // Aufgaben pro Runde (Standard 8)
      "frage": "Rechne um.",       // Arbeitsauftrag für alle Aufgaben dieser Übung
      "merke": "<b>1 Euro</b> sind <b>100 Cent</b>.",  // Merke-Kasten, <b> und <i> erlaubt
      "wortspeicher": ["…"],       // optional, nur für Lückentexte
      "aufgaben": [ … ]
    }
  ]
});
```

Optional bei **jeder** Aufgabe: `"frage"` (eigener Auftrag), `"tipp"` (Hilfe nach einem Fehler), `"bild"` (ein Emoji, wird groß angezeigt), `"druckfrage"` (abweichender Auftrag nur auf dem Arbeitsblatt).

## Die 9 Aufgabentypen

| Typ | Wofür | Beispiel |
|---|---|---|
| `luecke` | Lücke(n) ausfüllen, auch Rechnen | `{"t":"luecke","text":"7 · 8 = ___","a":["56"]}` |
| `auswahl` | Eine richtige Antwort wählen. **Die erste Option ist immer richtig**, die App mischt. | `{"t":"auswahl","text":"Ein ___ sitzt auf dem Ast.","opts":["Vogel","Fogel"]}` |
| `rf` | Stimmt / stimmt nicht | `{"t":"rf","text":"Der Igel ist ein Säugetier.","a":true}` |
| `zuordnen` | 2 bis 6 Paare verbinden | `{"t":"zuordnen","paare":[["🎻 Geige","streichen"],["🎺 Trompete","blasen"]]}` |
| `gross` | Groß oder klein? Korrekt geschriebener Satz, Großbuchstaben sind die Lösung | `{"t":"gross","text":"Der freche Affe turnt im großen Baum."}` |
| `nomen` | Das Nomen unter 4 klein geschriebenen Wörtern finden. `a` = Position (0 = erstes Wort) | `{"t":"nomen","woerter":["lacht","laut","löwe","leuchtet"],"a":2,"tipp":"der Löwe – viele Löwen"}` |
| `zusammen` | Zusammengesetzte Nomen | `{"t":"zusammen","teil1":["die","Hand","✋"],"teil2":["der","Ball","⚽"],"artikel":"der","wort":"Handball"}` |
| `diktat` | Satz wird vorgelesen. Der senkrechte Strich `\|` trennt die Vorlese-Teile | `{"t":"diktat","text":"Der freche Affe \| turnt \| im großen Baum."}` |
| `noten` | Noten im Violinschlüssel (c1 bis a2). Eine Note: Namen wählen. Mehrere: Wort schreiben | `{"t":"noten","noten":["g1"]}` oder `{"t":"noten","noten":["a1","f1","f1","e1"],"wort":"Affe"}` |

### Wichtige Regeln

- **Groß und klein zählt.** Die Prüfung ist absichtlich genau (Groß- und Kleinschreibung ist Lernziel).
- `luecke`: so viele Antworten in `a` wie Lücken `___` im Text. Zahlen als Text schreiben: `"56"`, nicht `56`.
  Mehrere richtige Antworten für eine Lücke: `"a": [["Rad","Fahrrad"]]`.
- `auswahl`: `"sortiert": true` zeigt die Optionen alphabetisch statt gemischt (gut bei Bausteinen wie ab, an, auf).
- `gross`: keine Wörter mit Bindestrich (z. B. „T-Shirt“).
- `nomen`: alle Wörter klein schreiben.
- Aufgaben dürfen jederzeit ergänzt, umsortiert oder gelöscht werden. Falsch gelöste Aufgaben merkt sich die App über den Inhalt der Aufgabe, nicht über die Position.
- In Texten keine langen Gedankenstriche (—) verwenden. Sprache: kindgerecht, ermutigend, 3. Klasse.
- Möglichst 6 bis 30 Aufgaben pro Übung, damit Runden und Arbeitsblätter abwechslungsreich bleiben.

## Vorlage für Claude (zum Kopieren)

> Ich lade dir Fotos aus dem Arbeitsheft meines Sohnes hoch (3. Klasse, Fach: **[FACH]**, Thema: **[THEMA]**).
> Erstelle daraus eine Themen-Datei für seine Lern-App. Halte dich genau an dieses Format:
>
> *(hier den Abschnitt „Aufbau einer Themen-Datei“ und „Die 9 Aufgabentypen“ samt Regeln einfügen)*
>
> Anforderungen:
> - 3 bis 6 Übungen mit je 8 bis 25 Aufgaben. Nutze passende Aufgabentypen und mische sie.
> - Inhalte eng an den Arbeitsheft-Seiten orientieren. Fehler, die im Heft passiert sind, als eigene Übung „Stolperwörter“ aufnehmen.
> - Zu jeder Übung einen kurzen, kindgerechten Merke-Text und bei schwierigen Aufgaben einen Tipp.
> - Fachlich korrekt. Wenn du dir bei einer Aufgabe unsicher bist, lass sie weg.
> - Er geht in Sachsen-Anhalt zur Schule. Richte dich nach dem Fachlehrplan Grundschule Sachsen-Anhalt (Schuljahrgänge 3/4, Stand 01.08.2026).
> - Gib nur den Inhalt der Datei aus, beginnend mit `thema({`.
