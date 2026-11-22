/* Mathe Klasse 3: Rechnen bis 1000 (Fachlehrplan Sachsen-Anhalt 2026: Kopfrechnen, halbschriftlich, schriftliche Addition/Subtraktion, Überschlag, Fachbegriffe, Punkt vor Strich, Sachaufgaben) */
thema({
  "id": "mathe-rechnen-bis-1000",
  "fach": "mathe",
  "titel": "Rechnen bis 1000",
  "untertitel": "Kopfrechnen, schriftlich, Fachbegriffe",
  "emoji": "🧮",
  "datum": "2026-11-22",
  "uebungen": [
    {
      "id": "kopfrechnen",
      "titel": "Kopfrechnen",
      "emoji": "🧠",
      "beschreibung": "Mit Hundertern und Zehnern",
      "runde": 10,
      "frage": "Rechne im Kopf.",
      "merke": "Nutze, was du schon kannst: 3 + 4 = 7, also 300 + 400 = 700. Und 3 · 2 = 6, also 3 · 200 = 600.",
      "aufgaben": [
        {"t":"luecke","text":"300 + 400 = ___","a":["700"]},
        {"t":"luecke","text":"800 − 500 = ___","a":["300"]},
        {"t":"luecke","text":"450 + 30 = ___","a":["480"]},
        {"t":"luecke","text":"670 − 40 = ___","a":["630"]},
        {"t":"luecke","text":"250 + 250 = ___","a":["500"]},
        {"t":"luecke","text":"1000 − 300 = ___","a":["700"]},
        {"t":"luecke","text":"380 + 20 = ___","a":["400"]},
        {"t":"luecke","text":"520 − 30 = ___","a":["490"],"tipp":"520 − 20 = 500, dann noch 10 weg: 490."},
        {"t":"luecke","text":"3 · 200 = ___","a":["600"],"tipp":"3 · 2 = 6, also 3 · 200 = 600."},
        {"t":"luecke","text":"40 · 5 = ___","a":["200"],"tipp":"4 · 5 = 20, also 40 · 5 = 200."},
        {"t":"luecke","text":"90 · 3 = ___","a":["270"]},
        {"t":"luecke","text":"800 : 4 = ___","a":["200"],"tipp":"8 : 4 = 2, also 800 : 4 = 200."},
        {"t":"luecke","text":"360 : 6 = ___","a":["60"],"tipp":"36 : 6 = 6, also 360 : 6 = 60."},
        {"t":"luecke","text":"700 + 290 = ___","a":["990"]}
      ]
    },
    {
      "id": "halbschriftlich",
      "titel": "Halbschriftlich rechnen",
      "emoji": "🪜",
      "beschreibung": "In Schritten rechnen",
      "runde": 8,
      "frage": "Rechne in Schritten. Du darfst dir Zwischenergebnisse aufschreiben.",
      "merke": "Zerlege eine Zahl und rechne Schritt für Schritt: 456 + 127 → 456 + 100 = 556 → 556 + 27 = 583. Beim Malnehmen: 7 · 23 = 7 · 20 + 7 · 3 = 140 + 21 = 161.",
      "aufgaben": [
        {"t":"luecke","text":"345 + 230 = ___","a":["575"],"tipp":"345 + 200 = 545, dann + 30 = 575."},
        {"t":"luecke","text":"456 + 127 = ___","a":["583"],"tipp":"456 + 100 = 556, dann + 27 = 583."},
        {"t":"luecke","text":"268 + 155 = ___","a":["423"],"tipp":"268 + 100 = 368, + 50 = 418, + 5 = 423."},
        {"t":"luecke","text":"624 − 213 = ___","a":["411"],"tipp":"624 − 200 = 424, dann − 13 = 411."},
        {"t":"luecke","text":"731 − 245 = ___","a":["486"],"tipp":"731 − 200 = 531, − 40 = 491, − 5 = 486."},
        {"t":"luecke","text":"503 − 128 = ___","a":["375"],"tipp":"503 − 100 = 403, − 28 = 375."},
        {"t":"luecke","text":"7 · 23 = ___","a":["161"],"tipp":"7 · 20 = 140 und 7 · 3 = 21. Zusammen 161."},
        {"t":"luecke","text":"4 · 125 = ___","a":["500"],"tipp":"4 · 100 = 400 und 4 · 25 = 100. Zusammen 500."},
        {"t":"luecke","text":"6 · 45 = ___","a":["270"],"tipp":"6 · 40 = 240 und 6 · 5 = 30. Zusammen 270."},
        {"t":"luecke","text":"15 · 6 = ___","a":["90"]},
        {"t":"luecke","text":"96 : 4 = ___","a":["24"],"tipp":"80 : 4 = 20 und 16 : 4 = 4. Zusammen 24."},
        {"t":"luecke","text":"84 : 3 = ___","a":["28"],"tipp":"60 : 3 = 20 und 24 : 3 = 8. Zusammen 28."}
      ]
    },
    {
      "id": "schriftlich",
      "titel": "Schriftlich rechnen und überschlagen",
      "emoji": "✍️",
      "beschreibung": "Untereinander rechnen",
      "runde": 8,
      "frage": "Rechne schriftlich auf einem Zettel. Schreibe das Ergebnis auf.",
      "merke": "Schreibe die Zahlen genau <b>untereinander</b>: Einer unter Einer, Zehner unter Zehner, Hunderter unter Hunderter. Beginne <b>rechts bei den Einern</b>. Denk an den <b>Übertrag</b>! Mach vorher einen <b>Überschlag</b> mit gerundeten Zahlen, dann merkst du Fehler sofort.",
      "aufgaben": [
        {"t":"luecke","text":"347 + 256 = ___","a":["603"]},
        {"t":"luecke","text":"518 + 294 = ___","a":["812"]},
        {"t":"luecke","text":"236 + 187 + 145 = ___","a":["568"]},
        {"t":"luecke","text":"625 + 375 = ___","a":["1000"]},
        {"t":"luecke","text":"765 − 328 = ___","a":["437"]},
        {"t":"luecke","text":"832 − 579 = ___","a":["253"]},
        {"t":"luecke","text":"604 − 237 = ___","a":["367"]},
        {"t":"luecke","text":"900 − 456 = ___","a":["444"]},
        {"t":"luecke","text":"999 − 111 − 222 = ___","a":["666"]},
        {"t":"auswahl","frage":"Überschlage. Welches Ergebnis ist ungefähr richtig?","text":"398 + 207 ≈ ___","opts":["600","500","700"],"tipp":"400 + 200 = 600"},
        {"t":"auswahl","frage":"Überschlage. Welches Ergebnis ist ungefähr richtig?","text":"612 − 289 ≈ ___","opts":["300","400","200"],"tipp":"600 − 300 = 300"},
        {"t":"auswahl","frage":"Überschlage. Welches Ergebnis ist ungefähr richtig?","text":"4 · 198 ≈ ___","opts":["800","400","1000"],"tipp":"4 · 200 = 800"},
        {"t":"auswahl","frage":"Überschlage. Welches Ergebnis ist ungefähr richtig?","text":"503 + 296 ≈ ___","opts":["800","700","900"],"tipp":"500 + 300 = 800"},
        {"t":"rf","frage":"Stimmt das?","text":"Beim schriftlichen Rechnen beginnt man bei den Einern.","a":true}
      ]
    },
    {
      "id": "fachbegriffe",
      "titel": "Fachbegriffe",
      "emoji": "🏷️",
      "beschreibung": "Summe, Differenz, Produkt, Quotient",
      "runde": 8,
      "frage": "Wie heißt das?",
      "merke": "Plus: <b>Summand</b> + Summand = <b>Summe</b>. Minus: <b>Minuend</b> − <b>Subtrahend</b> = <b>Differenz</b>. Mal: <b>Faktor</b> · Faktor = <b>Produkt</b>. Geteilt: <b>Dividend</b> : <b>Divisor</b> = <b>Quotient</b>.",
      "aufgaben": [
        {"t":"zuordnen","frage":"Was gehört zusammen? Tippe links und dann rechts.","paare":[["Addition","plus rechnen"],["Subtraktion","minus rechnen"],["Multiplikation","mal rechnen"],["Division","geteilt rechnen"]]},
        {"t":"zuordnen","frage":"Was gehört zusammen? Tippe links und dann rechts.","paare":[["Ergebnis beim Plus","Summe"],["Ergebnis beim Minus","Differenz"],["Ergebnis beim Mal","Produkt"],["Ergebnis beim Geteilt","Quotient"]]},
        {"t":"auswahl","text":"7 · 8 = 56. Die Zahlen 7 und 8 heißen …","opts":["Faktoren","Summanden","Quotienten"]},
        {"t":"auswahl","text":"45 − 12 = 33. Die Zahl 45 heißt …","opts":["Minuend","Subtrahend","Differenz"]},
        {"t":"auswahl","text":"45 − 12 = 33. Die Zahl 12 heißt …","opts":["Subtrahend","Minuend","Summe"]},
        {"t":"auswahl","text":"36 : 4 = 9. Die Zahl 4 heißt …","opts":["Divisor","Dividend","Faktor"]},
        {"t":"auswahl","text":"36 : 4 = 9. Die Zahl 36 heißt …","opts":["Dividend","Divisor","Produkt"]},
        {"t":"auswahl","text":"20 + 15 = 35. Die Zahl 35 heißt …","opts":["Summe","Summand","Differenz"]},
        {"t":"auswahl","text":"6 · 9 = 54. Die Zahl 54 heißt …","opts":["Produkt","Faktor","Summe"]}
      ]
    },
    {
      "id": "punkt-vor-strich",
      "titel": "Punkt vor Strich und Klammern",
      "emoji": "☝️",
      "beschreibung": "Was rechnest du zuerst?",
      "runde": 8,
      "frage": "Rechne aus.",
      "merke": "<b>Klammern</b> rechnest du immer zuerst. Danach gilt <b>Punkt vor Strich</b>: Mal (·) und geteilt (:) kommen vor plus (+) und minus (−). 3 + 4 · 5 = 3 + 20 = 23.",
      "aufgaben": [
        {"t":"luecke","text":"3 + 4 · 5 = ___","a":["23"],"tipp":"Zuerst 4 · 5 = 20, dann 3 + 20 = 23."},
        {"t":"luecke","text":"(3 + 4) · 5 = ___","a":["35"],"tipp":"Zuerst die Klammer: 3 + 4 = 7, dann 7 · 5 = 35."},
        {"t":"luecke","text":"20 − 2 · 6 = ___","a":["8"],"tipp":"Zuerst 2 · 6 = 12, dann 20 − 12 = 8."},
        {"t":"luecke","text":"2 · 8 + 2 · 2 = ___","a":["20"],"tipp":"16 + 4 = 20"},
        {"t":"luecke","text":"40 : 8 + 7 = ___","a":["12"],"tipp":"Zuerst 40 : 8 = 5, dann 5 + 7 = 12."},
        {"t":"luecke","text":"50 − (10 + 15) = ___","a":["25"],"tipp":"Zuerst die Klammer: 10 + 15 = 25, dann 50 − 25 = 25."},
        {"t":"luecke","text":"6 · (9 − 4) = ___","a":["30"],"tipp":"Zuerst die Klammer: 9 − 4 = 5, dann 6 · 5 = 30."},
        {"t":"luecke","text":"100 − 7 · 10 = ___","a":["30"],"tipp":"Zuerst 7 · 10 = 70, dann 100 − 70 = 30."},
        {"t":"luecke","text":"18 : (2 + 1) = ___","a":["6"],"tipp":"Zuerst die Klammer: 2 + 1 = 3, dann 18 : 3 = 6."},
        {"t":"luecke","text":"5 + 5 · 0 = ___","a":["5"],"tipp":"5 · 0 = 0, dann 5 + 0 = 5."}
      ]
    },
    {
      "id": "sachaufgaben",
      "titel": "Sachaufgaben",
      "emoji": "🚂",
      "beschreibung": "Rechnen im Alltag",
      "runde": 6,
      "frage": "Lies genau und rechne.",
      "merke": "1. Lies die Aufgabe zweimal. 2. <b>Markiere</b> die wichtigen Zahlen. 3. Was ist gefragt? 4. Rechnung aufschreiben. 5. Antwort geben und prüfen: Kann das stimmen?",
      "aufgaben": [
        {"t":"luecke","bild":"🚂","text":"Ein Zug hat 8 Wagen. In jeden Wagen passen 60 Personen. Wie viele Personen passen in den Zug? ___ Personen","a":["480"],"tipp":"8 · 60 = 480"},
        {"t":"luecke","bild":"🏫","text":"In der Schule sind 372 Kinder. 158 davon sind Mädchen. Wie viele Jungen sind es? ___ Jungen","a":["214"],"tipp":"372 − 158 = 214"},
        {"t":"luecke","bild":"🚲","text":"Oma hat 500 €. Sie kauft ein Fahrrad für 289 €. Wie viel Geld bleibt übrig? ___ €","a":["211"],"tipp":"500 − 289 = 211"},
        {"t":"luecke","bild":"🥚","text":"Ein Bauer hat 240 Eier. Er packt immer 6 Eier in einen Karton. Wie viele Kartons braucht er? ___ Kartons","a":["40"],"tipp":"240 : 6 = 40"},
        {"t":"luecke","bild":"🚗","text":"Familie Krüger fährt 345 km bis zur Ostsee und wieder zurück. Wie viele Kilometer sind das insgesamt? ___ km","a":["690"],"tipp":"345 + 345 = 690"},
        {"t":"luecke","bild":"🎬","text":"Im Kino gibt es 9 Reihen mit je 25 Plätzen. Wie viele Plätze sind das? ___ Plätze","a":["225"],"tipp":"9 · 25 = 225"},
        {"t":"luecke","bild":"🗺️","text":"Von Magdeburg nach Halle sind es etwa 90 km. Papa fährt hin und zurück. Wie viele Kilometer fährt er ungefähr? ___ km","a":["180"],"tipp":"90 + 90 = 180"},
        {"t":"luecke","bild":"📚","text":"Ein Buch hat 128 Seiten. Lea hat schon 75 Seiten gelesen. Wie viele Seiten fehlen noch? ___ Seiten","a":["53"],"tipp":"128 − 75 = 53"}
      ]
    }
  ]
});
