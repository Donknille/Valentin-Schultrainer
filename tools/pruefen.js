#!/usr/bin/env node
/*
  Prüft alle Inhalte, bevor sie veröffentlicht werden.
  Aufruf:  node tools/pruefen.js
  Ergebnis: Fehler (rot, Abbruch mit Code 1) und Hinweise (gelb, nur zur Info).
*/
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const ROOT=path.join(__dirname,'..');
const fehler=[],hinweise=[];
const F=(w,m)=>fehler.push(w+': '+m),H=(w,m)=>hinweise.push(w+': '+m);

// 1) Syntax der App-Dateien
for(const f of ['app.js','inhalte/katalog.js']){
  try{new vm.Script(fs.readFileSync(path.join(ROOT,f),'utf8'),{filename:f})}catch(e){F(f,'Syntaxfehler: '+e.message)}
}

// 2) Katalog laden
const ctx={window:{}};vm.createContext(ctx);
try{vm.runInContext(fs.readFileSync(path.join(ROOT,'inhalte/katalog.js'),'utf8'),ctx)}catch(e){F('katalog.js',e.message)}
const K=ctx.window.KATALOG||{faecher:[],themen:[]};
const faecher=new Set((K.faecher||[]).map(f=>f.id));
for(const f of K.faecher||[])for(const k of ['id','titel','emoji','farbe','dunkel','hell'])if(!f[k])F('katalog.js','Fach '+(f.id||'?')+' ohne "'+k+'"');

// 3) Themen-Dateien laden
const themen=[];
const dateien=K.themen||[];
if(new Set(dateien).size!==dateien.length)F('katalog.js','Eine Datei steht doppelt in "themen".');
for(const datei of dateien){
  const p=path.join(ROOT,'inhalte',datei);
  if(!fs.existsSync(p)){F(datei,'Datei nicht gefunden');continue}
  const src=fs.readFileSync(p,'utf8');
  const gef=[];const c={thema:d=>gef.push(d)};vm.createContext(c);
  try{vm.runInContext(src,c,{filename:datei})}catch(e){F(datei,'Syntaxfehler: '+e.message);continue}
  if(gef.length!==1){F(datei,'muss genau einmal thema({...}) aufrufen (gefunden: '+gef.length+')');continue}
  gef[0]._datei=datei;themen.push(gef[0]);
}
// nicht eingetragene Dateien finden
(function scan(dir){for(const n of fs.readdirSync(dir)){const p=path.join(dir,n);if(fs.statSync(p).isDirectory())scan(p);else if(n.endsWith('.js')&&n!=='katalog.js'){const rel=path.relative(path.join(ROOT,'inhalte'),p).split(path.sep).join('/');if(!dateien.includes(rel))H(rel,'liegt im Ordner, steht aber nicht im Katalog (wird nicht angezeigt)')}}})(path.join(ROOT,'inhalte'));

// 4) Inhalte prüfen
const TYPEN=['luecke','auswahl','rf','gross','nomen','zusammen','diktat','zuordnen','noten'];
const ids=new Set();let anzahl=0;
const istStr=x=>typeof x==='string'&&x.trim().length>0;
const NOTE=/^[cdefgah][12]$/;
for(const th of themen){
  const w=th._datei;
  if(!istStr(th.id))F(w,'"id" fehlt');else if(ids.has(th.id))F(w,'id "'+th.id+'" gibt es schon');else ids.add(th.id);
  if(th.id&&!/^[a-z0-9-]+$/.test(th.id))F(w,'id nur aus a-z, 0-9 und - bilden');
  if(!faecher.has(th.fach))F(w,'unbekanntes Fach "'+th.fach+'" (erlaubt: '+[...faecher].join(', ')+')');
  if(!istStr(th.titel))F(w,'"titel" fehlt');
  if(th.datum&&!/^\d{4}-\d{2}-\d{2}$/.test(th.datum))F(w,'"datum" im Format JJJJ-MM-TT angeben');
  if(!Array.isArray(th.uebungen)||!th.uebungen.length){F(w,'keine "uebungen"');continue}
  const uids=new Set();
  th.uebungen.forEach((u,ui)=>{
    const wu=w+' › '+(u.id||'uebung '+(ui+1));
    if(!istStr(u.id))F(wu,'"id" fehlt');else if(uids.has(u.id))F(wu,'id doppelt');else uids.add(u.id);
    if(u.id&&!/^[a-z0-9-]+$/.test(u.id))F(wu,'id nur aus a-z, 0-9 und - bilden');
    if(!istStr(u.titel))F(wu,'"titel" fehlt');
    if(u.runde!==undefined&&!(Number.isInteger(u.runde)&&u.runde>0))F(wu,'"runde" muss eine ganze Zahl > 0 sein');
    if(u.wortspeicher!==undefined&&!(Array.isArray(u.wortspeicher)&&u.wortspeicher.every(istStr)))F(wu,'"wortspeicher" muss eine Liste von Wörtern sein');
    if(!Array.isArray(u.aufgaben)||!u.aufgaben.length){F(wu,'keine "aufgaben"');return}
    const gesehen=new Set();
    u.aufgaben.forEach((a,ai)=>{
      anzahl++;
      const wa=wu+' › Aufgabe '+(ai+1);
      const js=JSON.stringify(a);if(gesehen.has(js))H(wa,'ist doppelt');gesehen.add(js);
      if(!a||!TYPEN.includes(a.t)){F(wa,'unbekannter Typ "'+(a&&a.t)+'" (erlaubt: '+TYPEN.join(', ')+')');return}
      if(/—/.test(js))H(wa,'enthält einen langen Gedankenstrich (—)');
      switch(a.t){
        case 'luecke':{
          if(!istStr(a.text)){F(wa,'"text" fehlt');break}
          const n=(a.text.match(/___/g)||[]).length;
          if(!n)F(wa,'"text" braucht mindestens eine Lücke ___');
          if(!Array.isArray(a.a))F(wa,'"a" muss eine Liste sein, z. B. ["hilft"]');
          else{
            if(a.a.length!==n)F(wa,n+' Lücke(n), aber '+a.a.length+' Antwort(en)');
            a.a.forEach(x=>{const al=Array.isArray(x)?x:[x];if(!al.length||!al.every(y=>typeof y==='string'&&y.trim()))F(wa,'Antworten müssen Texte sein (auch Zahlen in Anführungszeichen: "24")')});
          }
          break}
        case 'auswahl':
          if(a.text!==undefined&&typeof a.text!=='string')F(wa,'"text" muss ein Text sein');
          if(!istStr(a.text)&&!istStr(a.frage))F(wa,'"text" oder "frage" angeben');
          if(!Array.isArray(a.opts)||a.opts.length<2||!a.opts.every(istStr))F(wa,'"opts" braucht mindestens 2 Antworten (die erste ist richtig)');
          else if(new Set(a.opts).size!==a.opts.length)F(wa,'"opts" enthält eine Antwort doppelt');
          if(a.text&&(a.text.match(/___/g)||[]).length>1)F(wa,'bei "auswahl" höchstens eine Lücke ___');
          break;
        case 'rf':
          if(!istStr(a.text))F(wa,'"text" fehlt');
          if(typeof a.a!=='boolean')F(wa,'"a" muss true (stimmt) oder false (stimmt nicht) sein');
          break;
        case 'gross':
          if(!istStr(a.text))F(wa,'"text" fehlt');
          else{
            if(/[A-Za-zÄÖÜäöüß]-[A-Za-zÄÖÜäöüß]/.test(a.text))F(wa,'keine Wörter mit Bindestrich verwenden (z. B. T-Shirt)');
            if(!/^[A-ZÄÖÜ]/.test(a.text))F(wa,'Satz muss groß anfangen');
            if(!/[.!?]$/.test(a.text.trim()))H(wa,'Satz endet ohne Satzzeichen');
          }
          break;
        case 'nomen':
          if(!Array.isArray(a.woerter)||a.woerter.length<2)F(wa,'"woerter" braucht mindestens 2 Wörter');
          else{
            if(!(Number.isInteger(a.a)&&a.a>=0&&a.a<a.woerter.length))F(wa,'"a" muss die Position des Nomens sein (0 = erstes Wort)');
            if(a.woerter.some(x=>x!==x.toLowerCase()))F(wa,'alle "woerter" klein schreiben');
          }
          break;
        case 'zusammen':
          for(const k of ['teil1','teil2'])if(!Array.isArray(a[k])||a[k].length<2||!istStr(a[k][0])||!istStr(a[k][1]))F(wa,'"'+k+'" muss so aussehen: ["die","Hand","✋"]');
          if(!['der','die','das'].includes(a.artikel))F(wa,'"artikel" muss der, die oder das sein');
          if(!istStr(a.wort))F(wa,'"wort" fehlt');
          else if(Array.isArray(a.teil2)&&a.artikel!==a.teil2[0])H(wa,'Artikel ('+a.artikel+') passt nicht zum letzten Wort ('+a.teil2[0]+')');
          break;
        case 'diktat':
          if(!istStr(a.text))F(wa,'"text" fehlt');
          else if(!/[.!?]$/.test(a.text.trim()))H(wa,'Diktatsatz endet ohne Satzzeichen');
          break;
        case 'zuordnen':
          if(!Array.isArray(a.paare)||a.paare.length<2||a.paare.length>6)F(wa,'"paare" braucht 2 bis 6 Paare');
          else{
            if(!a.paare.every(p=>Array.isArray(p)&&p.length===2&&istStr(p[0])&&istStr(p[1])))F(wa,'jedes Paar so: ["links","rechts"]');
            else if(new Set(a.paare.map(p=>p[1])).size!==a.paare.length||new Set(a.paare.map(p=>p[0])).size!==a.paare.length)F(wa,'jede Seite darf jeden Eintrag nur einmal haben');
          }
          break;
        case 'noten':
          if(!Array.isArray(a.noten)||!a.noten.length||!a.noten.every(n=>NOTE.test(n)))F(wa,'"noten" z. B. ["g1"] oder ["a1","f1","f1","e1"] (c1 bis a2)');
          else{
            const bad=a.noten.filter(n=>{const i='cdefgah'.indexOf(n[0])+(+n[1]-1)*7;return i<0||i>12});
            if(bad.length)F(wa,'Noten außerhalb von c1 bis a2: '+bad.join(', '));
            if(a.noten.length>1&&a.wort&&a.wort.toLowerCase()!==a.noten.map(n=>n[0]).join(''))F(wa,'"wort" passt nicht zu den Noten ('+a.noten.map(n=>n[0]).join('')+')');
          }
          break;
      }
    });
  });
}

const rot=s=>'\x1b[31m'+s+'\x1b[0m',gelb=s=>'\x1b[33m'+s+'\x1b[0m',gruen=s=>'\x1b[32m'+s+'\x1b[0m';
hinweise.forEach(h=>console.log(gelb('Hinweis: ')+h));
fehler.forEach(f=>console.log(rot('Fehler:  ')+f));
console.log((fehler.length?rot('✗'):gruen('✓'))+' '+themen.length+' Themen, '+anzahl+' Aufgaben geprüft. '+fehler.length+' Fehler, '+hinweise.length+' Hinweise.');
process.exit(fehler.length?1:0);
