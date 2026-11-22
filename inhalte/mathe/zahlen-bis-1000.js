/* Mathe Klasse 3: Zahlen bis 1000 (Fachlehrplan Sachsen-Anhalt 2026, Zahl und Operation: Stellenwerte, Nachbarhunderter, Vergleichen, Runden) */
thema({
  "id": "mathe-zahlen-bis-1000",
  "fach": "mathe",
  "titel": "Zahlen bis 1000",
  "untertitel": "Stellenwerte, Nachbarn, Vergleichen, Runden",
  "emoji": "💯",
  "datum": "2026-11-22",
  "uebungen": [
    {
      "id": "stellenwerte",
      "titel": "Hunderter, Zehner, Einer",
      "emoji": "🧱",
      "beschreibung": "347 = 3 H 4 Z 7 E",
      "runde": 8,
      "frage": "Ergänze.",
      "merke": "<b>H</b> = Hunderter, <b>Z</b> = Zehner, <b>E</b> = Einer. 347 = 3 H 4 Z 7 E = 300 + 40 + 7. Fehlt eine Stelle, schreibst du eine <b>0</b>: 7 H 5 E = 705.",
      "aufgaben": [
        {"t":"luecke","text":"347 = ___ H ___ Z ___ E","a":["3","4","7"]},
        {"t":"luecke","text":"609 = ___ H ___ Z ___ E","a":["6","0","9"]},
        {"t":"luecke","text":"850 = ___ H ___ Z ___ E","a":["8","5","0"]},
        {"t":"luecke","text":"5 H 2 Z 8 E = ___","a":["528"]},
        {"t":"luecke","text":"8 H 0 Z 4 E = ___","a":["804"]},
        {"t":"luecke","text":"7 H 5 E = ___","a":["705"],"tipp":"Es gibt keine Zehner. Dafür schreibst du eine 0: 705."},
        {"t":"luecke","text":"9 H 1 Z = ___","a":["910"],"tipp":"Es gibt keine Einer. Dafür schreibst du eine 0: 910."},
        {"t":"luecke","text":"471 = 400 + ___ + 1","a":["70"]},
        {"t":"luecke","text":"836 = ___ + 30 + 6","a":["800"]},
        {"t":"luecke","text":"592 = 500 + 90 + ___","a":["2"]},
        {"t":"luecke","text":"300 + 40 + 5 = ___","a":["345"]},
        {"t":"luecke","text":"600 + 7 = ___","a":["607"]},
        {"t":"auswahl","frage":"Welchen Wert hat die markierte Ziffer?","text":"7<b>2</b>6","opts":["20","2","200"],"tipp":"Die 2 steht an der Zehnerstelle. Sie ist 2 Zehner = 20 wert."},
        {"t":"auswahl","frage":"Welchen Wert hat die markierte Ziffer?","text":"<b>5</b>12","opts":["500","50","5"],"tipp":"Die 5 steht an der Hunderterstelle: 500."},
        {"t":"auswahl","frage":"Welchen Wert hat die markierte Ziffer?","text":"38<b>6</b>","opts":["6","60","600"],"tipp":"Die 6 steht an der Einerstelle: 6."}
      ]
    },
    {
      "id": "nachbarn",
      "titel": "Nachbarzahlen und Zahlenfolgen",
      "emoji": "🏘️",
      "beschreibung": "Vorgänger, Nachfolger, Nachbarhunderter",
      "runde": 8,
      "frage": "Ergänze die fehlenden Zahlen.",
      "merke": "Der <b>Vorgänger</b> ist 1 kleiner, der <b>Nachfolger</b> ist 1 größer. <b>Nachbarzehner</b> von 347: 340 und 350. <b>Nachbarhunderter</b> von 347: 300 und 400.",
      "aufgaben": [
        {"t":"luecke","text":"Vorgänger von 400: ___","a":["399"]},
        {"t":"luecke","text":"Nachfolger von 699: ___","a":["700"]},
        {"t":"luecke","text":"Vorgänger von 1000: ___","a":["999"]},
        {"t":"luecke","text":"Nachfolger von 509: ___","a":["510"]},
        {"t":"luecke","text":"Nachbarzehner: ___ &lt; 347 &lt; ___","a":["340","350"]},
        {"t":"luecke","text":"Nachbarzehner: ___ &lt; 915 &lt; ___","a":["910","920"]},
        {"t":"luecke","text":"Nachbarhunderter: ___ &lt; 347 &lt; ___","a":["300","400"]},
        {"t":"luecke","text":"Nachbarhunderter: ___ &lt; 682 &lt; ___","a":["600","700"]},
        {"t":"luecke","text":"Nachbarhunderter: ___ &lt; 59 &lt; ___","a":["0","100"]},
        {"t":"luecke","text":"250, 300, 350, ___, ___","a":["400","450"],"tipp":"Es geht immer 50 weiter."},
        {"t":"luecke","text":"990, 980, 970, ___, ___","a":["960","950"],"tipp":"Es geht immer 10 zurück."},
        {"t":"luecke","text":"125, 150, 175, ___","a":["200"],"tipp":"Es geht immer 25 weiter."},
        {"t":"luecke","text":"700, 600, 500, ___","a":["400"]},
        {"t":"luecke","text":"498, 499, ___, 501","a":["500"]}
      ]
    },
    {
      "id": "vergleichen",
      "titel": "Größer, kleiner, gleich",
      "emoji": "🐊",
      "beschreibung": "Das Krokodil frisst die größere Zahl",
      "runde": 8,
      "frage": "Setze <, > oder = ein.",
      "druckfrage": "Setze <, > oder = ein. Kreuze an.",
      "merke": "Vergleiche zuerst die <b>Hunderter</b>. Sind sie gleich, vergleiche die Zehner, dann die Einer. Das offene Maul zeigt immer zur größeren Zahl: 452 &gt; 425.",
      "aufgaben": [
        {"t":"auswahl","text":"425 ___ 452","opts":["<",">","="],"sortiert":true},
        {"t":"auswahl","text":"708 ___ 699","opts":[">","<","="],"sortiert":true},
        {"t":"auswahl","text":"300 + 50 ___ 350","opts":["=","<",">"],"sortiert":true},
        {"t":"auswahl","text":"999 ___ 990","opts":[">","<","="],"sortiert":true},
        {"t":"auswahl","text":"610 ___ 601","opts":[">","<","="],"sortiert":true},
        {"t":"auswahl","text":"4 H 3 E ___ 430","opts":["<",">","="],"sortiert":true,"tipp":"4 H 3 E sind 403. Das ist weniger als 430."},
        {"t":"auswahl","text":"500 ___ 50 + 450","opts":["=","<",">"],"sortiert":true},
        {"t":"auswahl","text":"872 ___ 827","opts":[">","<","="],"sortiert":true},
        {"t":"auswahl","text":"199 ___ 201","opts":["<",">","="],"sortiert":true},
        {"t":"auswahl","text":"1000 ___ 999","opts":[">","<","="],"sortiert":true},
        {"t":"rf","text":"Die größte dreistellige Zahl ist 999.","a":true},
        {"t":"rf","text":"Die kleinste dreistellige Zahl ist 101.","a":false,"tipp":"Die kleinste dreistellige Zahl ist 100."}
      ]
    },
    {
      "id": "runden",
      "titel": "Runden",
      "emoji": "🎯",
      "beschreibung": "347 ≈ 350",
      "runde": 8,
      "frage": "Runde die Zahl.",
      "merke": "Schau auf die Ziffer <b>rechts</b> von der Stelle, auf die du rundest. Bei <b>0, 1, 2, 3, 4</b> rundest du ab. Bei <b>5, 6, 7, 8, 9</b> rundest du auf. Das Zeichen ≈ heißt „ist ungefähr“.",
      "aufgaben": [
        {"t":"luecke","text":"Auf Zehner: 347 ≈ ___","a":["350"]},
        {"t":"luecke","text":"Auf Zehner: 342 ≈ ___","a":["340"]},
        {"t":"luecke","text":"Auf Zehner: 685 ≈ ___","a":["690"],"tipp":"Bei einer 5 wird aufgerundet."},
        {"t":"luecke","text":"Auf Zehner: 703 ≈ ___","a":["700"]},
        {"t":"luecke","text":"Auf Zehner: 998 ≈ ___","a":["1000"],"tipp":"998 liegt zwischen 990 und 1000. Die 8 rundet auf: 1000."},
        {"t":"luecke","text":"Auf Hunderter: 347 ≈ ___","a":["300"],"tipp":"Schau auf die Zehnerstelle: 4. Also abrunden."},
        {"t":"luecke","text":"Auf Hunderter: 650 ≈ ___","a":["700"]},
        {"t":"luecke","text":"Auf Hunderter: 849 ≈ ___","a":["800"]},
        {"t":"luecke","text":"Auf Hunderter: 451 ≈ ___","a":["500"]},
        {"t":"luecke","text":"Auf Hunderter: 92 ≈ ___","a":["100"]},
        {"t":"luecke","text":"Auf Hunderter: 960 ≈ ___","a":["1000"]}
      ]
    }
  ]
});
