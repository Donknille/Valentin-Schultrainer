/* Mathe Klasse 3: Geometrie (Fachlehrplan Sachsen-Anhalt 2026, Raum und Form: Körper, Ecken/Kanten/Flächen, Quadrat und Rechteck, Kreis, Symmetrie, Umfang) */
thema({
  "id": "mathe-geometrie",
  "fach": "mathe",
  "titel": "Körper und Formen",
  "untertitel": "Würfel, Quader, Kugel, Symmetrie, Umfang",
  "emoji": "🧊",
  "datum": "2026-11-22",
  "uebungen": [
    {
      "id": "koerper",
      "titel": "Körper erkennen",
      "emoji": "🎲",
      "beschreibung": "Würfel, Quader, Kugel, Zylinder, Kegel, Pyramide",
      "runde": 8,
      "frage": "Welcher Körper ist das?",
      "merke": "<b>Würfel:</b> 6 gleich große Quadrate. <b>Quader:</b> 6 Rechtecke. <b>Kugel:</b> rund, ohne Ecken. <b>Zylinder:</b> 2 Kreise und eine gebogene Fläche. <b>Kegel:</b> ein Kreis und eine Spitze. <b>Pyramide:</b> Dreiecke treffen sich oben in einer Spitze.",
      "aufgaben": [
        {"t":"auswahl","bild":"🎲","text":"ein Spielwürfel","opts":["Würfel","Quader","Kugel"]},
        {"t":"auswahl","bild":"⚽","text":"ein Fußball","opts":["Kugel","Zylinder","Kegel"]},
        {"t":"auswahl","bild":"🥫","text":"eine Konservendose","opts":["Zylinder","Quader","Kegel"]},
        {"t":"auswahl","bild":"📦","text":"ein Schuhkarton","opts":["Quader","Würfel","Pyramide"],"tipp":"Ein Schuhkarton hat Rechtecke als Flächen. Darum ist er ein Quader."},
        {"t":"auswahl","bild":"🍦","text":"eine Eiswaffel","opts":["Kegel","Zylinder","Pyramide"]},
        {"t":"auswahl","text":"Dieser Körper hat eine quadratische Grundfläche und vier Dreiecke, die sich oben in einer Spitze treffen.","opts":["Pyramide","Kegel","Würfel"]},
        {"t":"auswahl","text":"Dieser Körper hat zwei Kreise als Flächen und rollt gerade, wenn man ihn hinlegt.","opts":["Zylinder","Kugel","Kegel"]},
        {"t":"auswahl","text":"Alle sechs Flächen sind gleich große Quadrate.","opts":["Würfel","Quader","Pyramide"]},
        {"t":"zuordnen","frage":"Was gehört zusammen? Tippe links und dann rechts.","paare":[["Kugel","Murmel"],["Zylinder","Kerze"],["Quader","Ziegelstein"],["Kegel","Partyhut"]]}
      ]
    },
    {
      "id": "ecken-kanten",
      "titel": "Ecken, Kanten, Flächen",
      "emoji": "📐",
      "beschreibung": "Zählen und vergleichen",
      "runde": 8,
      "frage": "Ergänze die Zahl.",
      "merke": "Würfel und Quader haben beide <b>6 Flächen, 8 Ecken und 12 Kanten</b>. Eine Kugel hat keine Ecken und keine Kanten.",
      "aufgaben": [
        {"t":"luecke","text":"Ein Würfel hat ___ Flächen.","a":["6"]},
        {"t":"luecke","text":"Ein Würfel hat ___ Ecken.","a":["8"]},
        {"t":"luecke","text":"Ein Würfel hat ___ Kanten.","a":["12"]},
        {"t":"luecke","text":"Ein Quader hat ___ Flächen.","a":["6"]},
        {"t":"luecke","text":"Ein Quader hat ___ Ecken.","a":["8"]},
        {"t":"luecke","text":"Ein Quader hat ___ Kanten.","a":["12"]},
        {"t":"luecke","text":"Eine Kugel hat ___ Ecken.","a":["0"]},
        {"t":"luecke","text":"Eine Pyramide mit quadratischer Grundfläche hat ___ Ecken.","a":["5"],"tipp":"4 Ecken unten und 1 Spitze oben."},
        {"t":"luecke","text":"Eine Pyramide mit quadratischer Grundfläche hat ___ Flächen.","a":["5"],"tipp":"1 Quadrat unten und 4 Dreiecke."},
        {"t":"luecke","text":"Eine Pyramide mit quadratischer Grundfläche hat ___ Kanten.","a":["8"],"tipp":"4 Kanten unten und 4 Kanten zur Spitze."},
        {"t":"luecke","text":"Ein Zylinder hat ___ Kreise als Flächen.","a":["2"]}
      ]
    },
    {
      "id": "formen-symmetrie",
      "titel": "Formen und Symmetrie",
      "emoji": "🦋",
      "beschreibung": "Quadrat, Rechteck, Kreis, Spiegelachse",
      "runde": 8,
      "frage": "Stimmt das?",
      "merke": "Ein <b>Quadrat</b> ist ein besonderes Rechteck: Alle 4 Seiten sind gleich lang. Ein Rechteck hat 4 <b>rechte Winkel</b>. Beim Kreis ist der <b>Durchmesser</b> doppelt so lang wie der <b>Radius</b>. Eine Figur ist <b>achsensymmetrisch</b>, wenn beide Hälften beim Falten genau aufeinanderpassen.",
      "aufgaben": [
        {"t":"rf","text":"Ein Quadrat ist ein besonderes Rechteck.","a":true},
        {"t":"rf","text":"Ein Rechteck hat vier rechte Winkel.","a":true},
        {"t":"rf","text":"Bei einem Quadrat sind alle Seiten gleich lang.","a":true},
        {"t":"rf","text":"Ein Dreieck hat vier Ecken.","a":false,"tipp":"Ein Dreieck hat drei Ecken. Das steckt schon im Namen."},
        {"t":"rf","text":"Ein Kreis hat Ecken.","a":false},
        {"t":"rf","text":"Der Durchmesser eines Kreises ist doppelt so lang wie der Radius.","a":true},
        {"t":"rf","text":"Gegenüberliegende Seiten eines Rechtecks sind gleich lang.","a":true},
        {"t":"rf","text":"Ein Quadrat hat nur eine Symmetrieachse.","a":false,"tipp":"Ein Quadrat hat 4 Symmetrieachsen: 2 durch die Seitenmitten und 2 über die Ecken."},
        {"t":"rf","text":"Der Großbuchstabe A ist achsensymmetrisch.","a":true,"tipp":"Die Spiegelachse geht senkrecht durch die Mitte."},
        {"t":"rf","text":"Der Großbuchstabe F ist achsensymmetrisch.","a":false},
        {"t":"rf","text":"Das Netz eines Würfels besteht aus 6 Quadraten.","a":true},
        {"t":"auswahl","frage":"Wähle die richtige Antwort.","text":"Wie viele Symmetrieachsen hat ein Rechteck, das kein Quadrat ist?","opts":["2","4","1"]},
        {"t":"auswahl","frage":"Wähle die richtige Antwort.","text":"Ein Kreis hat den Radius 3 cm. Wie lang ist der Durchmesser?","opts":["6 cm","3 cm","9 cm"]}
      ]
    },
    {
      "id": "umfang",
      "titel": "Umfang",
      "emoji": "🖼️",
      "beschreibung": "Einmal rundherum",
      "runde": 6,
      "frage": "Berechne den Umfang.",
      "merke": "Der <b>Umfang</b> ist die Länge einmal ganz um die Figur herum. Du addierst alle Seiten. Rechteck 5 cm lang und 3 cm breit: 5 + 3 + 5 + 3 = 16 cm.",
      "aufgaben": [
        {"t":"luecke","text":"Rechteck: 5 cm lang, 3 cm breit. Umfang = ___ cm","a":["16"],"tipp":"5 + 3 + 5 + 3 = 16"},
        {"t":"luecke","text":"Rechteck: 6 cm lang, 2 cm breit. Umfang = ___ cm","a":["16"],"tipp":"6 + 2 + 6 + 2 = 16"},
        {"t":"luecke","text":"Rechteck: 7 cm lang, 3 cm breit. Umfang = ___ cm","a":["20"],"tipp":"7 + 3 + 7 + 3 = 20"},
        {"t":"luecke","text":"Rechteck: 8 cm lang, 4 cm breit. Umfang = ___ cm","a":["24"],"tipp":"8 + 4 + 8 + 4 = 24"},
        {"t":"luecke","text":"Quadrat mit 5 cm Seitenlänge. Umfang = ___ cm","a":["20"],"tipp":"4 · 5 = 20"},
        {"t":"luecke","text":"Quadrat mit 10 cm Seitenlänge. Umfang = ___ cm","a":["40"],"tipp":"4 · 10 = 40"},
        {"t":"luecke","text":"Dreieck mit den Seiten 3 cm, 4 cm und 5 cm. Umfang = ___ cm","a":["12"],"tipp":"3 + 4 + 5 = 12"}
      ]
    }
  ]
});
