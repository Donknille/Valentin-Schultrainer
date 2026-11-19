/* Musik: Noten lesen (Beispielthema, kann ersetzt oder ergänzt werden) */
thema({
  "id": "musik-noten",
  "fach": "musik",
  "titel": "Noten lesen",
  "untertitel": "Notennamen und Notenwerte",
  "emoji": "🎼",
  "datum": "2026-11-19",
  "uebungen": [
    {
      "id": "notennamen",
      "titel": "Wie heißt die Note?",
      "emoji": "🎵",
      "beschreibung": "Noten im Violinschlüssel",
      "runde": 8,
      "frage": "Wie heißt die Note?",
      "merke": "Die Noten heißen <b>c d e f g a h c</b>. Die Note <b>g</b> sitzt auf der Linie, um die sich der Violinschlüssel dreht. Das tiefe <b>c</b> bekommt eine kleine Hilfslinie.",
      "aufgaben": [
        {"t":"noten","noten":["c1"]},
        {"t":"noten","noten":["d1"]},
        {"t":"noten","noten":["e1"],"tipp":"Das e sitzt auf der untersten Linie."},
        {"t":"noten","noten":["f1"]},
        {"t":"noten","noten":["g1"],"tipp":"Um die g-Linie dreht sich der Violinschlüssel."},
        {"t":"noten","noten":["a1"]},
        {"t":"noten","noten":["h1"],"tipp":"Das h sitzt auf der mittleren Linie."},
        {"t":"noten","noten":["c2"]},
        {"t":"noten","noten":["d2"]},
        {"t":"noten","noten":["e2"]},
        {"t":"noten","noten":["f2"],"tipp":"Das hohe f sitzt auf der obersten Linie."},
        {"t":"noten","noten":["g2"]}
      ]
    },
    {
      "id": "notenwoerter",
      "titel": "Noten-Wörter",
      "emoji": "🔤",
      "beschreibung": "Welches Wort verstecken die Noten?",
      "runde": 4,
      "frage": "Lies die Noten. Welches Wort ergeben sie?",
      "merke": "Lies die Noten von links nach rechts und schreibe die Buchstaben hintereinander. So entsteht ein Wort!",
      "aufgaben": [
        {"t":"noten","noten":["a1","f1","f1","e1"],"wort":"Affe"},
        {"t":"noten","noten":["f1","e1","e2"],"wort":"Fee"},
        {"t":"noten","noten":["h1","e1","f1","e2"],"wort":"Hefe"},
        {"t":"noten","noten":["e1","h1","e2"],"wort":"Ehe"},
        {"t":"noten","noten":["a1","d2","e2"],"wort":"ade","tipp":"Wie im Lied »Winter ade«. So hat man früher Tschüss gesagt."}
      ]
    },
    {
      "id": "notenwerte",
      "titel": "Notenwerte",
      "emoji": "⏱️",
      "beschreibung": "Wie lange klingt eine Note?",
      "runde": 6,
      "frage": "Wähle die richtige Antwort.",
      "merke": "<b>Ganze Note:</b> 4 Schläge. <b>Halbe Note:</b> 2 Schläge. <b>Viertelnote:</b> 1 Schlag. <b>Achtelnote:</b> ein halber Schlag. Zwei Achtel sind so lang wie eine Viertel.",
      "aufgaben": [
        {"t":"auswahl","text":"Wie viele Schläge dauert eine ganze Note?","opts":["4","2","1"]},
        {"t":"auswahl","text":"Wie viele Schläge dauert eine halbe Note?","opts":["2","4","1"]},
        {"t":"auswahl","text":"Wie viele Schläge dauert eine Viertelnote?","opts":["1","2","4"]},
        {"t":"auswahl","text":"Wie viele Viertelnoten sind so lang wie eine halbe Note?","opts":["2","3","4"]},
        {"t":"auswahl","text":"Wie viele Achtelnoten sind so lang wie eine Viertelnote?","opts":["2","4","1"]},
        {"t":"rf","text":"Eine ganze Note ist so lang wie zwei halbe Noten.","a":true},
        {"t":"rf","text":"Eine Viertelnote ist länger als eine halbe Note.","a":false,"tipp":"Die halbe Note dauert 2 Schläge, die Viertelnote nur 1 Schlag."},
        {"t":"rf","text":"Vier Viertelnoten sind so lang wie eine ganze Note.","a":true}
      ]
    }
  ]
});
