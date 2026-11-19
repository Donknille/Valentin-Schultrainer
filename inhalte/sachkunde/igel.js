/* Sachkunde: Der Igel und Tiere im Winter (Beispielthema, kann ersetzt oder ergänzt werden) */
thema({
  "id": "sachkunde-igel",
  "fach": "sachkunde",
  "titel": "Der Igel",
  "untertitel": "Ein Tier im Herbst und Winter",
  "emoji": "🦔",
  "datum": "2026-11-19",
  "uebungen": [
    {
      "id": "quiz",
      "titel": "Igel-Quiz",
      "emoji": "🦔",
      "beschreibung": "Was weißt du über den Igel?",
      "runde": 6,
      "frage": "Wähle die richtige Antwort.",
      "merke": "Der Igel ist ein <b>Säugetier</b>. Er ist <b>nachts</b> unterwegs und sucht Futter: Käfer, Regenwürmer und Schnecken. Im Winter hält er <b>Winterschlaf</b>.",
      "aufgaben": [
        {"t":"auswahl","bild":"🌙","text":"Wann ist der Igel unterwegs?","opts":["nachts","mittags","morgens"]},
        {"t":"auswahl","bild":"🪲","text":"Was frisst der Igel am liebsten?","opts":["Käfer und Würmer","Äpfel und Birnen","Gras und Heu"],"tipp":"Der Igel frisst vor allem kleine Tiere."},
        {"t":"auswahl","bild":"⚠️","text":"Was macht der Igel bei Gefahr?","opts":["Er rollt sich zu einer Kugel.","Er klettert auf einen Baum.","Er springt ins Wasser."]},
        {"t":"auswahl","bild":"🍂","text":"Wo hält der Igel gern Winterschlaf?","opts":["in einem Laubhaufen","auf einem Baum","im Teich"]},
        {"t":"auswahl","bild":"🐣","text":"Wie kommen Igelkinder auf die Welt?","opts":["Sie werden lebend geboren.","Sie schlüpfen aus Eiern.","Sie wachsen aus Samen."],"tipp":"Der Igel ist ein Säugetier. Die Jungen trinken Milch bei der Mutter."},
        {"t":"auswahl","bild":"📍","text":"Ungefähr wie viele Stacheln hat ein Igel?","opts":["etwa 7000","etwa 70","etwa 7"],"tipp":"Ein erwachsener Igel hat ungefähr 6000 bis 8000 Stacheln."},
        {"t":"auswahl","bild":"🥛","text":"Was darf man einem Igel auf keinen Fall geben?","opts":["Milch","Wasser","Katzenfutter"],"tipp":"Kuhmilch macht Igel krank. Wasser ist gut."}
      ]
    },
    {
      "id": "stimmt-das",
      "titel": "Stimmt das?",
      "emoji": "🤔",
      "beschreibung": "Richtig oder falsch?",
      "runde": 6,
      "frage": "Stimmt der Satz?",
      "merke": "Lies jeden Satz ganz genau. Manchmal ist nur ein Wort falsch!",
      "aufgaben": [
        {"t":"rf","text":"Der Igel ist ein Säugetier.","a":true},
        {"t":"rf","text":"Der Igel schläft im Winter auf einem Baum.","a":false,"tipp":"Er schläft in einem Laubhaufen oder unter Hecken."},
        {"t":"rf","text":"Igelkinder werden blind geboren.","a":true},
        {"t":"rf","text":"Der Igel frisst am liebsten Gras.","a":false,"tipp":"Er frisst Käfer, Regenwürmer und Schnecken."},
        {"t":"rf","text":"Im Winterschlaf wird der Igel ganz kalt und atmet sehr langsam.","a":true},
        {"t":"rf","text":"Man sollte einem Igel Milch geben.","a":false,"tipp":"Milch macht Igel krank."},
        {"t":"rf","text":"Der Igel ist vor allem nachts unterwegs.","a":true},
        {"t":"rf","text":"Bei Gefahr rennt der Igel immer schnell weg.","a":false,"tipp":"Er rollt sich zu einer stacheligen Kugel zusammen."}
      ]
    },
    {
      "id": "lueckentext",
      "titel": "Lückentext",
      "emoji": "✏️",
      "beschreibung": "Setze die Wörter ein",
      "runde": 6,
      "frage": "Setze das passende Wort ein.",
      "wortspeicher": ["Stacheln", "Winterschlaf", "nachts", "Laubhaufen", "Schnecken", "Säugetier"],
      "merke": "Die Wörter im Wortspeicher helfen dir. Achte auf Groß- und Kleinschreibung!",
      "aufgaben": [
        {"t":"luecke","text":"Der Igel hat viele spitze ___.","a":["Stacheln"]},
        {"t":"luecke","text":"Im Winter hält der Igel ___.","a":["Winterschlaf"]},
        {"t":"luecke","text":"Der Igel geht meistens ___ auf Futtersuche.","a":["nachts"]},
        {"t":"luecke","text":"Er schläft gern in einem ___.","a":["Laubhaufen"]},
        {"t":"luecke","text":"Der Igel frisst Käfer, Regenwürmer und ___.","a":["Schnecken"]},
        {"t":"luecke","text":"Die Igelmutter säugt ihre Jungen. Darum ist der Igel ein ___.","a":["Säugetier"]}
      ]
    },
    {
      "id": "tiere-im-winter",
      "titel": "Tiere im Winter",
      "emoji": "❄️",
      "beschreibung": "Wer macht was im Winter?",
      "runde": 3,
      "frage": "Was gehört zusammen? Tippe links und dann rechts.",
      "merke": "<b>Winterschlaf:</b> Das Tier schläft fest den ganzen Winter (Igel). <b>Winterruhe:</b> Das Tier schläft viel, wacht aber zum Fressen auf (Eichhörnchen). <b>Winterstarre:</b> Das Tier wird ganz steif und kalt (Frosch). <b>Zugvögel</b> fliegen in den warmen Süden (Schwalbe).",
      "aufgaben": [
        {"t":"zuordnen","paare":[["🦔 Igel","Winterschlaf"],["🐿️ Eichhörnchen","Winterruhe"],["🐸 Frosch","Winterstarre"],["🐦 Schwalbe","fliegt in den Süden"]]},
        {"t":"zuordnen","paare":[["Stacheln","schützen vor Feinden"],["Nase","findet Futter"],["Laubhaufen","Platz für den Winterschlaf"],["Igelkinder","trinken Milch bei der Mutter"]]},
        {"t":"zuordnen","paare":[["🦔 Igel","Käfer und Würmer"],["🐿️ Eichhörnchen","Nüsse und Samen"],["🦌 Reh","Gras, Knospen und Rinde"],["🦊 Fuchs","Mäuse"]]}
      ]
    }
  ]
});
