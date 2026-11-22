/* Deutsch Klasse 3: Wortarten und Sätze (Fachlehrplan Sachsen-Anhalt 2026: Nomen, Verb, Adjektiv, Artikel, Personalpronomen; Subjekt, Satzkern, Satzglied, Umstellprobe; wörtliche Rede, Redezeichen) */
thema({
  "id": "deutsch-wortarten-saetze",
  "fach": "deutsch",
  "titel": "Wortarten und Sätze",
  "untertitel": "Pronomen, Subjekt, Satzkern, wörtliche Rede",
  "emoji": "🔍",
  "datum": "2026-11-22",
  "uebungen": [
    {
      "id": "wortarten",
      "titel": "Welche Wortart?",
      "emoji": "🏷️",
      "beschreibung": "Nomen, Verb, Adjektiv, Artikel, Pronomen",
      "runde": 8,
      "frage": "Welche Wortart ist das dick gedruckte Wort?",
      "merke": "<b>Nomen</b>: Menschen, Tiere, Dinge, Gefühle (der Hund, die Freude). <b>Verb</b>: was jemand tut (lachen). <b>Adjektiv</b>: wie etwas ist (rot, klein). <b>Artikel</b>: der, die, das, ein, eine. <b>Pronomen</b>: ich, du, er, sie, es, wir, ihr, sie.",
      "aufgaben": [
        {"t":"auswahl","text":"Der <b>Hund</b> bellt.","opts":["Nomen","Verb","Adjektiv","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Die Katze <b>schläft</b>.","opts":["Verb","Nomen","Adjektiv","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Das Auto ist <b>rot</b>.","opts":["Adjektiv","Nomen","Verb","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"<b>Er</b> spielt Fußball.","opts":["Pronomen","Nomen","Verb","Adjektiv","Artikel"],"sortiert":true},
        {"t":"auswahl","text":"<b>Die</b> Sonne scheint.","opts":["Artikel","Nomen","Verb","Adjektiv","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Wir <b>lachen</b> viel.","opts":["Verb","Nomen","Adjektiv","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Der <b>kleine</b> Igel frisst.","opts":["Adjektiv","Nomen","Verb","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Mein <b>Freund</b> heißt Ole.","opts":["Nomen","Verb","Adjektiv","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"<b>Sie</b> malt ein Bild.","opts":["Pronomen","Nomen","Verb","Adjektiv","Artikel"],"sortiert":true},
        {"t":"auswahl","text":"Ich sehe <b>einen</b> Vogel.","opts":["Artikel","Nomen","Verb","Adjektiv","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Das Eis ist <b>kalt</b>.","opts":["Adjektiv","Nomen","Verb","Artikel","Pronomen"],"sortiert":true},
        {"t":"auswahl","text":"Die <b>Freude</b> ist groß.","opts":["Nomen","Verb","Adjektiv","Artikel","Pronomen"],"sortiert":true,"tipp":"Auch Gefühle sind Nomen. Probe: die Freude."}
      ]
    },
    {
      "id": "pronomen",
      "titel": "Pronomen einsetzen",
      "emoji": "👆",
      "beschreibung": "er, sie, es, wir …",
      "runde": 8,
      "frage": "Setze das passende Pronomen ein.",
      "merke": "<b>Pronomen</b> ersetzen Nomen, damit sich Wörter nicht wiederholen: <b>Lena</b> spielt Geige. <b>Sie</b> übt jeden Tag. Am Satzanfang schreibst du das Pronomen groß.",
      "aufgaben": [
        {"t":"luecke","text":"Lena spielt Geige. ___ übt jeden Tag.","a":["Sie"]},
        {"t":"luecke","text":"Der Hund bellt. ___ hat Hunger.","a":["Er"]},
        {"t":"luecke","text":"Das Pferd galoppiert. ___ ist schnell.","a":["Es"]},
        {"t":"luecke","text":"Tom und ich bauen eine Burg. ___ brauchen viel Sand.","a":["Wir"]},
        {"t":"luecke","text":"Die Kinder rennen. ___ sind fröhlich.","a":["Sie"]},
        {"t":"luecke","text":"Opa liest Zeitung. ___ trägt eine Brille.","a":["Er"]},
        {"t":"luecke","text":"Die Blume blüht. ___ ist gelb.","a":["Sie"]},
        {"t":"luecke","text":"Das Baby schläft. ___ ist müde.","a":["Es"]},
        {"t":"luecke","text":"Lisa und du seid schnell. ___ gewinnt bestimmt.","a":["Ihr"]},
        {"t":"luecke","text":"Der Mond scheint hell. ___ ist rund.","a":["Er"]}
      ]
    },
    {
      "id": "satzglieder",
      "titel": "Subjekt und Satzkern",
      "emoji": "🧱",
      "beschreibung": "Wer oder was? Was tut er?",
      "runde": 8,
      "frage": "Wähle die richtige Antwort.",
      "merke": "Das <b>Subjekt</b> findest du mit der Frage <b>Wer oder was?</b> Der <b>Satzkern</b> ist das gebeugte Verb. Im Aussagesatz steht er an <b>zweiter Stelle</b>. Mit der <b>Umstellprobe</b> findest du die Satzglieder: Wörter, die beim Umstellen zusammenbleiben, bilden ein Satzglied.",
      "aufgaben": [
        {"t":"auswahl","frage":"Wer oder was? Finde das Subjekt.","text":"Die Katze jagt eine Maus.","opts":["Die Katze","jagt","eine Maus"]},
        {"t":"auswahl","frage":"Wer oder was? Finde das Subjekt.","text":"Der alte Mann füttert die Enten.","opts":["Der alte Mann","füttert","die Enten"]},
        {"t":"auswahl","frage":"Wer oder was? Finde das Subjekt.","text":"Am Morgen backt Mama Brötchen.","opts":["Mama","Am Morgen","Brötchen"]},
        {"t":"auswahl","frage":"Wer oder was? Finde das Subjekt.","text":"Im Wald wohnt ein Fuchs.","opts":["ein Fuchs","Im Wald","wohnt"]},
        {"t":"auswahl","frage":"Finde den Satzkern (das gebeugte Verb).","text":"Die Kinder spielen im Garten.","opts":["spielen","Die Kinder","im Garten"]},
        {"t":"auswahl","frage":"Finde den Satzkern (das gebeugte Verb).","text":"Morgen fahren wir an die Ostsee.","opts":["fahren","wir","Morgen"]},
        {"t":"auswahl","frage":"Finde den Satzkern (das gebeugte Verb).","text":"Der Ball fliegt über den Zaun.","opts":["fliegt","Der Ball","über den Zaun"]},
        {"t":"auswahl","frage":"Finde den Satzkern (das gebeugte Verb).","text":"Meine Schwester liest ein Buch.","opts":["liest","Meine Schwester","ein Buch"]},
        {"t":"rf","frage":"Stimmt das?","text":"Mit der Umstellprobe findet man die Satzglieder.","a":true},
        {"t":"rf","frage":"Stimmt das?","text":"Im Aussagesatz steht der Satzkern an zweiter Stelle.","a":true},
        {"t":"rf","frage":"Stimmt das?","text":"Ein Satzglied besteht immer nur aus einem Wort.","a":false,"tipp":"Ein Satzglied kann auch aus mehreren Wörtern bestehen: der alte Mann."}
      ]
    },
    {
      "id": "woertliche-rede",
      "titel": "Wörtliche Rede",
      "emoji": "💬",
      "beschreibung": "Redezeichen richtig setzen",
      "runde": 6,
      "frage": "Welcher Satz ist richtig geschrieben?",
      "merke": "Was jemand sagt, steht zwischen den <b>Redezeichen</b> „ … “. Steht der Begleitsatz <b>vorne</b>, kommt ein <b>Doppelpunkt</b>: Mama ruft: „Komm her!“ Steht er <b>hinten</b>, kommt ein <b>Komma</b>: „Komm her!“, ruft Mama. Ein Punkt am Ende des Gesagten fällt dann weg. Frage- und Ausrufezeichen bleiben.",
      "aufgaben": [
        {"t":"auswahl","opts":["Mama ruft: „Komm schnell her!“","Mama ruft „Komm schnell her!“","Mama ruft: Komm schnell her!"]},
        {"t":"auswahl","opts":["„Ich habe Hunger“, sagt Ben.","„Ich habe Hunger.“, sagt Ben.","„Ich habe Hunger“ sagt Ben."],"tipp":"Der Punkt fällt weg, wenn der Begleitsatz hinten steht. Dafür kommt ein Komma."},
        {"t":"auswahl","opts":["Lisa fragt: „Kommst du mit?“","Lisa fragt: „Kommst du mit“?","Lisa fragt, „Kommst du mit?“"]},
        {"t":"auswahl","opts":["„Wo ist mein Ball?“, fragt Tim.","„Wo ist mein Ball“, fragt Tim.","„Wo ist mein Ball?“ fragt Tim."],"tipp":"Das Fragezeichen bleibt. Danach kommt trotzdem ein Komma."},
        {"t":"auswahl","opts":["Oma sagt: „Heute backen wir Kekse.“","Oma sagt: „heute backen wir Kekse.“","Oma sagt „Heute backen wir Kekse“."],"tipp":"Nach dem Doppelpunkt schreibt man das erste Wort der wörtlichen Rede groß."},
        {"t":"auswahl","opts":["„Pass auf!“, schreit Paul.","„Pass auf“! schreit Paul.","„Pass auf!“ schreit Paul."]},
        {"t":"auswahl","opts":["Der Lehrer sagt: „Packt eure Hefte aus.“","Der Lehrer sagt „Packt eure Hefte aus.“","Der Lehrer sagt: „Packt eure Hefte aus“"]}
      ]
    }
  ]
});
