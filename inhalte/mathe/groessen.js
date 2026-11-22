/* Mathe Klasse 3: Größen (Fachlehrplan Sachsen-Anhalt 2026, Größen und Messen: mm, cm, dm, m, km; g, kg, t; s, min, h; ml, l; Geld; Brüche 1/4, 1/2, 3/4) */
thema({
  "id": "mathe-groessen",
  "fach": "mathe",
  "titel": "Größen",
  "untertitel": "Längen, Gewichte, Zeit, Liter und Geld",
  "emoji": "📏",
  "datum": "2026-11-22",
  "uebungen": [
    {
      "id": "laengen",
      "titel": "Längen",
      "emoji": "📏",
      "beschreibung": "mm, cm, dm, m, km",
      "runde": 8,
      "frage": "Rechne um.",
      "merke": "1 cm = 10 mm · 1 dm = 10 cm · 1 m = 100 cm · 1 km = 1000 m. Ein halber Meter sind 50 cm. 2 km 500 m = 2500 m = 2,5 km.",
      "aufgaben": [
        {"t":"luecke","text":"1 m = ___ cm","a":["100"]},
        {"t":"luecke","text":"1 km = ___ m","a":["1000"]},
        {"t":"luecke","text":"1 dm = ___ cm","a":["10"]},
        {"t":"luecke","text":"1 cm = ___ mm","a":["10"]},
        {"t":"luecke","text":"3 m = ___ cm","a":["300"]},
        {"t":"luecke","text":"7 dm = ___ cm","a":["70"]},
        {"t":"luecke","text":"ein halber Meter = ___ cm","a":["50"]},
        {"t":"luecke","text":"4 cm 5 mm = ___ mm","a":["45"]},
        {"t":"luecke","text":"250 cm = ___ m ___ cm","a":["2","50"]},
        {"t":"luecke","text":"2 km 500 m = ___ m","a":["2500"]},
        {"t":"luecke","text":"1,5 km = ___ m","a":["1500"],"tipp":"1,5 km sind 1 km und ein halber km: 1000 m + 500 m."},
        {"t":"auswahl","frage":"Was passt?","text":"Ein Bleistift ist ungefähr ___ lang.","opts":["17 cm","17 m","17 mm"]},
        {"t":"auswahl","frage":"Was passt?","text":"Eine Zimmertür ist ungefähr ___ hoch.","opts":["2 m","2 cm","20 m"]},
        {"t":"auswahl","frage":"Was passt?","text":"Ein Marienkäfer ist ungefähr ___ lang.","opts":["7 mm","7 cm","7 dm"]},
        {"t":"auswahl","frage":"Was passt?","text":"Der Schulweg ist ___ lang.","opts":["1 km","1 cm","1 mm"]}
      ]
    },
    {
      "id": "gewichte",
      "titel": "Gewichte",
      "emoji": "⚖️",
      "beschreibung": "g, kg, t",
      "runde": 8,
      "frage": "Rechne um.",
      "merke": "1 kg = 1000 g · 1 t = 1000 kg. Ein halbes Kilogramm sind 500 g. Eine Packung Mehl wiegt 1 kg, eine Tafel Schokolade 100 g.",
      "aufgaben": [
        {"t":"luecke","text":"1 kg = ___ g","a":["1000"]},
        {"t":"luecke","text":"1 t = ___ kg","a":["1000"]},
        {"t":"luecke","text":"ein halbes Kilogramm = ___ g","a":["500"]},
        {"t":"luecke","text":"2 kg = ___ g","a":["2000"]},
        {"t":"luecke","text":"3 kg 250 g = ___ g","a":["3250"]},
        {"t":"luecke","text":"1500 g = ___ kg ___ g","a":["1","500"]},
        {"t":"luecke","text":"ein Viertelkilogramm = ___ g","a":["250"]},
        {"t":"auswahl","frage":"Was passt?","text":"Eine Packung Mehl wiegt ___.","opts":["1 kg","1 g","1 t"]},
        {"t":"auswahl","frage":"Was passt?","text":"Ein Auto wiegt ungefähr ___.","opts":["1 t","1 kg","10 g"]},
        {"t":"auswahl","frage":"Was passt?","text":"Eine Tafel Schokolade wiegt ___.","opts":["100 g","100 kg","1 t"]},
        {"t":"auswahl","frage":"Was passt?","text":"Ein Apfel wiegt ungefähr ___.","opts":["150 g","150 kg","15 t"]}
      ]
    },
    {
      "id": "zeit",
      "titel": "Zeit",
      "emoji": "⏰",
      "beschreibung": "Sekunden, Minuten, Stunden",
      "runde": 8,
      "frage": "Ergänze.",
      "merke": "1 min = 60 s · 1 h = 60 min · 1 Tag = 24 h · 1 Jahr = 365 Tage. Eine Viertelstunde = 15 min, eine halbe Stunde = 30 min, eine Dreiviertelstunde = 45 min.",
      "aufgaben": [
        {"t":"luecke","text":"1 h = ___ min","a":["60"]},
        {"t":"luecke","text":"1 min = ___ s","a":["60"]},
        {"t":"luecke","text":"1 Tag = ___ h","a":["24"]},
        {"t":"luecke","text":"1 Jahr = ___ Tage","a":["365"]},
        {"t":"luecke","text":"eine halbe Stunde = ___ min","a":["30"]},
        {"t":"luecke","text":"eine Viertelstunde = ___ min","a":["15"]},
        {"t":"luecke","text":"eine Dreiviertelstunde = ___ min","a":["45"]},
        {"t":"luecke","text":"2 h = ___ min","a":["120"]},
        {"t":"luecke","text":"90 min = ___ h ___ min","a":["1","30"]},
        {"t":"luecke","bild":"🎬","text":"Der Film beginnt um 15:30 Uhr und dauert 90 Minuten. Er endet um ___ Uhr.","a":[["17:00","17.00","17"]],"tipp":"15:30 Uhr + 60 min = 16:30 Uhr, + 30 min = 17:00 Uhr."},
        {"t":"luecke","bild":"🏫","text":"Die Schule beginnt um 7:45 Uhr. Die erste Stunde dauert 45 Minuten. Sie endet um ___ Uhr.","a":[["8:30","8.30","08:30"]],"tipp":"7:45 Uhr + 15 min = 8:00 Uhr, + 30 min = 8:30 Uhr."},
        {"t":"luecke","text":"Von 9:15 Uhr bis 10:00 Uhr sind es ___ Minuten.","a":["45"]}
      ]
    },
    {
      "id": "liter-geld",
      "titel": "Liter und Geld",
      "emoji": "🥛",
      "beschreibung": "ml, l, Euro und Cent",
      "runde": 8,
      "frage": "Rechne um.",
      "merke": "1 l = 1000 ml. Ein halber Liter = 500 ml, ein Viertelliter = 250 ml. 1 € = 100 ct. 3,50 € = 3 € 50 ct = 350 ct.",
      "aufgaben": [
        {"t":"luecke","text":"1 l = ___ ml","a":["1000"]},
        {"t":"luecke","text":"ein halber Liter = ___ ml","a":["500"]},
        {"t":"luecke","text":"ein Viertelliter = ___ ml","a":["250"]},
        {"t":"luecke","text":"2 l = ___ ml","a":["2000"]},
        {"t":"auswahl","frage":"Was passt?","text":"In einen Eimer passen ungefähr ___.","opts":["10 l","10 ml","100 l"]},
        {"t":"auswahl","frage":"Was passt?","text":"In einen Teelöffel passen ungefähr ___.","opts":["5 ml","5 l","50 l"]},
        {"t":"luecke","text":"1 € = ___ ct","a":["100"]},
        {"t":"luecke","text":"3,50 € = ___ ct","a":["350"]},
        {"t":"luecke","text":"2 € 5 ct = ___ ct","a":["205"],"tipp":"2 € = 200 ct, dazu 5 ct: 205 ct."},
        {"t":"luecke","text":"750 ct = ___ €","a":[["7,50","7,5"]]},
        {"t":"luecke","bild":"💶","text":"Du bezahlst 2,40 € mit einem 5-€-Schein. Du bekommst ___ € zurück.","a":[["2,60","2,6"]],"tipp":"Von 2,40 € bis 3 € sind es 60 ct, von 3 € bis 5 € sind es 2 €. Zusammen 2,60 €."},
        {"t":"luecke","bild":"🍦","text":"Ein Eis kostet 1,50 €. Wie viel kosten 3 Eis? ___ €","a":[["4,50","4,5"]],"tipp":"3 · 1 € = 3 € und 3 · 50 ct = 1,50 €. Zusammen 4,50 €."}
      ]
    }
  ]
});
