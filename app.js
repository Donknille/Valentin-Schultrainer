/* Valentins Schultrainer: App-Logik. Inhalte stehen in inhalte/ (siehe INHALTE.md). */
(function(){
'use strict';

const K=Object.assign({kind:'',appTitel:'Schultrainer',faecher:[],themen:[]},window.KATALOG||{});
const THEMEN=[];const FEHLER=[];
window.thema=function(def){THEMEN.push(def)};
window.addEventListener('error',e=>{if(e&&e.filename&&/\/inhalte\//.test(e.filename))FEHLER.push(e.filename.split('/inhalte/')[1]+' (Zeile '+e.lineno+'): '+e.message)});

/* ============ Speicher (nur in diesem Browser) ============ */
const PFX='vs_';
const store={
  get(k,d){try{const v=localStorage.getItem(PFX+k);return v===null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem(PFX+k,JSON.stringify(v))}catch(e){}}
};
const S={stars:store.get('stars',0),best:store.get('best',{}),wrong:store.get('wrong',[]),paper:store.get('paper',false),welt:store.get('welt','eule')};
function save(){store.set('stars',S.stars);store.set('best',S.best);store.set('wrong',S.wrong);store.set('paper',S.paper);store.set('welt',S.welt)}

/* ============ Helfer ============ */
const app=document.getElementById('app');
function el(tag,cls,html){const e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function norm(s){return String(s).replace(/[’`´]/g,"'").replace(/\s+/g,' ').trim()}
function strip(s){return String(s).replace(/<[^>]*>/g,'')}
function shuffle(a,rnd){rnd=rnd||Math.random;a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pick(a,n,rnd){return shuffle(a,rnd).slice(0,n)}
function hash(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)}
function rng(seed){let a=seed>>>0;return function(){a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return ((t^(t>>>14))>>>0)/4294967296}}
function noAuto(inp){inp.setAttribute('autocapitalize','off');inp.setAttribute('autocomplete','off');inp.setAttribute('autocorrect','off');inp.setAttribute('spellcheck','false')}
function starStr(n){return '⭐'.repeat(n)+'☆'.repeat(Math.max(0,3-n))}
function cap(w){return w.charAt(0).toUpperCase()+w.slice(1)}
function sortDe(a){return a.slice().sort((x,y)=>x.localeCompare(y,'de'))}
const praise=()=>{const l=welt().lob;return l[Math.floor(Math.random()*l.length)]};
function fillSolution(p,ans){let i=0;return p.replace(/___/g,()=>'<b>'+esc(ans[i++]||'')+'</b>')}
const OWL=document.querySelector('#logo svg').outerHTML;
/* ============ Welten (Designs zum Umschalten) ============ */
const SVG_MONSTER='<svg class="owl" viewBox="0 0 64 64" aria-hidden="true">'+
 '<path d="M14 22 Q8 8 20 12 L24 20 Z" fill="#4FA8E8"/><path d="M50 22 Q56 8 44 12 L40 20 Z" fill="#4FA8E8"/>'+
 '<ellipse cx="32" cy="38" rx="22" ry="21" fill="#6BBEF5"/><ellipse cx="32" cy="44" rx="13" ry="11" fill="#E4F4FF"/>'+
 '<circle cx="23" cy="33" r="6.5" fill="#fff"/><circle cx="41" cy="33" r="6.5" fill="#fff"/>'+
 '<circle cx="24" cy="34" r="3.8" fill="#1E2340"/><circle cx="40" cy="34" r="3.8" fill="#1E2340"/>'+
 '<circle cx="25.3" cy="32.6" r="1.3" fill="#fff"/><circle cx="41.3" cy="32.6" r="1.3" fill="#fff"/>'+
 '<ellipse cx="16" cy="41" rx="3.4" ry="2.2" fill="#FF9BB3"/><ellipse cx="48" cy="41" rx="3.4" ry="2.2" fill="#FF9BB3"/>'+
 '<path d="M27 42 Q32 47 37 42" stroke="#1E2340" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M29.5 43.6 L31 46 L32.5 43.9 Z" fill="#fff"/>'+
 '<path d="M32 9 l2.4 5 5.4.6-4 3.7 1.1 5.3L32 21l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="#FFD43B"/></svg>';
const SVG_ROBO='<svg class="owl" viewBox="0 0 64 64" aria-hidden="true">'+
 '<line x1="32" y1="5" x2="32" y2="14" stroke="#9AA6D6" stroke-width="2.5"/><circle cx="32" cy="5" r="3.2" fill="#FF4D6D"/>'+
 '<rect x="12" y="13" width="40" height="28" rx="10" fill="#D7DEFF"/><rect x="17" y="19" width="30" height="14" rx="7" fill="#10163A"/>'+
 '<circle cx="25" cy="26" r="3.6" fill="#33E1FF"/><circle cx="39" cy="26" r="3.6" fill="#33E1FF"/>'+
 '<rect x="9" y="22" width="4" height="10" rx="2" fill="#9AA6D6"/><rect x="51" y="22" width="4" height="10" rx="2" fill="#9AA6D6"/>'+
 '<rect x="20" y="43" width="24" height="16" rx="6" fill="#B9C4F5"/><circle cx="32" cy="51" r="4" fill="#33E1FF"/>'+
 '<path d="M27 36 Q32 39 37 36" stroke="#10163A" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
const SVG_BALL='<svg class="owl" viewBox="0 0 64 64" aria-hidden="true"><defs><clipPath id="ballclip"><circle cx="32" cy="33" r="23"/></clipPath></defs>'+
 '<circle cx="32" cy="33" r="23" fill="#fff"/><g clip-path="url(#ballclip)" fill="#1C2B22"><path d="M32.0 26.0 L38.7 30.8 L36.1 38.7 L27.9 38.7 L25.3 30.8Z M39.9 22.1 L37.2 13.7 L44.3 8.5 L51.5 13.7 L48.8 22.1Z M44.8 37.2 L52.0 32.0 L59.1 37.2 L56.4 45.6 L47.6 45.6Z M32.0 46.5 L39.1 51.7 L36.4 60.1 L27.6 60.1 L24.9 51.7Z M19.2 37.2 L16.4 45.6 L7.6 45.6 L4.9 37.2 L12.0 32.0Z M24.1 22.1 L15.2 22.1 L12.5 13.7 L19.7 8.5 L26.8 13.7Z"/></g>'+
 '<path d="M32.0 26.0 L32.0 17.0 M38.7 30.8 L47.2 28.1 M36.1 38.7 L41.4 45.9 M27.9 38.7 L22.6 45.9 M25.3 30.8 L16.8 28.1" stroke="#1C2B22" stroke-width="1.6"/><circle cx="32" cy="33" r="23" fill="none" stroke="#1C2B22" stroke-width="2.2"/>'+
 '<path d="M14 55 Q32 63 50 55 L52 60 Q32 68 12 60Z" fill="#1D9053"/><path d="M22 58.6 Q32 61.5 42 58.6" stroke="#fff" stroke-width="2" fill="none"/></svg>';

const WELTEN={
 eule:{id:'eule',name:'Eulen-Schule',beschreibung:'Gemütlich und bunt',icon:'🦉',maskottchen:null,
  gruss:['Was möchtest du heute üben?','Schön, dass du da bist!','Bereit für neue Sterne?','Heute wirst du wieder ein bisschen schlauer!','Such dir ein Fach aus!'],
  lob:['Super!','Klasse gemacht!','Spitze!','Richtig! 🎉','Toll!','Sehr gut!','Genau so!','Stark! 💪','Wunderbar!'],
  ende:['Super gemacht{n}! 🏆','Richtig gut!','Gut geübt, weiter so!','Übung macht den Meister! 💪'],
  sticker:['🐶','🐱','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐧','🐔','🦄','🐙','🐢','🦋','🐞','🐬','🦒','🐘','🦓','🦔','🦉','🐳','🦕','🦖','🐉'],
  stickerTitel:'Meine Sticker',stickerNeu:'Neuer Sticker für dein Album!',stickerWort:'Sticker',
  raenge:['Eulen-Küken','Lese-Eule','Kluge Eule','Weise Eule','Meister-Eule','Super-Eule'],
  konfetti:['⭐','🎉','✨','🌟','🎈'],faecher:{}},
 monster:{id:'monster',name:'Monster-Trainer',beschreibung:'Sammle Monster und werde Champion',icon:'🐉',maskottchen:SVG_MONSTER,
  gruss:['Ein wildes Quiz erscheint!','Bereit für dein nächstes Training?','Welche Arena nimmst du heute?','Hier warten neue Monster auf dich!','Trainiere und werde Champion!'],
  lob:['Volltreffer!','Sehr effektiv!','Kritischer Treffer!','Stark trainiert!','Level-Up! ⬆️','Super! ⚡','Spitze, Trainer!'],
  ende:['Volltreffer{n}! Sehr effektiv! 🏆','Starker Kampf!','Gut trainiert, weiter so!','Jeder Champion fängt klein an! 💪'],
  sticker:['🐉','🐲','🦖','🦕','🐊','🦎','🐍','🐢','🐙','🦑','🦀','🐡','🐠','🦈','🐬','🐳','🦋','🐝','🐞','🦂','🦇','🦉','🦅','🦜','🦚','🦩','🐺','🦊','🦄','🦁'],
  stickerTitel:'Meine Monster-Sammlung',stickerNeu:'Neues Monster gefangen!',stickerWort:'Monster',
  raenge:['Neuling','Entdecker','Trainer','Profi-Trainer','Arena-Meister','Champion'],
  konfetti:['⚡','⭐','💥','✨','🌟'],
  faecher:{deutsch:{emoji:'🔥',label:'Feuer-Arena',farbe:'#E2482F',dunkel:'#A32B17',hell:'#FFE1DA'},mathe:{emoji:'💧',label:'Wasser-Arena',farbe:'#2F7FE0',dunkel:'#1C55A3',hell:'#DCEBFF'},
   sachkunde:{emoji:'🌿',label:'Pflanzen-Arena',farbe:'#2E9D4E',dunkel:'#1B6E34',hell:'#DDF5E3'},musik:{emoji:'⚡',label:'Elektro-Arena',farbe:'#F5C400',dunkel:'#B38D00',hell:'#FFF5C2',text:'#3A2E00'}}},
 weltraum:{id:'weltraum',name:'Sternen-Akademie',beschreibung:'Fliege durch die Galaxis',icon:'🚀',maskottchen:SVG_ROBO,
  gruss:['Willkommen an Bord, Pilot!','Alle Systeme bereit. Wohin fliegen wir?','Eine neue Mission wartet!','Die Galaxis braucht dein Wissen!','Startklar für den Hyperraum?'],
  lob:['Ziel erfasst! 🎯','Volltreffer!','Mission erfolgreich!','Sternenstark! ✨','Perfekte Landung!','Antrieb voll! 🚀','Genial, Pilot!'],
  ende:['Mission erfüllt{n}! 🚀','Starker Flug, Pilot!','Gut navigiert, weiter so!','Neuer Versuch, Kadett! 💪'],
  sticker:['🚀','🛸','🛰️','🪐','🌍','🌎','🌏','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','⭐','🌟','✨','☄️','🌠','🌌','👽','👾','🤖','🔭','🌞','💫','⚡','💎'],
  stickerTitel:'Meine Sternenkarte',stickerNeu:'Neuer Himmelskörper entdeckt!',stickerWort:'Entdeckung',
  raenge:['Kadett','Pilot','Navigator','Kapitän','Kommandant','Sternenritter'],
  konfetti:['⭐','✨','🌟','💫','🚀'],
  faecher:{deutsch:{emoji:'🪐',label:'Planet der Wörter',farbe:'#FF4D6D',dunkel:'#B3213E',hell:'#3A1626'},mathe:{emoji:'🌌',label:'Zahlen-Nebel',farbe:'#2FB8FF',dunkel:'#1478B3',hell:'#0F2A44'},
   sachkunde:{emoji:'🌍',label:'Forscher-Station',farbe:'#39D98A',dunkel:'#1F9A5C',hell:'#0F3326',text:'#062015'},musik:{emoji:'🛸',label:'Klang-Galaxie',farbe:'#B57BFF',dunkel:'#7B45C9',hell:'#2A1A4A'}}},
 fussball:{id:'fussball',name:'Grün-Weiß',beschreibung:'Fußball-Welt in Grün und Weiß',icon:'⚽',maskottchen:SVG_BALL,
  gruss:['Anpfiff! Was trainieren wir heute?','Auf geht\'s, Grün-Weiß!','Das Team wartet auf dich!','Heute schießen wir viele Tore!','Bereit fürs nächste Spiel?'],
  lob:['Toooor! ⚽','Volltreffer!','Traumpass!','Wie ein Profi!','Abgestaubt!','Klasse Schuss!','Sieg! 💚'],
  ende:['Toooor! Sieg für dich{n}! 🏆','Starkes Spiel!','Gut gekämpft, weiter so!','Nächstes Spiel gewinnen wir! 💪'],
  sticker:['⚽','🥅','🏆','🥇','🥈','🥉','🏅','👟','🧤','🎽','🧦','🟢','⚪','🐓','🐱','🐶','🐴','🐟','🚲','⛵','🏟️','📣','🥁','🎉','⭐','🌟','💚','🤍','🍀','🦁'],
  stickerTitel:'Mein Sammelalbum',stickerNeu:'Neues Sammelbild fürs Album!',stickerWort:'Sammelbild',
  raenge:['Bambini','Nachwuchs','Stammspieler','Kapitän','Torjäger','Legende'],
  konfetti:['⚽','💚','🤍','🏆','⭐'],
  faecher:{deutsch:{emoji:'📖',label:'Sturm',farbe:'#1D9053',dunkel:'#11663A',hell:'#DDF3E6'},mathe:{emoji:'🔢',label:'Mittelfeld',farbe:'#0E5C3A',dunkel:'#073D26',hell:'#D6EDE1'},
   sachkunde:{emoji:'🌍',label:'Abwehr',farbe:'#2F9E73',dunkel:'#1D6E4E',hell:'#DCF4EA'},musik:{emoji:'🎵',label:'Fankurve',farbe:'#EE7F1A',dunkel:'#AE5806',hell:'#FFEBD6'}}}
};
const RANG_STERNE=[0,20,50,100,200,400];
function welt(){return WELTEN[S.welt]||WELTEN.eule}
function maskottchen(){return welt().maskottchen||OWL}
function fachStil(f){return Object.assign({},f,welt().faecher[f.id]||{})}
function rang(){const w=welt();let i=0;RANG_STERNE.forEach((g,k)=>{if(S.stars>=g)i=k});return {name:w.raenge[i],stufe:i+1,naechster:RANG_STERNE[i+1]}}
function weltAnwenden(){
  document.documentElement.setAttribute('data-welt',welt().id);
  document.getElementById('logo').innerHTML=maskottchen();
}

const PRO_STICKER=10;
const PASTELL=['#DDF3EF','#E3ECFF','#FFE9D6','#F3E5FF','#FFF2C2','#FFE0EC','#E2F6D9','#FFE3D9'];
const STANDARD_FARBE={farbe:'#1F8A7D',dunkel:'#146458',hell:'#DDF3EF'};

/* ============ Inhalte laden und vorbereiten ============ */
const FACH={},TH={},KEYMAP={};
K.faecher.forEach(f=>FACH[f.id]=f);

function ladeThemen(done){
  const files=K.themen||[];let offen=files.length;
  if(!offen)return done();
  const fertig=()=>{if(--offen===0)done()};
  files.forEach(f=>{
    const s=document.createElement('script');s.async=false;s.src='inhalte/'+f;
    s.onload=fertig;s.onerror=()=>{FEHLER.push(f+': Datei nicht gefunden');fertig()};
    document.head.appendChild(s);
  });
}
function vorbereiten(){
  THEMEN.forEach(th=>{
    if(!th||!th.id||!Array.isArray(th.uebungen)){FEHLER.push('Ein Thema hat keine id oder keine uebungen.');return}
    if(TH[th.id]){FEHLER.push('Thema-id doppelt: '+th.id);return}
    if(!FACH[th.fach]){FEHLER.push(th.id+': unbekanntes Fach "'+th.fach+'"');return}
    th.uebungen=th.uebungen.filter(u=>u&&u.id&&Array.isArray(u.aufgaben));
    th.uebungen.forEach((u,ui)=>{
      Object.defineProperty(u,'_th',{value:th});
      u._key=th.id+'/'+u.id;
      u.aufgaben=u.aufgaben.filter(a=>{
        if(a&&RENDER[a.t]&&DRUCK[a.t])return true;
        FEHLER.push(u._key+': unbekannter Aufgabentyp "'+(a&&a.t)+'"');return false;
      });
      u.aufgaben.forEach(a=>{
        const key=u._key+'/'+hash(JSON.stringify(a));
        Object.defineProperty(a,'_u',{value:u});Object.defineProperty(a,'_key',{value:key});
        KEYMAP[key]=a;
      });
      if(!u.farbe)u.farbe=PASTELL[ui%PASTELL.length];
    });
    th.uebungen=th.uebungen.filter(u=>u.aufgaben.length);
    TH[th.id]=th;
  });
  S.wrong=S.wrong.filter(k=>KEYMAP[k]);save();
}
function themenVon(fid,archiv){
  return Object.values(TH).filter(t=>t.fach===fid&&(!!t.archiv===!!archiv)).sort((a,b)=>String(b.datum||'').localeCompare(String(a.datum||'')));
}
function istNeu(th){if(!th.datum)return false;const d=new Date(th.datum+'T00:00:00');return !isNaN(d)&&(Date.now()-d.getTime())<14*864e5&&Date.now()>=d.getTime()-864e5}
function themaSterne(th){let s=0;th.uebungen.forEach(u=>s+=S.best[u._key]||0);return {s,max:th.uebungen.length*3}}
function frageVon(it){return it.frage||it._u.frage||DEFAULT_FRAGE[it.t]||''}

/* ============ Farben, Kopfzeile, Navigation ============ */
function setFarbe(f){const c=f?fachStil(f):STANDARD_FARBE,r=document.documentElement.style;r.setProperty('--f',c.farbe);r.setProperty('--fd',c.dunkel);r.setProperty('--fl',c.hell);r.setProperty('--ft',c.text||'#fff')}
let zurueckZiel=null;
function kopf(titel,ziel){
  document.getElementById('htitel').textContent=titel;
  const b=document.getElementById('hback');b.classList.toggle('hidden',ziel===null);zurueckZiel=ziel;
  updateBadge();
}
function updateBadge(){document.getElementById('starbadge').textContent='⭐ '+S.stars}
let tiefe=0,eigeneNav=false;
function go(h){if(location.hash===h){render();return}eigeneNav=true;location.hash=h}
function zurueck(){if(tiefe>0)history.back();else location.replace(zurueckZiel||'#/')}
window.addEventListener('hashchange',()=>{if(eigeneNav)tiefe++;else tiefe=Math.max(0,tiefe-1);eigeneNav=false;render()});
document.getElementById('hback').onclick=zurueck;
document.getElementById('logo').onclick=()=>go('#/');
document.getElementById('weltbtn').onclick=()=>go('#/welt');

function render(){
  stopTTS();
  const [r,a]=location.hash.replace(/^#\/?/,'').split('/').map(x=>{try{return decodeURIComponent(x)}catch(e){return x}});
  app.innerHTML='';
  if(r==='fach'&&FACH[a])seiteFach(FACH[a]);
  else if(r==='thema'&&TH[a])seiteThema(TH[a]);
  else if(r==='drucken'&&TH[a])seiteDrucken(TH[a]);
  else if(r==='runde'&&R)(R.done?zeigeEnde():showItem());
  else if(r==='welt')seiteWelt();
  else seiteStart();
  window.scrollTo(0,0);
}

/* ============ Startseite ============ */
function seiteStart(){
  setFarbe(null);kopf(K.appTitel,null);
  const w=welt(),rg=rang();
  const h=el('div','hello');
  h.innerHTML=maskottchen()+'<div class="bubble"><b>Hallo'+(K.kind?' '+esc(K.kind):'')+'! 👋</b>'+w.gruss[Math.floor(Math.random()*w.gruss.length)]+
    '<span class="rang">🏅 '+esc(rg.name)+' · Stufe '+rg.stufe+(rg.naechster?' · nächste Stufe bei '+rg.naechster+' ⭐':'')+'</span></div>';
  app.appendChild(h);

  const g=el('div','faecher');
  K.faecher.forEach(f0=>{
    const f=fachStil(f0);const th=themenVon(f.id,false);
    const b=el('button','fach');b.style.setProperty('--c',f.farbe);b.style.setProperty('--cd',f.dunkel);if(f.text)b.style.setProperty('--ct',f.text);
    b.innerHTML=(th.some(istNeu)?'<span class="badge neu">NEU</span>':'')+'<span class="ic">'+f.emoji+'</span>'+(f.label?'<span class="lbl">'+esc(f.label)+'</span>':'')+'<span class="t">'+esc(f.titel)+'</span><span class="d">'+(th.length?th.length+(th.length===1?' Thema':' Themen'):'Bald geht es los')+'</span>';
    b.onclick=()=>go('#/fach/'+f.id);g.appendChild(b);
  });
  app.appendChild(g);

  const aktiv=Object.values(TH).filter(t=>!t.archiv);
  if(aktiv.length){
    const fs=K.faecher.map(fachStil);
    const bunt=el('button','wide bunt');bunt.style.background='linear-gradient(100deg,'+fs.map((f,i)=>f.farbe+' '+Math.round(i/(fs.length-1||1)*100)+'%').join(',')+')';bunt.style.color='#fff';
    bunt.innerHTML='<span class="em">🎲</span><span><span class="t">Bunte Runde</span><span class="d">Von allen Fächern etwas</span></span>';
    bunt.onclick=()=>startRound({art:'bunt'});app.appendChild(bunt);
  }
  if(S.wrong.length){
    const rep=el('button','wide wdh');
    rep.innerHTML='<span class="em">🔁</span><span><span class="t">Meine Übe-Aufgaben ('+S.wrong.length+')</span><span class="d">Aufgaben, die noch nicht geklappt haben</span></span>';
    rep.onclick=()=>startRound({art:'wdh'});app.appendChild(rep);
  }
  const wb=el('button','wide weltwahl');
  wb.innerHTML='<span class="em">🎨</span><span><span class="t">Welt wechseln</span><span class="d">Gerade: '+esc(w.name)+' '+w.icon+'</span></span>';
  wb.onclick=()=>go('#/welt');app.appendChild(wb);

  const ST=w.sticker,n=Math.min(ST.length,Math.floor(S.stars/PRO_STICKER));
  const st=el('div','sticker');
  const rest=PRO_STICKER-(S.stars%PRO_STICKER);
  st.innerHTML='<h2>🏅 '+esc(w.stickerTitel)+' ('+n+' von '+ST.length+')</h2><div class="row">'+ST.map((x,i)=>'<span class="'+(i<n?'':'zu')+'">'+x+'</span>').join('')+'</div>'+
    (n<ST.length?'<div class="bar"><i style="width:'+((S.stars%PRO_STICKER)/PRO_STICKER*100)+'%"></i></div><p>Noch '+rest+' ⭐ bis zum nächsten '+esc(w.stickerWort)+'!</p>':'<p>Du hast alles gesammelt! 🏆</p>');
  app.appendChild(st);

  const p=el('details','parents');
  p.innerHTML='<summary>👪 Für Eltern</summary>'+
   '<ul><li><b>Aufbau:</b> Fächer → Themen → Übungen. Jedes Thema hat eine <b>Gemischte Runde</b> und den Knopf <b>„Arbeitsblatt drucken“</b>.</li>'+
   '<li><b>Arbeitsblätter:</b> Übungen und Anzahl auswählen, dann drucken oder als PDF speichern. Mit „Neu mischen“ entsteht jedes Mal ein anderes Blatt, auf Wunsch mit Lösungsblatt. Drucken klappt am besten am Computer oder Handy, auf dem Kinder-Tablet meist nicht.</li>'+
   '<li><b>Diktat üben:</b> Die App liest die Sätze vor. Am besten im Modus <b>„Auf Papier“</b> schreiben lassen. Klappt das Vorlesen nicht, auf <b>„Satz zeigen“</b> tippen und selbst vorlesen.</li>'+
   '<li>Falsch gelöste Aufgaben landen bei <b>„Meine Übe-Aufgaben“</b> und verschwinden, wenn sie beim ersten Versuch klappen.</li>'+
   '<li>Alle '+PRO_STICKER+' Sterne gibt es ein neues Sammelbild. Sterne, Ränge und Sammlung gelten in allen Welten.</li>'+
   '<li>Die neuen Themen richten sich nach dem <b>Fachlehrplan Grundschule Sachsen-Anhalt</b> (Stand 01.08.2026, Schuljahrgänge 3/4).</li></ul>'+
   speicherInfo()+
   (FEHLER.length?'<p class="err"><b>Hinweis zu den Inhalten:</b><br>'+FEHLER.map(esc).join('<br>')+'</p>':'');
  p.appendChild(sicherungsBereich());
  const reset=el('button','linkbtn','Fortschritt zurücksetzen');
  reset.onclick=()=>{if(reset.dataset.c){S.stars=0;S.best={};S.wrong=[];save();render()}else{reset.dataset.c=1;reset.textContent='Wirklich alles zurücksetzen? Nochmal tippen'}};
  p.appendChild(reset);
  app.appendChild(p);
}

/* ============ Welt wählen ============ */
function seiteWelt(){
  setFarbe(null);kopf('Welt wählen','#/');
  app.appendChild(el('p','instr','Wie soll deine Lernwelt aussehen? Tippe eine Welt an!'));
  const g=el('div','welten');
  Object.values(WELTEN).forEach(w=>{
    const b=el('button','weltkarte'+(w.id===welt().id?' aktiv':''));b.dataset.vorschau=w.id;
    const farben=K.faecher.map(f=>Object.assign({},f,w.faecher[f.id]||{}).farbe);
    b.innerHTML='<span class="wk-bild">'+(w.maskottchen||OWL)+'</span><span class="wk-name">'+esc(w.name)+' '+w.icon+'</span><span class="wk-text">'+esc(w.beschreibung)+'</span>'+
      '<span class="wk-farben">'+farben.map(c=>'<i style="background:'+c+'"></i>').join('')+'</span>'+(w.id===welt().id?'<span class="badge">AKTIV</span>':'');
    b.onclick=()=>{S.welt=w.id;save();weltAnwenden();confetti();go('#/')};
    g.appendChild(b);
  });
  app.appendChild(g);
}

/* ============ Speichern und Sichern ============ */
let speicherOK=true;
try{localStorage.setItem(PFX+'test','1');localStorage.removeItem(PFX+'test')}catch(e){speicherOK=false}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
function speicherInfo(){
  return speicherOK?'<p>✅ Sterne, Sammlung und Übe-Aufgaben werden <b>auf diesem Gerät</b> gespeichert, ohne Konto und ohne Kosten. Mit dem Sicherungscode unten kannst du den Stand sichern oder auf ein anderes Gerät übertragen.</p>'
    :'<p class="err">⚠️ Dieser Browser erlaubt gerade kein Speichern. Auf dem Kinder-Tablet im Eltern-Dashboard bei „Fire Tablet Webbrowser“ die Option <b>„Cookies aktivieren“</b> einschalten.</p>';
}
function sicherungsCode(){
  const d={v:1,s:S.stars,b:S.best,w:S.wrong,p:S.paper,welt:S.welt,t:new Date().toISOString().slice(0,10)};
  return 'VS1-'+btoa(unescape(encodeURIComponent(JSON.stringify(d))));
}
function sicherungLaden(code){
  const c=String(code||'').trim().replace(/\s+/g,'');
  if(!/^VS1-/.test(c))throw new Error('Das ist kein Sicherungscode.');
  const d=JSON.parse(decodeURIComponent(escape(atob(c.slice(4)))));
  if(typeof d.s!=='number'||typeof d.b!=='object'||!Array.isArray(d.w))throw new Error('Der Code ist beschädigt.');
  S.stars=d.s;S.best=d.b;S.wrong=d.w.filter(k=>KEYMAP[k]);S.paper=!!d.p;if(WELTEN[d.welt])S.welt=d.welt;save();weltAnwenden();
}
function sicherungsBereich(){
  const box=el('div','sicherung');
  box.innerHTML='<h3>💾 Fortschritt sichern oder übertragen</h3>';
  const b1=el('button','btn sec','Sicherungscode anzeigen');const out=el('div','hidden');
  b1.onclick=()=>{
    out.classList.remove('hidden');out.innerHTML='';
    const ta=el('textarea','code');ta.readOnly=true;ta.value=sicherungsCode();out.appendChild(ta);
    const cp=el('button','btn','📋 Kopieren');cp.onclick=()=>{ta.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}
      if(navigator.clipboard)navigator.clipboard.writeText(ta.value).then(()=>cp.textContent='✓ Kopiert',()=>{cp.textContent=ok?'✓ Kopiert':'Bitte markieren und kopieren'});else cp.textContent=ok?'✓ Kopiert':'Bitte markieren und kopieren'};
    out.appendChild(cp);
    out.appendChild(el('p','tipp','Code z. B. in einer Notiz oder per Nachricht an dich selbst speichern. Er enthält '+S.stars+' Sterne vom '+new Date().toLocaleDateString('de-DE')+'.'));
  };
  const b2=el('button','btn sec','Code einfügen');const inp=el('div','hidden');
  b2.onclick=()=>{
    inp.classList.remove('hidden');inp.innerHTML='';
    const ta=el('textarea','code');ta.placeholder='Sicherungscode hier einfügen (beginnt mit VS1-)';inp.appendChild(ta);
    const ld=el('button','btn','Fortschritt laden');const msg=el('p','tipp');
    ld.onclick=()=>{try{if(!ld.dataset.c){ld.dataset.c=1;ld.textContent='Aktuellen Stand wirklich ersetzen? Nochmal tippen';return}sicherungLaden(ta.value);msg.textContent='✓ Geladen!';setTimeout(render,600)}catch(e){msg.textContent='⚠️ '+e.message;ld.dataset.c='';ld.textContent='Fortschritt laden'}};
    inp.append(ld,msg);
  };
  const row=el('div','btnrow');row.append(b1,b2);box.append(row,out,inp);
  return box;
}

/* ============ Fach-Seite ============ */
function themaKarte(th){
  const {s,max}=themaSterne(th);
  const b=el('button','thema');
  b.innerHTML='<span class="em">'+(th.emoji||'📘')+'</span><span class="tx"><span class="t">'+esc(th.titel)+(istNeu(th)?' <span class="badge">NEU</span>':'')+'</span>'+(th.untertitel?'<span class="d">'+esc(th.untertitel)+'</span>':'')+
    '<span class="pb"><i style="width:'+(max?s/max*100:0)+'%"></i></span></span><span class="st">⭐ '+s+'/'+max+'</span>';
  b.onclick=()=>go('#/thema/'+encodeURIComponent(th.id));
  return b;
}
function seiteFach(f){
  setFarbe(f);kopf(f.titel,'#/');
  const th=themenVon(f.id,false),alt=themenVon(f.id,true);
  const fs=fachStil(f);const k=el('div','fachkopf');k.innerHTML='<span class="ic">'+fs.emoji+'</span><div>'+(fs.label?'<span class="lbl">'+esc(fs.label)+'</span>':'')+'<h2>'+esc(f.titel)+'</h2><p>'+(th.length?'Such dir ein Thema aus!':'Hier ist noch alles leer.')+'</p></div>';
  app.appendChild(k);
  if(!th.length&&!alt.length){app.appendChild(el('div','leer',maskottchen()+'Hier kommen bald spannende Themen hin!'));return}
  const list=el('div','themen');th.forEach(t=>list.appendChild(themaKarte(t)));app.appendChild(list);
  if(alt.length){
    const d=el('details','archiv');d.innerHTML='<summary>📦 Ältere Themen ('+alt.length+')</summary>';
    const l2=el('div','themen');alt.forEach(t=>l2.appendChild(themaKarte(t)));d.appendChild(l2);app.appendChild(d);
  }
}

/* ============ Thema-Seite ============ */
function seiteThema(th){
  const f=FACH[th.fach];setFarbe(f);kopf(f.titel,'#/fach/'+f.id);
  const k=el('div','themakopf');k.innerHTML='<span class="em">'+(th.emoji||'📘')+'</span><div><h2>'+esc(th.titel)+'</h2>'+(th.untertitel?'<p>'+esc(th.untertitel)+'</p>':'')+'</div>';
  app.appendChild(k);
  const ak=el('div','aktionen');
  if(th.uebungen.length>1){
    const fs=fachStil(f);const mix=el('button','wide');mix.style.background=fs.farbe;mix.style.color=fs.text||'#fff';mix.style.boxShadow='0 4px 0 '+fs.dunkel;
    mix.innerHTML='<span class="em">🎲</span><span><span class="t">Gemischte Runde</span><span class="d">Von allem etwas</span></span>';
    mix.onclick=()=>startRound({art:'mix',th});ak.appendChild(mix);
  }
  const dr=el('button','wide');dr.style.background='var(--card)';dr.style.border='2px solid var(--f)';
  dr.innerHTML='<span class="em">🖨️</span><span><span class="t">Arbeitsblatt drucken</span><span class="d">Üben auf Papier</span></span>';
  dr.onclick=()=>go('#/drucken/'+encodeURIComponent(th.id));ak.appendChild(dr);
  app.appendChild(ak);
  const g=el('div','grid');
  th.uebungen.forEach(u=>{
    const b=el('button','mod');b.style.background=u.farbe;
    b.innerHTML='<span class="em">'+(u.emoji||'✏️')+'</span><span class="t">'+esc(u.titel)+'</span>'+(u.beschreibung?'<span class="d">'+esc(u.beschreibung)+'</span>':'')+'<span class="s">'+starStr(S.best[u._key]||0)+'</span>';
    b.onclick=()=>startRound({art:'uebung',u});g.appendChild(b);
  });
  app.appendChild(g);
}

/* ============ Runde ============ */
let R=null;
function startRound(spec){
  let list=[];
  if(spec.art==='uebung'){list=pick(spec.u.aufgaben,spec.u.runde||8)}
  else if(spec.art==='mix'){
    const us=shuffle(spec.th.uebungen);const pools=us.map(u=>shuffle(u.aufgaben));
    for(let r=0;list.length<8&&r<3;r++)pools.forEach(p=>{if(list.length<8&&p[r])list.push(p[r])});
    list=shuffle(list);
  }else if(spec.art==='bunt'){
    const us=[];Object.values(TH).filter(t=>!t.archiv).forEach(t=>t.uebungen.forEach(u=>us.push(u)));
    const chosen=new Set();
    for(let i=0;i<40&&list.length<8;i++){const u=us[Math.floor(Math.random()*us.length)];const a=u.aufgaben[Math.floor(Math.random()*u.aufgaben.length)];if(!chosen.has(a)){chosen.add(a);list.push(a)}}
  }else if(spec.art==='wdh'){
    list=pick(S.wrong,10).map(k=>KEYMAP[k]).filter(Boolean);
  }
  if(!list.length){S.wrong=S.wrong.filter(k=>KEYMAP[k]);save();return go('#/')}
  R={spec,list,i:0,points:0,done:false};
  go('#/runde');
}
function rundeTitel(){
  const s=R.spec;
  if(s.art==='mix')return 'Gemischte Runde';
  if(s.art==='bunt')return 'Bunte Runde';
  if(s.art==='wdh')return 'Übe-Aufgaben';
  return s.u.titel;
}
function showItem(){
  stopTTS();
  app.innerHTML='';
  const item=R.list[R.i];const u=item._u;const th=u._th;
  setFarbe(FACH[th.fach]);
  kopf(rundeTitel(),R.spec.art==='uebung'?'#/thema/'+encodeURIComponent(th.id):R.spec.art==='mix'?'#/thema/'+encodeURIComponent(R.spec.th.id):'#/');
  const top=el('div','topbar');
  const prog=el('div','prog');prog.innerHTML='<i style="width:'+(R.i/R.list.length*100)+'%"></i>';
  const cnt=el('div','count',(R.i+1)+'/'+R.list.length);
  top.append(prog,cnt);app.appendChild(top);

  const card=el('div','card');
  const quelle=R.spec.art==='uebung'?'':(R.spec.art==='mix'?'':FACH[th.fach].emoji+' '+esc(th.titel)+' · ');
  card.appendChild(el('div','modtitle',quelle+(u.emoji||'')+' '+esc(u.titel)));
  if(u.merke){
    const mk=el('details','merke');mk.open=(R.i===0&&R.spec.art==='uebung');
    mk.innerHTML='<summary>💡 Merke</summary><div style="margin-top:6px">'+u.merke+'</div>';card.appendChild(mk);
  }
  if(u.wortspeicher&&item.t==='luecke'){card.appendChild(el('div','wortspeicher',u.wortspeicher.map(w=>'<span>'+esc(w)+'</span>').join('')))}
  if(item.bild)card.appendChild(el('div','bild',esc(item.bild)));
  const body=el('div');card.appendChild(body);
  app.appendChild(card);
  const fb=el('div');app.appendChild(fb);

  const ctx={
    attempt:0,body,
    retry(tip){fb.innerHTML='';fb.appendChild(el('div','fb try','<h3>Fast! Versuch es nochmal 💪</h3>'+(tip?'<p>💡 '+tip+'</p>':'')))},
    finish(ok,solHtml,tip,extra){
      body.querySelectorAll('input,textarea,button:not(.keep)').forEach(x=>x.disabled=true);
      const cb=body.querySelector('.checkbtn');if(cb)cb.remove();
      R.points+=ok?(ctx.attempt===0?1:0.5):0;
      const key=item._key;
      if(ok&&ctx.attempt===0){S.wrong=S.wrong.filter(k=>k!==key)}
      else if(!S.wrong.includes(key)){S.wrong.push(key)}
      save();
      if(document.activeElement)document.activeElement.blur();
      fb.innerHTML='';
      const f=el('div','fb '+(ok?'good':'bad'));
      let h=ok?'<h3>'+praise()+'</h3>':'<h3>Nicht schlimm, so geht es richtig:</h3>';
      if(solHtml)h+='<p class="sol">'+solHtml+'</p>';
      if(extra)h+=extra;
      if(tip)h+='<p>💡 '+tip+'</p>';
      f.innerHTML=h;
      const nx=el('button','btn full'+(ok?'':' orange'),R.i+1<R.list.length?'Weiter →':'Fertig! 🏁');
      nx.style.marginTop='12px';nx.onclick=next;f.appendChild(nx);
      fb.appendChild(f);
      setTimeout(()=>f.scrollIntoView({behavior:'smooth',block:'nearest'}),60);
    }
  };
  RENDER[item.t](item,ctx);
  window.scrollTo(0,0);
}
function next(){R.i++;if(R.i<R.list.length)showItem();else endRound()}
function endRound(){
  const ratio=R.points/R.list.length;
  const stars=ratio>=0.9?3:ratio>=0.65?2:ratio>=0.35?1:0;
  const vorher=Math.floor(S.stars/PRO_STICKER);
  S.stars+=stars;
  if(R.spec.art==='uebung'){const k=R.spec.u._key;S.best[k]=Math.max(S.best[k]||0,stars)}
  save();
  const nachher=Math.floor(S.stars/PRO_STICKER);
  R.done=true;R.result={stars,pts:Math.round(R.points*10)/10,sticker:(nachher>vorher&&nachher<=welt().sticker.length)?nachher-1:null};
  zeigeEnde();
  if(stars===3||R.result.sticker!==null)confetti();
}
function zeigeEnde(){
  updateBadge();app.innerHTML='';
  const {stars,pts,sticker}=R.result;
  const c=el('div','card end');
  const w=welt();const msg=w.ende[3-stars].replace('{n}',K.kind?', '+esc(K.kind):'');
  c.innerHTML='<div class="big">'+starStr(stars)+'</div><h2>'+msg+'</h2><p>'+String(pts).replace('.',',')+' von '+R.list.length+' Punkten</p>'+
    (sticker!==null&&sticker!==undefined?'<div class="neuer"><span>'+w.sticker[sticker]+'</span>'+esc(w.stickerNeu)+'</div>':'')+
    (S.wrong.length?'<p>🔁 '+S.wrong.length+' Aufgabe'+(S.wrong.length>1?'n':'')+' zum Üben gemerkt.</p>':'');
  const row=el('div','btnrow');row.style.justifyContent='center';
  const again=el('button','btn','Nochmal');again.onclick=()=>startRound(R.spec);
  const h=el('button','btn sec','Zur Übersicht');h.onclick=zurueck;
  row.append(again,h);c.appendChild(row);app.appendChild(c);
  window.scrollTo(0,0);
}
function confetti(){
  const box=document.getElementById('confetti');box.innerHTML='';
  const em=welt().konfetti;
  for(let i=0;i<34;i++){const s=el('span','',em[i%em.length]);s.style.left=Math.random()*100+'vw';s.style.animationDuration=(1.8+Math.random()*1.8)+'s';s.style.animationDelay=(Math.random()*.6)+'s';box.appendChild(s)}
  setTimeout(()=>box.innerHTML='',4500);
}

/* ============ Sonderzeichen-Leiste ============ */
let lastInput=null;
document.addEventListener('focusin',e=>{if(e.target.matches('input.blank,textarea.dict'))lastInput=e.target});
function charBar(){
  const bar=el('div','chars');
  ['ä','ö','ü','ß','Ä','Ö','Ü'].forEach(ch=>{
    const b=el('button','',ch);b.type='button';
    b.addEventListener('mousedown',e=>e.preventDefault());
    b.addEventListener('touchstart',e=>{e.preventDefault();insertChar(ch)},{passive:false});
    b.addEventListener('click',()=>insertChar(ch));
    bar.appendChild(b)});
  return bar;
}
let lastIns=0;
function insertChar(ch){
  const now=Date.now();if(now-lastIns<250)return;lastIns=now;
  const t=lastInput&&document.body.contains(lastInput)&&!lastInput.disabled?lastInput:app.querySelector('input.blank:not([disabled]),textarea.dict:not([disabled])');
  if(!t)return;
  const s=t.selectionStart??t.value.length,e=t.selectionEnd??t.value.length;
  t.value=t.value.slice(0,s)+ch+t.value.slice(e);
  t.focus();try{t.setSelectionRange(s+1,s+1)}catch(_){}
  t.dispatchEvent(new Event('input'));
}

/* ============ Vorlesen ============ */
const TTS='speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;
let voice=null,voicesChecked=false;
function pickVoice(){
  if(!TTS)return;
  const vs=speechSynthesis.getVoices();
  if(vs.length)voicesChecked=true;
  const de=vs.filter(v=>/^de/i.test(v.lang));
  voice=de.find(v=>/de[-_]DE/i.test(v.lang)&&/(Anna|Petra|Helena|Katja|Marlene|Vicki|Google)/i.test(v.name))||de.find(v=>/de[-_]DE/i.test(v.lang))||de[0]||null;
}
if(TTS){pickVoice();try{speechSynthesis.addEventListener('voiceschanged',pickVoice)}catch(e){speechSynthesis.onvoiceschanged=pickVoice}}
function speak(text,rate){
  if(!TTS)return false;
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='de-DE';if(voice)u.voice=voice;u.rate=rate||0.85;u.pitch=1;speechSynthesis.speak(u);return true}catch(e){return false}
}
function stopTTS(){if(TTS)try{speechSynthesis.cancel()}catch(e){}}

/* ============ Notenlinien (Violinschlüssel) ============ */
const NOTEN='cdefgah';
function notePos(n){const m=/^([cdefgah])([12])$/.exec(n);if(!m)return null;return NOTEN.indexOf(m[1])+(+m[2]-1)*7-2} /* e1 = 0 (unterste Linie) */
function staffSVG(notes,cls){
  const step=44,x0=60,W=x0+notes.length*step+6;
  let s='<svg class="'+(cls||'staff')+'" viewBox="0 0 '+W+' 84" width="'+(W*1.6)+'" height="'+(84*1.6)+'" role="img" aria-label="Noten">';
  for(let i=0;i<5;i++){const y=20+i*10;s+='<line x1="2" x2="'+(W-2)+'" y1="'+y+'" y2="'+y+'" stroke="#2B2A33" stroke-width="1.3"/>'}
  s+='<g fill="none" stroke="#2B2A33" stroke-width="2.6" stroke-linecap="round" transform="translate(6 0)">'+
     '<path d="M20 52 C14 52 13 44 19 43 C26 42 29 51 24 56 C18 62 8 57 9 47 C10 37 22 32 25 22 C27 15 26 6 21 6 C16 6 14 14 16 22 L22 70 C23 77 15 78 13 73"/>'+
     '</g><circle cx="19.5" cy="72.5" r="3" fill="#2B2A33"/>';
  notes.forEach((n,k)=>{
    const p=notePos(n);if(p===null)return;
    const x=x0+k*step+step/2-10,y=60-p*5;
    for(let l=-2;l>=p;l-=2)s+='<line x1="'+(x-11)+'" x2="'+(x+11)+'" y1="'+(60-l*5)+'" y2="'+(60-l*5)+'" stroke="#2B2A33" stroke-width="1.3"/>';
    for(let l=10;l<=p;l+=2)s+='<line x1="'+(x-11)+'" x2="'+(x+11)+'" y1="'+(60-l*5)+'" y2="'+(60-l*5)+'" stroke="#2B2A33" stroke-width="1.3"/>';
    s+='<ellipse cx="'+x+'" cy="'+y+'" rx="6.3" ry="4.6" transform="rotate(-20 '+x+' '+y+')" fill="#2B2A33"/>';
    if(p>=4)s+='<line x1="'+(x-5.8)+'" x2="'+(x-5.8)+'" y1="'+(y+1)+'" y2="'+(y+31)+'" stroke="#2B2A33" stroke-width="1.6"/>';
    else s+='<line x1="'+(x+5.8)+'" x2="'+(x+5.8)+'" y1="'+(y-1)+'" y2="'+(y-31)+'" stroke="#2B2A33" stroke-width="1.6"/>';
  });
  return s+'</svg>';
}

/* ============ Aufgabentypen (Bildschirm) ============ */
const DEFAULT_FRAGE={
  luecke:'Fülle die Lücke aus.',auswahl:'Wähle die richtige Antwort.',rf:'Stimmt das?',
  gross:'Tippe alle Wörter an, die man groß schreibt.',nomen:'Ein Wort ist ein Nomen. Es ist falsch (klein) geschrieben. Tippe es an!',
  zusammen:'Bilde ein zusammengesetztes Nomen. Wähle den Artikel und schreibe das Wort.',
  diktat:'Hör gut zu und schreibe den Satz auf.',zuordnen:'Was gehört zusammen? Tippe links und dann rechts.',noten:'Wie heißt die Note?'
};
function checkButton(ctx,label,fn){const b=el('button','btn full checkbtn',label||'Prüfen ✓');b.style.marginTop='16px';b.onclick=fn;ctx.body.appendChild(b);return b}
function antworten(it){return it.a.map(x=>Array.isArray(x)?x.map(String):[String(x)])}
const istZahl=s=>/^-?\d+([.,]\d+)?$/.test(s);

const RENDER={
 luecke(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  if(it.hinweis)ctx.body.appendChild(el('span','verbtag',esc(it.hinweis)));
  const ans=antworten(it);const zahl=ans.every(al=>al.every(istZahl));
  const line=el('div','sentence');const parts=it.text.split('___');const inputs=[];
  parts.forEach((pt,i)=>{line.appendChild(el('span','',pt));if(i<parts.length-1){
    const inp=el('input','blank');inp.type='text';noAuto(inp);
    if(zahl){const komma=(ans[i]||[]).some(x=>/[.,]/.test(x));inp.setAttribute('inputmode',komma?'decimal':'numeric');if(!komma)inp.setAttribute('pattern','[0-9]*')}
    const len=Math.max(...(ans[i]||['']).map(x=>x.length));inp.style.width=(Math.max(3,len)+2)+'ch';inputs.push(inp);line.appendChild(inp)}});
  ctx.body.appendChild(line);
  if(!zahl)ctx.body.appendChild(charBar());
  inputs.forEach((inp,i)=>inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();if(i<inputs.length-1)inputs[i+1].focus();else check()}}));
  function check(){
    if(inputs.some(x=>!x.value.trim())){ctx.retry('Fülle zuerst alle Lücken aus.');return}
    const ok=inputs.map((x,i)=>(ans[i]||[]).some(a=>norm(x.value)===norm(a)));
    inputs.forEach((x,i)=>{x.classList.toggle('good',ok[i]);x.classList.toggle('bad',!ok[i])});
    const sol=fillSolution(it.text,ans.map(a=>a[0]));
    if(ok.every(Boolean))return ctx.finish(true,sol);
    const caseOnly=inputs.some((x,i)=>!ok[i]&&(ans[i]||[]).some(a=>norm(x.value).toLowerCase()===norm(a).toLowerCase()));
    if(ctx.attempt===0){ctx.attempt++;ctx.retry(caseOnly?'Achte auf Groß- und Kleinschreibung!':(it.tipp||''));const f=inputs.find((x,i)=>!ok[i]);if(f)f.focus();return}
    ctx.finish(false,sol,it.tipp);
  }
  checkButton(ctx,null,check);
  setTimeout(()=>inputs[0]&&inputs[0].focus({preventScroll:true}),100);
 },

 auswahl(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  const richtig=it.opts[0];const hatLuecke=/___/.test(it.text||'');
  if(it.text)ctx.body.appendChild(el('div','sentence',hatLuecke?it.text.replace('___','<span style="display:inline-block;min-width:3ch;border-bottom:3px solid var(--f)">&nbsp;</span>'):it.text));
  const opts=it.sortiert?sortDe(it.opts):shuffle(it.opts);
  const lang=opts.some(o=>o.length>14);
  const box=el('div','opts');if(lang)box.style.gridTemplateColumns='1fr';
  const btns=opts.map(o=>{const b=el('button','opt'+(lang?' lang':''),esc(o));b.onclick=()=>choose(o,b);box.appendChild(b);return b});
  ctx.body.appendChild(box);
  function choose(o,b){
    const ok=o===richtig;
    b.classList.add(ok?'good':'bad');
    if(!ok)btns.forEach(x=>{if(x.textContent===richtig)x.classList.add('good')});
    const sol=hatLuecke?fillSolution(it.text,[richtig]):(it.text?it.text+' <b>'+esc(richtig)+'</b>':'<b>'+esc(richtig)+'</b>');
    ctx.finish(ok,sol,ok?it.tipp&&('Merke: '+it.tipp):it.tipp);
  }
 },

 rf(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  ctx.body.appendChild(el('div','sentence',it.text));
  const box=el('div','rf');
  const mk=(val,txt)=>{const b=el('button','opt',txt);b.onclick=()=>{
    const ok=val===!!it.a;b.classList.add(ok?'good':'bad');if(!ok)(val?bN:bJ).classList.add('good');
    ctx.finish(ok,it.text+' <b>'+(it.a?'👍 Stimmt.':'👎 Stimmt nicht.')+'</b>',it.tipp);
  };box.appendChild(b);return b};
  const bJ=mk(true,'👍 Stimmt'),bN=mk(false,'👎 Stimmt nicht');
  ctx.body.appendChild(box);
 },

 nomen(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  const box=el('div','opts');
  const btns=it.woerter.map((w,i)=>{const b=el('button','opt',esc(w));b.onclick=()=>{
    const ok=i===it.a;
    b.classList.add(ok?'good':'bad');
    btns[it.a].classList.add('good');btns[it.a].textContent=cap(it.woerter[it.a]);
    ctx.finish(ok,'Richtig geschrieben: <b>'+esc(cap(it.woerter[it.a]))+'</b>',it.tipp?'Nomenprobe: '+esc(it.tipp)+'. Darum schreibt man es groß.':null);
  };box.appendChild(b);return b});
  ctx.body.appendChild(box);
 },

 gross(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  const toks=it.text.match(/[A-Za-zÄÖÜäöüß0-9-]+|[.,!?;:]/g)||[];
  const box=el('div','chips');const chips=[];
  toks.forEach(t=>{
    if(/^[.,!?;:]$/.test(t)){box.appendChild(el('span','punct',t));return}
    const should=/^[A-ZÄÖÜ]/.test(t);const low=t.toLowerCase();
    const b=el('button','chip',esc(low));b.dataset.up='';
    b.onclick=()=>{const up=!b.dataset.up;b.dataset.up=up?'1':'';b.textContent=up?cap(low):low;b.classList.toggle('up',up);b.classList.remove('good','bad')};
    chips.push({b,should,t});box.appendChild(b);
  });
  ctx.body.appendChild(box);
  function check(){
    let allOk=true;
    chips.forEach(c=>{const up=!!c.b.dataset.up;const ok=up===c.should;if(!ok)allOk=false;c.b.classList.toggle('bad',!ok);c.b.classList.toggle('good',ok&&up)});
    const nouns=chips.filter((c,i)=>c.should&&i>0).map(c=>c.t);
    const tip='Satzanfang: <b>'+esc(chips[0].t)+'</b>'+(nouns.length?' · Nomen: <b>'+nouns.map(esc).join(', ')+'</b>':'');
    if(allOk)return ctx.finish(true,esc(it.text),null,'<p>'+tip+'</p>');
    if(ctx.attempt===0){ctx.attempt++;ctx.retry('Die roten Wörter stimmen noch nicht. Mach die Nomenprobe: Passt der, die, das davor? Und denk an den Satzanfang!');return}
    ctx.finish(false,esc(it.text),null,'<p>'+tip+'</p>');
  }
  checkButton(ctx,null,check);
 },

 zusammen(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  const p1=it.teil1,p2=it.teil2;
  ctx.body.appendChild(el('div','parts','<span class="part"><span class="pe">'+esc(p1[2]||'')+'</span>'+esc(p1[0]+' '+p1[1])+'</span><span class="plus">+</span><span class="part"><span class="pe">'+esc(p2[2]||'')+'</span>'+esc(p2[0]+' '+p2[1])+'</span>'));
  const arts=el('div','arts');let sel=null;
  const ab=['der','die','das'].map(a=>{const b=el('button','art',a);b.onclick=()=>{sel=a;ab.forEach(x=>x.classList.remove('sel','good','bad'));b.classList.add('sel')};arts.appendChild(b);return b});
  ctx.body.appendChild(arts);
  const wrap=el('div','compin');const inp=el('input','blank');inp.type='text';noAuto(inp);inp.placeholder='Wort schreiben';wrap.appendChild(inp);ctx.body.appendChild(wrap);
  ctx.body.appendChild(charBar());
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();check()}});
  function check(){
    if(!sel){ctx.retry('Wähle zuerst der, die oder das.');return}
    if(!inp.value.trim()){ctx.retry('Schreibe das neue Wort in das Feld.');return}
    const aok=sel===it.artikel,wok=norm(inp.value)===it.wort;
    ab.forEach(b=>{if(b.textContent===sel){b.classList.remove('sel');b.classList.add(aok?'good':'bad')}});
    inp.classList.toggle('good',wok);inp.classList.toggle('bad',!wok);
    const sol='<b>'+esc(it.artikel+' '+it.wort)+'</b>';
    if(aok&&wok)return ctx.finish(true,sol,it.tipp||null);
    const tip=[];
    if(!aok)tip.push('Der Artikel kommt vom letzten Wort: '+esc(p2[0]+' '+p2[1])+' → '+esc(it.artikel)+' …');
    if(!wok){const v=norm(inp.value);
      if(v.toLowerCase()===it.wort.toLowerCase())tip.push('Nur der Anfang wird groß geschrieben, alles zusammen.');
      else if(/\s/.test(v))tip.push('Schreibe alles zusammen in ein Wort.');
      else tip.push(it.tipp||'Schreibe beide Wörter zusammen, vorne groß.');}
    if(ctx.attempt===0){ctx.attempt++;ctx.retry(tip.join('<br>'));return}
    ctx.finish(false,sol,tip.join('<br>'));
  }
  checkButton(ctx,null,check);
 },

 zuordnen(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  const P=it.paare,n=P.length;
  const FARBEN=['#E0662B','#3A78D6','#2B9455','#8E52D9','#C2410C','#0E7490'];
  const HELL=['#FFE7D9','#E0ECFF','#DDF5E6','#EFE3FF','#FFEDD5','#CFFAFE'];
  const paar=new Array(n).fill(null);let selL=null,selR=null;
  const box=el('div','zuo');const cL=el('div','col'),cR=el('div','col');box.append(cL,cR);
  const bL=P.map((p,i)=>{const b=el('button','',esc(p[0]));b.onclick=()=>tapL(i);cL.appendChild(b);return b});
  const order=shuffle(P.map((_,i)=>i));
  const bR=[];order.forEach(j=>{const b=el('button','',esc(P[j][1]));b.onclick=()=>tapR(j);cR.appendChild(b);bR[j]=b});
  ctx.body.appendChild(box);
  function tapL(i){if(paar[i]!==null){paar[i]=null;selL=null}else{selL=selL===i?null:i}verbinde()}
  function tapR(j){const i=paar.indexOf(j);if(i>=0){paar[i]=null;selR=null}else{selR=selR===j?null:j}verbinde()}
  function verbinde(){if(selL!==null&&selR!==null){paar[selL]=selR;selL=selR=null}zeichne()}
  function zeichne(){
    [...bL,...bR].forEach(b=>{b.classList.remove('sel');b.style.borderColor='';b.style.background='';b.style.color='';const nr=b.querySelector('.nr');if(nr)nr.remove()});
    paar.forEach((j,i)=>{if(j===null)return;[bL[i],bR[j]].forEach(b=>{b.classList.remove('bad');b.style.borderColor=FARBEN[i%6];b.style.background=HELL[i%6];b.style.color='#2B2A33';const s=el('span','nr',String(i+1));s.style.background=FARBEN[i%6];b.appendChild(s)})});
    if(selL!==null)bL[selL].classList.add('sel');if(selR!==null)bR[selR].classList.add('sel');
  }
  const sol=P.map(p=>esc(p[0])+' → <b>'+esc(p[1])+'</b>').join('<br>');
  function check(){
    if(paar.some(j=>j===null)){ctx.retry('Verbinde zuerst alle Paare.');return}
    const ok=paar.map((j,i)=>j===i);
    if(ok.every(Boolean)){bL.forEach(b=>b.classList.add('good'));return ctx.finish(true,sol)}
    if(ctx.attempt===0){
      ctx.attempt++;
      ok.forEach((g,i)=>{if(!g){bL[i].classList.add('bad');bR[paar[i]].classList.add('bad');paar[i]=null}});
      zeichne();ctx.retry('Die rot markierten Paare stimmen noch nicht. Verbinde sie neu.'+(it.tipp?'<br>'+it.tipp:''));return;
    }
    ok.forEach((g,i)=>bL[i].classList.add(g?'good':'bad'));
    ctx.finish(false,sol,it.tipp);
  }
  checkButton(ctx,null,check);
 },

 noten(it,ctx){
  ctx.body.appendChild(el('p','instr',esc(frageVon(it))));
  ctx.body.insertAdjacentHTML('beforeend',staffSVG(it.noten));
  const namen=it.noten.map(n=>n.charAt(0));
  if(it.noten.length===1){
    const box=el('div','notenbtns');
    const btns=NOTEN.split('').map(c=>{const b=el('button','opt',c);b.onclick=()=>{
      const ok=c===namen[0];b.classList.add(ok?'good':'bad');if(!ok)btns[NOTEN.indexOf(namen[0])].classList.add('good');
      ctx.finish(ok,'Das ist ein <b>'+namen[0]+'</b>.',it.tipp);
    };box.appendChild(b);return b});
    ctx.body.appendChild(box);return;
  }
  const wrap=el('div','compin');const inp=el('input','blank');inp.type='text';noAuto(inp);inp.placeholder='Wort';wrap.appendChild(inp);ctx.body.appendChild(wrap);
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();check()}});
  const sol=namen.join(' ')+(it.wort?' → <b>'+esc(it.wort)+'</b>':'');
  function check(){
    const v=norm(inp.value).toLowerCase().replace(/\s/g,'');
    if(!v){ctx.retry('Schreibe zuerst das Wort auf.');return}
    const ok=v===namen.join('');inp.classList.toggle('good',ok);inp.classList.toggle('bad',!ok);
    if(ok)return ctx.finish(true,sol,it.tipp);
    if(ctx.attempt===0){ctx.attempt++;ctx.retry('Lies jede Note einzeln. Tipp: Die erste Note heißt <b>'+namen[0]+'</b>.');inp.focus();return}
    ctx.finish(false,sol,it.tipp);
  }
  checkButton(ctx,null,check);
  setTimeout(()=>inp.focus({preventScroll:true}),100);
 },

 diktat(it,ctx){
  const text=it.text.replace(/\s*\|\s*/g,' ');
  const chunks=it.text.split('|').map(s=>s.trim());
  const mode=el('div','mode');
  const mT=el('button',S.paper?'':'on','⌨️ In der App tippen');const mP=el('button',S.paper?'on':'','✏️ Auf Papier');
  mT.onclick=()=>{if(S.paper){S.paper=false;save();rebuild()}};mP.onclick=()=>{if(!S.paper){S.paper=true;save();rebuild()}};
  mode.append(mT,mP);
  function rebuild(){ctx.body.innerHTML='';RENDER.diktat(it,ctx)}
  ctx.body.appendChild(mode);
  ctx.body.appendChild(el('p','instr',S.paper?'Hör gut zu und schreibe den Satz in dein Heft.':'Hör gut zu und schreibe den Satz auf.'));
  const L=el('div','listen');
  const bAll=el('button','btn big keep','🔊 Satz anhören');
  const bSlow=el('button','btn sec keep','🐢 Langsam');
  let ci=0;const bPart=el('button','btn sec keep','🧩 Teil 1/'+chunks.length);
  bAll.onclick=()=>{if(!speak(text,0.85))noTTS()};
  bSlow.onclick=()=>{if(!speak(text,0.6))noTTS()};
  bPart.onclick=()=>{if(!speak(chunks[ci],0.7))return noTTS();ci=(ci+1)%chunks.length;bPart.textContent='🧩 Teil '+(ci+1)+'/'+chunks.length};
  L.append(bAll,bSlow,bPart);ctx.body.appendChild(L);
  const peekBtn=el('button','linkbtn','👀 Satz zeigen (für Eltern zum Vorlesen)');peekBtn.style.marginTop='10px';
  const peek=el('div','peek hidden',esc(text));
  peekBtn.onclick=()=>{peek.classList.toggle('hidden');peekBtn.textContent=peek.classList.contains('hidden')?'👀 Satz zeigen (für Eltern zum Vorlesen)':'🙈 Satz verstecken'};
  ctx.body.append(peekBtn,peek);
  const warn=el('div','note hidden');ctx.body.appendChild(warn);
  function noTTS(){warn.classList.remove('hidden');warn.innerHTML='🔇 Vorlesen klappt auf diesem Gerät gerade nicht. Ton an? Sonst kann ein Erwachsener den Satz vorlesen (»Satz zeigen«).'}
  if(!TTS)noTTS();
  else setTimeout(()=>{if(voicesChecked&&!voice){warn.classList.remove('hidden');warn.innerHTML='ℹ️ Keine deutsche Stimme gefunden, das Vorlesen klingt vielleicht komisch. Dann lieber selbst vorlesen (»Satz zeigen«).'}},1200);

  if(S.paper){
    const done=el('button','btn full orange checkbtn','✅ Fertig geschrieben, Lösung zeigen');done.style.marginTop='16px';
    done.onclick=()=>{
      done.remove();peek.classList.add('hidden');peekBtn.remove();
      const sol=el('div','card');sol.style.marginTop='14px';sol.style.background='#FFFBEA';
      sol.innerHTML='<div class="modtitle">So ist es richtig</div><div class="sentence">'+esc(text)+'</div><p class="note">Vergleiche Wort für Wort: Groß oder klein? Punkt am Ende?</p>';
      const row=el('div','btnrow');
      const y=el('button','btn','👍 Alles richtig');const n=el('button','btn orange','✏️ Ich hatte Fehler');
      y.onclick=()=>{row.remove();ctx.finish(true,null)};n.onclick=()=>{row.remove();ctx.finish(false,null,'Schreib die Wörter mit Fehler nochmal richtig ab. Der Satz kommt bei »Meine Übe-Aufgaben« wieder.')};
      row.append(y,n);sol.appendChild(row);ctx.body.appendChild(sol);
    };
    ctx.body.appendChild(done);
    return;
  }
  const ta=el('textarea','dict');noAuto(ta);ta.placeholder='Hier schreiben …';ta.rows=3;
  ctx.body.appendChild(ta);ctx.body.appendChild(charBar());
  checkButton(ctx,'Prüfen ✓',()=>{
    if(!ta.value.trim()){warn.classList.remove('hidden');warn.innerHTML='✏️ Schreibe zuerst den Satz auf.';return}
    peek.classList.add('hidden');peekBtn.remove();
    const res=compareDict(ta.value,text);
    ctx.finish(res.errors===0,null,null,res.html);
  });
 }
};

/* ============ Diktat-Vergleich ============ */
function tokenize(s){return (s.match(/[A-Za-zÄÖÜäöüß0-9-]+|[.,!?;:]/g)||[])}
function align(a,b){
  const n=a.length,m=b.length;const D=[];
  for(let i=0;i<=n;i++){D.push(new Array(m+1).fill(0));D[i][0]=i}
  for(let j=0;j<=m;j++)D[0][j]=j;
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++){
    const c=a[i-1]===b[j-1]?0:(a[i-1].toLowerCase()===b[j-1].toLowerCase()?0.5:1);
    D[i][j]=Math.min(D[i-1][j-1]+c,D[i-1][j]+1,D[i][j-1]+1);
  }
  const ops=[];let i=n,j=m;
  while(i>0||j>0){
    if(i>0&&j>0){const c=a[i-1]===b[j-1]?0:(a[i-1].toLowerCase()===b[j-1].toLowerCase()?0.5:1);
      if(Math.abs(D[i][j]-(D[i-1][j-1]+c))<1e-9){ops.push(c===0?{k:'ok',t:b[j-1]}:{k:'sub',t:b[j-1],y:a[i-1]});i--;j--;continue}}
    if(j>0&&Math.abs(D[i][j]-(D[i][j-1]+1))<1e-9){ops.push({k:'miss',t:b[j-1]});j--;continue}
    ops.push({k:'extra',y:a[i-1]});i--;
  }
  return ops.reverse();
}
function compareDict(typed,target){
  const ops=align(tokenize(typed),tokenize(target));
  const isP=t=>/^[.,!?;:]$/.test(t);
  let html='<div class="diff">',first=true;const errs=[];
  ops.forEach(o=>{
    const tok=o.t||o.y;const sp=(first||isP(tok))?'':' ';first=false;
    if(o.k==='ok')html+=sp+'<span class="w ok">'+esc(o.t)+'</span>';
    else if(o.k==='sub'){html+=sp+'<span class="w sub"><s>'+esc(o.y)+'</s><b>'+esc(o.t)+'</b></span>';
      if(isP(o.t))errs.push('Satzzeichen: Hier gehört <b>'+esc(o.t)+'</b> hin.');
      else if(o.y.toLowerCase()===o.t.toLowerCase())errs.push('<b>'+esc(o.t)+'</b>: '+(/^[A-ZÄÖÜ]/.test(o.t)?'groß':'klein')+' schreiben!');
      else errs.push(esc(o.y)+' → <b>'+esc(o.t)+'</b>');}
    else if(o.k==='miss'){html+=sp+'<span class="w miss">'+esc(o.t)+'</span>';errs.push(isP(o.t)?'Das Satzzeichen <b>'+esc(o.t)+'</b> fehlt.':'Das Wort <b>'+esc(o.t)+'</b> fehlt.')}
    else{html+=sp+'<span class="w extra"><s>'+esc(o.y)+'</s></span>';errs.push('<s>'+esc(o.y)+'</s> gehört nicht in den Satz.')}
  });
  html+='</div>';
  if(errs.length)html+='<ul class="errs">'+errs.map(e=>'<li>'+e+'</li>').join('')+'</ul>';
  else html+='<p>Alles richtig geschrieben, kein einziger Fehler! 🌟</p>';
  return {errors:errs.length,html};
}

/* ============ Arbeitsblätter ============ */
const DRUCK_AUFTRAG={
  gross:'Schreibe den Satz richtig ab. Achte auf Groß- und Kleinschreibung!',
  nomen:'Ein Wort ist ein Nomen. Kreise es ein und schreibe es richtig auf.',
  zuordnen:'Verbinde, was zusammengehört.',
  diktat:'Diktat: Ein Erwachsener liest vor. Schreibe jeden Satz auf die Linien.',
  zusammen:'Bilde ein zusammengesetztes Nomen. Schreibe den Artikel und das Wort.'
};
function druckAuftrag(it){
  if(it.druckfrage)return it.druckfrage;
  if(it._u.druckfrage&&!it.frage)return it._u.druckfrage;
  if(DRUCK_AUFTRAG[it.t])return DRUCK_AUFTRAG[it.t];
  if(it.t==='noten')return it.noten.length>1?'Lies die Noten. Schreibe das Wort auf die Linie.':'Wie heißen die Noten? Schreibe den Namen auf die Linie.';
  let f=frageVon(it).replace(/Tippe[^.!]*[.!]\s*/g,'').trim();
  if((it.t==='auswahl'||it.t==='rf')&&!/kreuze/i.test(f))f+=' Kreuze an.';
  return f;
}
function luecke(n,max){return '<span class="ab-luecke" style="min-width:'+Math.min(max||60,Math.max(14,Math.round(n*3.4)))+'mm"></span>'}
function loesLuecke(t){return '<span class="ab-luecke ls">'+esc(t)+'</span>'}
const bildHtml=it=>it.bild?'<span class="ab-bild">'+esc(it.bild)+'</span>':'';

/* Jeder Typ liefert: a (Aufgabe), l (Lösung), k (Breite: "k3" = drei pro Zeile, "k2" = zwei) */
const DRUCK={
 luecke(it){
  const ans=antworten(it);let i=0,j=0;
  const kurz=strip(it.text).replace(/___/g,'').length<=14&&ans.length<=2&&!it.bild&&!it.hinweis;
  const a=it.text.replace(/___/g,()=>luecke(Math.max(...ans[i++].map(x=>x.length))+2,kurz?26:60));
  const l=it.text.replace(/___/g,()=>loesLuecke(ans[j++][0]));
  return {a:bildHtml(it)+(it.hinweis?'<i>('+esc(it.hinweis)+')</i> ':'')+a,l,k:kurz?'k3':''};
 },
 auswahl(it,rnd){
  const opts=it.sortiert?sortDe(it.opts):shuffle(it.opts,rnd);
  const hatL=/___/.test(it.text||'');
  const o='<span class="ab-opts">'+opts.map(x=>'<span>'+esc(x)+'</span>').join('')+'</span>';
  const a=bildHtml(it)+(it.text?(hatL?it.text.replace('___',luecke(Math.max(...it.opts.map(x=>x.length)))):it.text)+(hatL?'<br>':' '):'')+o;
  const l=(it.text?(hatL?it.text.replace('___',loesLuecke(it.opts[0])):it.text+' '+loesLuecke(it.opts[0])):loesLuecke(it.opts[0]));
  return {a,l,k:''};
 },
 rf(it){
  return {a:bildHtml(it)+it.text+' <span class="ab-opts"><span>stimmt</span><span>stimmt nicht</span></span>',l:it.text+' '+loesLuecke(it.a?'stimmt':'stimmt nicht'),k:''};
 },
 gross(it){return {a:esc(it.text.toLowerCase())+'<div class="ab-zeile"></div>',l:esc(it.text),k:''}},
 nomen(it){return {a:'<span class="ab-woerter">'+it.woerter.map(w=>'<span>'+esc(w)+'</span>').join('')+'</span> → '+luecke(it.woerter[it.a].length+3),l:loesLuecke(cap(it.woerter[it.a])),k:''}},
 zusammen(it){
  const t=x=>(x[2]?esc(x[2])+' ':'')+esc(x[0]+' '+x[1]);
  return {a:t(it.teil1)+' + '+t(it.teil2)+' = '+luecke(4)+' '+luecke(it.wort.length+3),l:t(it.teil1)+' + '+t(it.teil2)+' = '+loesLuecke(it.artikel+' '+it.wort),k:''};
 },
 diktat(it){return {a:'<div class="ab-zeile"></div><div class="ab-zeile"></div>',l:esc(it.text.replace(/\s*\|\s*/g,' ')),k:'',cls:'ab-diktat'}},
 zuordnen(it,rnd){
  const r=shuffle(it.paare.map(p=>p[1]),rnd);
  let g='<div class="ab-zuo">';it.paare.forEach((p,i)=>{g+='<div class="l">'+esc(p[0])+'</div><div></div><div class="r">'+esc(r[i])+'</div>'});g+='</div>';
  return {a:g,l:it.paare.map(p=>esc(p[0])+' – '+loesLuecke(p[1])).join('<br>'),k:''};
 },
 noten(it){
  const n=it.noten.map(x=>x.charAt(0));
  const svg=staffSVG(it.noten,'ab-staff');
  if(n.length===1)return {a:svg+luecke(6),l:loesLuecke(n[0]),k:'k3'};
  return {a:svg+luecke(it.noten.length*3+6),l:n.join(' ')+(it.wort?' → '+loesLuecke(it.wort):''),k:'k2'};
 }
};

let druckSeed=Math.floor(Math.random()*1e9);
const druckOpt={};
function seiteDrucken(th){
  const f=FACH[th.fach];setFarbe(f);kopf('Arbeitsblatt','#/thema/'+encodeURIComponent(th.id));
  const o=druckOpt[th.id]||(druckOpt[th.id]={sel:Object.fromEntries(th.uebungen.map(u=>[u.id,true])),n:6,merke:true,loes:true});
  const box=el('div','druckopt');
  box.innerHTML='<h3>🖨️ '+esc(th.titel)+': Was soll aufs Blatt?</h3>';
  th.uebungen.forEach(u=>{
    const l=el('label');const c=el('input');c.type='checkbox';c.checked=!!o.sel[u.id];
    c.onchange=()=>{o.sel[u.id]=c.checked;vorschau()};
    l.append(c,document.createTextNode((u.emoji||'')+' '+u.titel));box.appendChild(l);
  });
  const z=el('div','zeile');
  const ln=el('label');ln.innerHTML='Aufgaben pro Übung: ';const s=el('select');
  [[4,'4'],[6,'6'],[8,'8'],[10,'10'],[999,'alle']].forEach(([v,t])=>{const op=el('option','',t);op.value=v;if(v===o.n)op.selected=true;s.appendChild(op)});
  s.onchange=()=>{o.n=+s.value;vorschau()};ln.appendChild(s);
  const lm=el('label');const cm=el('input');cm.type='checkbox';cm.checked=o.merke;cm.onchange=()=>{o.merke=cm.checked;vorschau()};lm.append(cm,document.createTextNode('Merke-Kasten'));
  const ll=el('label');const cl=el('input');cl.type='checkbox';cl.checked=o.loes;cl.onchange=()=>{o.loes=cl.checked;vorschau()};ll.append(cl,document.createTextNode('Lösungsblatt anhängen'));
  z.append(ln,lm,ll);box.appendChild(z);
  box.appendChild(el('p','tipp','Tipp: Drucken klappt am besten am Computer oder Handy. Im Druckfenster kannst du auch „Als PDF speichern“ wählen.'));
  app.appendChild(box);
  const bar=el('div','druckbar');
  const bp=el('button','btn','🖨️ Drucken');bp.onclick=()=>{try{window.print()}catch(e){alert('Drucken ist auf diesem Gerät leider nicht möglich.')}};
  const bm=el('button','btn sec','🔀 Neu mischen');bm.onclick=()=>{druckSeed=Math.floor(Math.random()*1e9);vorschau()};
  bar.append(bp,bm);app.appendChild(bar);
  const out=el('div');app.appendChild(out);
  function vorschau(){out.innerHTML=arbeitsblatt(th,o,druckSeed)}
  vorschau();
}
function arbeitsblatt(th,o,seed){
  const f=FACH[th.fach];
  const us=th.uebungen.filter(u=>o.sel[u.id]);
  if(!us.length)return '<div class="leer">Wähle mindestens eine Übung aus.</div>';
  let blatt='<div class="paper"><div class="ab-kopf">'+maskottchen()+'<div class="tt"><span class="ab-fach">'+esc(f.titel)+'</span><h2>'+esc(th.titel)+'</h2></div><div class="name">Name: <span></span><br>Datum: <span></span></div></div>';
  let loes='<div class="paper ab-loes"><div class="ab-kopf">'+maskottchen()+'<div class="tt"><span class="ab-fach">Lösungen · '+esc(f.titel)+'</span><h2>'+esc(th.titel)+'</h2></div></div>';
  us.forEach(u=>{
    const rnd=rng(seed^parseInt(hash(u._key),36));
    const items=pick(u.aufgaben,Math.min(o.n,u.aufgaben.length),rnd);
    /* gleiche Aufträge gruppieren, Reihenfolge der ersten Nennung behalten */
    const gruppen=[];const map={};
    items.forEach(it=>{const a=druckAuftrag(it);if(!map[a]){map[a]=[];gruppen.push([a,map[a]])}map[a].push(it)});
    let sec='<section class="ab-sec"><div class="ab-intro"><h3>'+(u.emoji||'')+' '+esc(u.titel)+'</h3>';
    if(o.merke&&u.merke)sec+='<div class="ab-merke">💡 '+u.merke+'</div>';
    if(u.wortspeicher&&items.some(it=>it.t==='luecke'))sec+='<div class="ab-wort">'+u.wortspeicher.map(w=>'<span>'+esc(w)+'</span>').join('')+'</div>';
    sec+='</div>';
    let ls='<section class="ab-sec"><h3>'+(u.emoji||'')+' '+esc(u.titel)+'</h3>';
    let nr=0;
    gruppen.forEach(([auftrag,its])=>{
      sec+='<p class="auftrag">'+esc(auftrag)+'</p><ol class="ab-liste" style="counter-reset:nr '+nr+'">';
      ls+='<ol class="ab-liste" style="counter-reset:nr '+nr+'">';
      const ds=its.map(it=>DRUCK[it.t](it,rnd));
      const rang=d=>d.k==='k3'?0:d.k==='k2'?1:2;
      ds.map((d,i)=>[d,i]).sort((x,y)=>rang(x[0])-rang(y[0])||x[1]-y[1]).forEach(([d])=>{sec+='<li class="'+(d.k||'')+' '+(d.cls||'')+'">'+d.a+'</li>';ls+='<li class="'+(d.k==='k3'?'k3':'')+'">'+d.l+'</li>';nr++});
      sec+='</ol>';ls+='</ol>';
    });
    blatt+=sec+'</section>';loes+=ls+'</section>';
  });
  blatt+='<div class="ab-fuss"><span>Wie gut hat es geklappt? Male aus: <span class="sterne">☆☆☆</span></span><span>'+esc(K.appTitel)+'</span></div></div>';
  loes+='</div>';
  return blatt+(o.loes?loes:'');
}

/* ============ Start ============ */
weltAnwenden();
ladeThemen(()=>{vorbereiten();render()});
})();
