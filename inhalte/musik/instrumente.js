/* Musik: Instrumente (Beispielthema, kann ersetzt oder ergänzt werden) */
thema({
  "id": "musik-instrumente",
  "fach": "musik",
  "titel": "Instrumente",
  "untertitel": "Wie klingt was und warum?",
  "emoji": "🎻",
  "datum": "2026-11-19",
  "uebungen": [
    {
      "id": "gruppen",
      "titel": "Instrumenten-Gruppen",
      "emoji": "🎼",
      "beschreibung": "Streichen, blasen, schlagen",
      "runde": 6,
      "frage": "Zu welcher Gruppe gehört das Instrument?",
      "merke": "<b>Streichinstrumente</b> spielt man mit einem Bogen. <b>Blasinstrumente</b> spielt man mit dem Mund. <b>Schlaginstrumente</b> spielt man mit Händen oder Schlägeln. <b>Zupfinstrumente</b> spielt man mit den Fingern an den Saiten. <b>Tasteninstrumente</b> haben Tasten.",
      "aufgaben": [
        {"t":"auswahl","bild":"🎻","text":"die Geige","opts":["Streichinstrument","Blasinstrument","Schlaginstrument"]},
        {"t":"auswahl","bild":"🎺","text":"die Trompete","opts":["Blasinstrument","Streichinstrument","Tasteninstrument"]},
        {"t":"auswahl","bild":"🥁","text":"die Trommel","opts":["Schlaginstrument","Zupfinstrument","Blasinstrument"]},
        {"t":"auswahl","bild":"🎸","text":"die Gitarre","opts":["Zupfinstrument","Schlaginstrument","Blasinstrument"]},
        {"t":"auswahl","bild":"🎹","text":"das Klavier","opts":["Tasteninstrument","Streichinstrument","Blasinstrument"]},
        {"t":"auswahl","bild":"🔺","text":"der Triangel","opts":["Schlaginstrument","Tasteninstrument","Zupfinstrument"],"tipp":"Den Triangel schlägt man mit einem kleinen Metallstab."},
        {"t":"auswahl","bild":"🎶","text":"die Blockflöte","opts":["Blasinstrument","Zupfinstrument","Streichinstrument"]},
        {"t":"auswahl","bild":"🎶","text":"das Cello","opts":["Streichinstrument","Blasinstrument","Schlaginstrument"],"tipp":"Das Cello ist wie eine große Geige. Man spielt es im Sitzen mit einem Bogen."}
      ]
    },
    {
      "id": "wie-spielt-man",
      "titel": "Wie spielt man das?",
      "emoji": "👐",
      "beschreibung": "Instrument und Spielweise verbinden",
      "runde": 2,
      "frage": "Was gehört zusammen? Tippe links und dann rechts.",
      "merke": "Jedes Instrument wird anders zum Klingen gebracht: Man streicht, bläst, schlägt, zupft oder drückt Tasten.",
      "aufgaben": [
        {"t":"zuordnen","paare":[["🎻 Geige","mit dem Bogen streichen"],["🎺 Trompete","hineinblasen"],["🥁 Trommel","mit Schlägeln schlagen"],["🎸 Gitarre","die Saiten zupfen"]]},
        {"t":"zuordnen","paare":[["🎹 Klavier","Tasten drücken"],["🎶 Blockflöte","hineinblasen und Löcher zuhalten"],["🔺 Triangel","mit einem Metallstab anschlagen"],["🎻 Cello","im Sitzen mit dem Bogen streichen"]]}
      ]
    },
    {
      "id": "stimmt-das",
      "titel": "Stimmt das?",
      "emoji": "🤔",
      "beschreibung": "Richtig oder falsch?",
      "runde": 6,
      "frage": "Stimmt der Satz?",
      "merke": "Denk daran, wie das Instrument gespielt wird. Dann weißt du auch, zu welcher Gruppe es gehört.",
      "aufgaben": [
        {"t":"rf","text":"Die Geige ist ein Streichinstrument.","a":true},
        {"t":"rf","text":"Die Trompete hat Saiten.","a":false,"tipp":"In die Trompete bläst man hinein. Sie ist ein Blasinstrument."},
        {"t":"rf","text":"Das Klavier hat schwarze und weiße Tasten.","a":true},
        {"t":"rf","text":"Die Gitarre spielt man mit einem Bogen.","a":false,"tipp":"Die Saiten der Gitarre zupft man mit den Fingern."},
        {"t":"rf","text":"Große Instrumente klingen meistens tiefer als kleine.","a":true,"tipp":"Das Cello klingt tiefer als die Geige."},
        {"t":"rf","text":"Die Trommel ist ein Blasinstrument.","a":false,"tipp":"Die Trommel ist ein Schlaginstrument."},
        {"t":"rf","text":"Bei der Blockflöte hält man Löcher mit den Fingern zu.","a":true}
      ]
    }
  ]
});
