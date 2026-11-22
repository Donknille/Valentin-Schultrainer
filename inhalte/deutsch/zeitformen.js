/* Deutsch Klasse 3: Zeitformen (Fachlehrplan Sachsen-Anhalt 2026: Verb, Grundform, gebeugte Form; Präsens, Präteritum, Perfekt, Futur) */
thema({
  "id": "deutsch-zeitformen",
  "fach": "deutsch",
  "titel": "Zeitformen",
  "untertitel": "Präsens, Präteritum, Perfekt, Futur",
  "emoji": "⏳",
  "datum": "2026-11-22",
  "uebungen": [
    {
      "id": "praeteritum",
      "titel": "Gestern war es so",
      "emoji": "⏪",
      "beschreibung": "Präteritum bilden",
      "runde": 8,
      "frage": "Setze das Verb im Präteritum ein.",
      "merke": "Das <b>Präteritum</b> brauchst du, wenn du etwas Vergangenes erzählst oder schreibst. Viele Verben bekommen ein <b>-te</b>: ich spiele → ich spiel<b>te</b>. Manche ändern sich ganz: ich gehe → ich <b>ging</b>, ich laufe → ich <b>lief</b>.",
      "aufgaben": [
        {"t":"luecke","text":"Heute spiele ich. Gestern ___ ich.","a":["spielte"]},
        {"t":"luecke","text":"Heute lacht das Baby. Gestern ___ das Baby.","a":["lachte"]},
        {"t":"luecke","text":"Heute malen wir. Gestern ___ wir.","a":["malten"]},
        {"t":"luecke","text":"Heute laufe ich. Gestern ___ ich.","a":["lief"]},
        {"t":"luecke","text":"Heute gehe ich zur Schule. Gestern ___ ich zur Schule.","a":["ging"]},
        {"t":"luecke","text":"Heute singt Mia. Gestern ___ Mia.","a":["sang"]},
        {"t":"luecke","text":"Heute schreiben wir. Gestern ___ wir.","a":["schrieben"]},
        {"t":"luecke","text":"Heute isst Tim einen Apfel. Gestern ___ Tim einen Apfel.","a":["aß"],"tipp":"essen → er aß (mit ß, weil das a lang ist)."},
        {"t":"luecke","text":"Heute fährt Oma Rad. Gestern ___ Oma Rad.","a":["fuhr"]},
        {"t":"luecke","text":"Heute sehe ich einen Fuchs. Gestern ___ ich einen Fuchs.","a":["sah"]},
        {"t":"luecke","text":"Heute kommt Papa spät. Gestern ___ Papa spät.","a":["kam"]},
        {"t":"luecke","text":"Heute bin ich müde. Gestern ___ ich müde.","a":["war"]},
        {"t":"luecke","text":"Heute habe ich Hunger. Gestern ___ ich Hunger.","a":["hatte"]},
        {"t":"luecke","text":"Heute trinkt der Hund Wasser. Gestern ___ der Hund Wasser.","a":["trank"]},
        {"t":"luecke","text":"Heute springt die Katze. Gestern ___ die Katze.","a":["sprang"]},
        {"t":"luecke","text":"Heute liest Lena. Gestern ___ Lena.","a":["las"]}
      ]
    },
    {
      "id": "welche-zeitform",
      "titel": "Welche Zeitform?",
      "emoji": "🕰️",
      "beschreibung": "Gegenwart, Vergangenheit, Zukunft",
      "runde": 8,
      "frage": "In welcher Zeitform steht der Satz?",
      "merke": "<b>Präsens</b> (Gegenwart): ich spiele. <b>Präteritum</b> (Vergangenheit): ich spielte. <b>Perfekt</b> (Vergangenheit, oft beim Erzählen): ich habe gespielt. <b>Futur</b> (Zukunft): ich werde spielen.",
      "aufgaben": [
        {"t":"auswahl","text":"Ich spiele Fußball.","opts":["Präsens","Präteritum","Perfekt","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Ich spielte Fußball.","opts":["Präteritum","Präsens","Perfekt","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Ich habe Fußball gespielt.","opts":["Perfekt","Präsens","Präteritum","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Ich werde Fußball spielen.","opts":["Futur","Präsens","Präteritum","Perfekt"],"sortiert":true},
        {"t":"auswahl","text":"Wir sind ins Kino gegangen.","opts":["Perfekt","Präsens","Präteritum","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Der Hund bellte laut.","opts":["Präteritum","Präsens","Perfekt","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Morgen wird es regnen.","opts":["Futur","Präsens","Präteritum","Perfekt"],"sortiert":true},
        {"t":"auswahl","text":"Lea liest ein Buch.","opts":["Präsens","Präteritum","Perfekt","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Tom hat sein Zimmer aufgeräumt.","opts":["Perfekt","Präsens","Präteritum","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Die Kinder lachten.","opts":["Präteritum","Präsens","Perfekt","Futur"],"sortiert":true},
        {"t":"auswahl","text":"Du wirst staunen.","opts":["Futur","Präsens","Präteritum","Perfekt"],"sortiert":true},
        {"t":"auswahl","text":"Mama kocht Suppe.","opts":["Präsens","Präteritum","Perfekt","Futur"],"sortiert":true}
      ]
    },
    {
      "id": "perfekt",
      "titel": "Perfekt bilden",
      "emoji": "🔗",
      "beschreibung": "haben oder sein + ge…",
      "runde": 8,
      "frage": "Setze das Verb im Perfekt ein.",
      "merke": "Das <b>Perfekt</b> hat zwei Teile: eine Form von <b>haben</b> oder <b>sein</b> und das Verb mit <b>ge-</b>: ich <b>habe</b> ge<b>malt</b>, wir <b>sind</b> ge<b>gangen</b>. Bei Bewegungen (gehen, laufen, fahren, fliegen, kommen) nimmst du meist <b>sein</b>.",
      "aufgaben": [
        {"t":"luecke","hinweis":"Verb: malen","text":"Ich ___ ein Bild ___.","a":["habe","gemalt"]},
        {"t":"luecke","hinweis":"Verb: gehen","text":"Wir ___ nach Hause ___.","a":["sind","gegangen"]},
        {"t":"luecke","hinweis":"Verb: essen","text":"Lisa ___ ein Eis ___.","a":["hat","gegessen"]},
        {"t":"luecke","hinweis":"Verb: kommen","text":"Der Zug ___ pünktlich ___.","a":["ist","gekommen"]},
        {"t":"luecke","hinweis":"Verb: singen","text":"Du ___ das Lied schön ___.","a":["hast","gesungen"]},
        {"t":"luecke","hinweis":"Verb: laufen","text":"Ihr ___ sehr schnell ___.","a":["seid","gelaufen"]},
        {"t":"luecke","hinweis":"Verb: schießen","text":"Tim ___ ein Tor ___.","a":["hat","geschossen"]},
        {"t":"luecke","hinweis":"Verb: fliegen","text":"Die Vögel ___ in den Süden ___.","a":["sind","geflogen"]},
        {"t":"luecke","hinweis":"Verb: schreiben","text":"Ich ___ einen Brief ___.","a":["habe","geschrieben"]},
        {"t":"luecke","hinweis":"Verb: waschen","text":"Papa ___ das Auto ___.","a":["hat","gewaschen"]},
        {"t":"luecke","hinweis":"Verb: spielen","text":"Wir ___ im Garten ___.","a":["haben","gespielt"]},
        {"t":"luecke","hinweis":"Verb: fahren","text":"Oma ___ mit dem Bus ___.","a":["ist","gefahren"]}
      ]
    },
    {
      "id": "verbpaare",
      "titel": "Verb-Paare",
      "emoji": "🧩",
      "beschreibung": "Grundform und Präteritum",
      "runde": 3,
      "frage": "Was gehört zusammen? Tippe links und dann rechts.",
      "merke": "Diese Verben verändern sich im Präteritum stark. Am besten übst du sie als Paare: gehen und ging, sehen und sah.",
      "aufgaben": [
        {"t":"zuordnen","paare":[["gehen","ging"],["laufen","lief"],["sehen","sah"],["kommen","kam"]]},
        {"t":"zuordnen","paare":[["essen","aß"],["fahren","fuhr"],["sein","war"],["haben","hatte"]]},
        {"t":"zuordnen","paare":[["singen","sang"],["trinken","trank"],["schreiben","schrieb"],["lesen","las"]]},
        {"t":"zuordnen","paare":[["finden","fand"],["geben","gab"],["nehmen","nahm"],["rufen","rief"]]}
      ]
    }
  ]
});
