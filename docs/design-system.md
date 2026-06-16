# docs/design-system.md — JP2.in svetainės dizaino sistema

## 1. Dokumento paskirtis

Šis dokumentas apibrėžia naujos **jp2.in** svetainės vizualinę kalbą, komponentų logiką ir dizaino kokybės standartą.

Dizaino sistema turi padėti išlaikyti svetainę:

* šviesią;
* modernią;
* erdvią;
* aiškią;
* pastoraciškai šiltą;
* profesionalią;
* suderintą su JP2 Vizija.

Šis dokumentas turi būti skaitomas kartu su:

```text
AGENTS.md
docs/jp2-vizija.md
docs/site-map.md
docs/content-guidelines.md
docs/workflow.md
```

Jeigu dizaino sprendimas prieštarauja `docs/jp2-vizija.md`, pirmenybė visada teikiama JP2 Vizijos dokumentui.

---

## 2. Bendras dizaino principas

Nauja **jp2.in** svetainė turi atrodyti kaip šiuolaikinė, šviesi, kviečianti parapijos erdvė.

Pagrindinis įspūdis:

> **Atviros durys, šviesa, kelionė, bendruomenė ir JP2 Misija.**

Svetainė neturi atrodyti kaip sunkus institucinis puslapis ar generinis bažnytinis šablonas.

Dizainas turi padėti žmogui:

* greitai suprasti, kur jis pateko;
* pajusti kvietimą;
* rasti praktinę informaciją;
* atrasti Mokinystės kelionę;
* pamatyti Misijų centro prasmę;
* žengti kitą aiškų žingsnį.

---

## 3. Vizualinis tonas

Dizainas turi būti:

* šviesus;
* lengvas;
* erdvus;
* švarus;
* aiškus;
* šiltas;
* modernus;
* ramus;
* neperkrautas;
* su pakankamai baltos erdvės.

Vengti:

* per tamsaus hero;
* beveik juodų fonų;
* per daug šešėlių;
* per daug gradientų;
* chaotiškų animacijų;
* tankių kortelių;
* smulkių, sunkiai skaitomų tekstų;
* abstrakčių „stock church“ vaizdų;
* neprofesionalių CSS piešinių.

---

## 4. Spalvų sistema

### 4.1. Pagrindinės spalvos

Naudoti šias pagrindines JP2 spalvas:

```text
JP2 mėlyna:   #157DBF
JP2 geltona:  #FEBD59
Balta:        #FFFFFF
```

JP2 mėlyna yra pagrindinė svetainės identiteto spalva.

JP2 geltona naudojama kaip šviesos, vilties, dėmesio ir kvietimo akcentas.

Balta erdvė turi būti pagrindinis dizaino fonas.

---

### 4.2. Neutralūs tonai

Rekomenduojami neutralūs tonai:

```text
Pagrindinis tekstas:  #111111 arba #111827
Antrinis tekstas:     #4B5563
Šviesi linija:        #E5E7EB
Labai švelnus fonas:  #F4F9FD
```

Šviesius sekcijų fonus naudoti tik tada, kai jie padeda aiškiai atskirti turinio blokus. Nereikia automatiškai kiekvienai antrai sekcijai suteikti spalvoto fono.

---

### 4.3. Papildomos spalvos

Papildomos spalvos:

```text
Tamsiai mėlyna:        #243449
Pilkai mėlyna:         #2D3C51
Tamsesnė JP2 mėlyna:   #126AA2
```

Tamsiai mėlyna `#243449` turi būti naudojama labai saikingai:

* mažiems antriniams elementams;
* tekstui ant šviesaus fono, jei reikia;
* footer detalėms;
* subtiliam kontrastui.

Nenaudoti `#243449` kaip dominuojančio hero, CTA ar didelių sekcijų fono, nes ji vizualiai sunkina svetainę.

Jei reikia hover būsenos mėlynai, dažniau rinktis `#126AA2`, ne `#243449`.

---

### 4.4. Misijų ir kalendoriaus akcentai

Papildomi akcentai:

```text
JP2 PARAPIJA:              #157DBF
Mokinystės misija:         #27AFFF
Tikėjimo misija:           #FEBD59
Evangelizacijos misija:    #0CA25A
Šventimo misija:           #FCD501
Bendrystės misija:         #004AAD
Tarnystės misija:          #FF3131
Misijų palaikymas:         #C0007F
Šv. Mišios:                #F5A623
Kitos pamaldos:            #A3D142
Sakramentinė katechezė:    #2E7D32
JP2 Bendras:               #8A1538
Vizijos komanda:           #126AA2
```

Šios spalvos naudojamos:

* žymoms;
* ikonoms;
* kalendoriaus kategorijoms;
* teminėms kortelėms;
* mažiems akcentams;
* schemoms.

Nenaudoti visų spalvų vienu metu vienoje sekcijoje, jei tai kuria vizualinį triukšmą.

Pastaba: Tikėjimo misijai naudoti pagrindinę JP2 geltoną `#FEBD59`, o Šventimo misijai — ryškesnę liturginę geltoną `#FCD501`.

---

### 4.5. Mokinystės kelionės spalvos

Mokinystės kelionės žingsniai:

```text
Alfa+ Dalyviai:       žalia   #0CA25A
Bendrakeleiviai:      raudona #FF3131
Jėzaus mokiniai:      mėlyna  #2B5BC2
Palydėtojai:          geltona #FEBD59
```

Ši spalvų logika turi būti nuosekli:

* kortelėse;
* schemose;
* ikonose;
* pėdų motyve;
* Mokinystės kelionės puslapiuose;
* pradžios puslapio Mokinystės bloke.

---

### 4.6. Misijos raktų spalvos ir simboliai

Misijos raktai turi savo spalvinę ir simbolinę sistemą. Ji turi būti naudojama nuosekliai.

Misijos raktų spalvos ir simboliai:

```text
Tikėjimo raktas:           #FEBD59 — kryžius rakto žiede
Evangelizacijos raktas:    #0CA25A — atversta Evangelijos knyga su kryžiumi viršelyje
Šventimo raktas:           #FCD501 — taurė su ostija
Tarnystės raktas:          #FF3131 — iš susikabinusių rankų susidaranti širdis
Bendrystės raktas:         #004AAD — susitelkusios rankos aplink kryžių
```

Misijos raktų spalvos ir simboliai turi būti naudojami:

* Misijos raktų kortelėse;
* Misijos raktų SVG iliustracijose;
* raktų žiede;
* ikonose;
* atskiruose Misijos raktų puslapiuose;
* pradžios puslapio Misijos raktų bloke.

Kiekvienas Misijos raktas turi naudoti ne tik savo spalvą, bet ir savo simbolį rakto žiede.

Nenaudoti generinio vienodo rakto ar generinės ikonėlės visiems raktams, jei naudojamas Misijos raktų vizualas.

Vizualinė logika:

* kiekvienas raktas turi savo spalvą;
* kiekvienas raktas turi savo simbolį rakto žiede;
* Tikėjimo raktas — kryžius rakto žiede;
* Evangelizacijos raktas — atversta Evangelijos knyga su kryžiumi viršelyje;
* Šventimo raktas — taurė su ostija;
* Tarnystės raktas — iš susikabinusių rankų susidaranti širdis;
* Bendrystės raktas — susitelkusios rankos aplink kryžių;
* raktų galai gali būti nukreipti į centrą;
* centre gali būti širdis su rakto skylute;
* raktai turi būti arti centro, ne nutolę kaip atskira schema;
* vengti punktyrinių linijų, perteklinių jungčių ir numeracijos pačiame raktų grafike.

Misijos raktų grafike raktų numeruoti nereikia. Jeigu reikia aiškios sekos, numeriai gali būti naudojami kortelėse, bet ne pačiame simboliniame raktų žiede.

---

## 5. Tipografija

Pagrindinis šriftas:

```css
font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Bendri principai:

* tekstas turi būti lengvai skaitomas;
* eilutės neturi būti per ilgos;
* naudoti aiškią antraščių hierarchiją;
* vengti per mažų šriftų;
* nenaudoti per daug skirtingų svorių.

Rekomenduojama bazė:

```text
Body: 16–18 px
Mažas tekstas: 14–15 px
Hero H1: 44–64 px desktop, 34–42 px mobile
Puslapio H1: 40–56 px desktop, 32–40 px mobile
H2: 30–42 px desktop, 26–34 px mobile
H3: 22–28 px
```

Teksto spalva:

* pagrindiniam tekstui naudoti `#111111` arba `#111827`;
* antriniam tekstui naudoti `#4B5563`;
* ant mėlyno fono naudoti baltą tekstą tik tada, kai kontrastas tikrai pakankamas.

---

## 6. Erdvė ir išdėstymas

Svetainėje turi būti daugiau oro nei standartiniame tankiame šablone.

Pagrindiniai principai:

* didesni tarpai tarp sekcijų;
* mažiau suspaustos kortelės;
* aiškus ritmas;
* neperkrauta pradžios puslapio tėkmė;
* turinys turi kvėpuoti.

Rekomenduojami tarpai:

```text
Sekcijos viršus / apačia desktop: 80–120 px
Sekcijos viršus / apačia mobile: 56–80 px
Kortelių tarpai: 20–32 px
Hero vidiniai tarpai: erdvūs, ne mažiau 72 px vertikaliai desktop
Maksimalus teksto plotis: 680–760 px
Pagrindinio konteinerio plotis: 1120–1240 px
```

Vengti:

* per daug elementų vienoje eilėje;
* ilgo teksto per visą ekraną;
* vizualiai sunkių blokų;
* labai žemų hero sekcijų, kuriose trūksta kvėpavimo;
* per didelio sekcijų suspaudimo telefone.

---

## 7. Kortelės

Kortelės naudojamos:

* Mokinystės žingsniams;
* Misijos raktams;
* Aktualu nuorodoms;
* naujienoms;
* renginiams;
* bendruomenės grupėms;
* paramos kryptims.

Kortelės turi būti:

* švarios;
* erdvios;
* ne per daug dekoratyvios;
* aiškiai skaitomos;
* su subtiliu šešėliu arba rėmeliu;
* su pakankamu vidiniu tarpu.

Rekomenduojama kortelės logika:

```text
Pavadinimas
Trumpas tekstas
Mažas akcentas / ikonėlė
CTA arba nuoroda, jei reikia
```

Kortelėse vengti dubliavimo, ypač Misijos raktų ir Mokinystės žingsnių tekstuose.

Pavyzdžiui, nerašyti:

```text
Tikėjimo raktas
Tikėjimo raktu — per...
```

Geriau:

```text
Tikėjimo raktas
Gyvojo Dievo Meilės patirtis ir tikėjimo jėga maldoje.
```

---

## 8. Mygtukai ir CTA

CTA turi būti aiškūs, trumpi ir kviečiantys.

Pagrindiniai hero CTA:

```text
Pažink JP2!
Keliauk kartu!
Paremk JP2 Misiją!
```

Kiti rekomenduojami CTA:

```text
Sužinok daugiau
Atrask daugiau
Registruokis
Prisijunk
Keliauk kartu
Dalyvauk
Susisiek
Prašau maldos
Prašau Šv. Mišių
Paremk JP2 misiją
Prisidėk
Skaityk daugiau
```

Vengti generinių CTA:

```text
Spausk čia
Daugiau
Click here
Learn more
Read more
```

jeigu galima panaudoti konkretesnį veiksmą.

### Mygtukų vizualinė logika

Pagrindinis CTA:

* JP2 mėlyna arba JP2 geltona;
* aiškus kontrastas;
* švelniai užapvalinti kampai;
* aiški hover būsena.

Antrinis CTA:

* baltas fonas;
* mėlynas rėmelis arba tekstas;
* subtilus hover.

Trečiasis / tekstinis CTA:

* tekstinė nuoroda;
* rodyklė;
* aiškus hover.

Mygtukai neturi atrodyti agresyviai ar komerciškai.

---

## 9. Hero dizaino sistema

Hero yra svarbiausia pirmo įspūdžio vieta.

Hero turi perteikti:

* atviras duris;
* šviesą;
* kvietimą;
* JP2 Viziją;
* kelią;
* Mokinystės pėdas;
* JP2 pastoralo kryžių horizonte;
* vilties ir ramybės įspūdį.

Hero neturi būti:

* tamsus;
* sunkus;
* generic church template;
* pilnas stock nuotraukų;
* vizualiai chaotiškas.

### Hero turinys

Hero turi turėti:

* antraštę: **„Atverkite duris Kristui!“**
* trumpą JP2 Vizijos santrauką;
* citatą, jei tinka;
* tris CTA:

  * **Pažink JP2!**
  * **Keliauk kartu!**
  * **Paremk JP2 Misiją!**

### Hero vizualas

Pirmenybė:

* SVG iliustracijai;
* profesionaliai parengtam grafiniam failui;
* flat-style, bet šiltam ir gyvam vaizdui.

Hero vizualo motyvai:

* JP2 arkos formos durys;
* geltona širdies / rakto skylutė;
* atvertos durys;
* kelias;
* keturių spalvų pėdos;
* šviesa;
* JP2 pastoralo kryžius horizonte.

Nenaudoti sudėtingo CSS piešinio kaip galutinio hero sprendimo.

---

## 10. Vizijos blokas

Vizijos blokas turi būti ramus, iškilmingas, bet lengvas.

Jame turi aiškiai matytis:

> **Atveriame duris Kristui į žmonių gyvenimus!**
> **Meilės Dvasioje per Jo Misiją ir Mokinystę…**

Vizualinė kryptis:

* baltas arba labai šviesus fonas;
* daug oro;
* galima naudoti subtilų šviesos / durų / kelio motyvą;
* tekstas neturi būti per ilgas;
* blokas turi vesti į platesnį Vizijos puslapį.

---

## 11. Mokinystės kelionės blokas

Mokinystės blokas turi rodyti aiškią kelionės progresiją:

```text
Susitikimas
→ Apsisprendimas
→ Augimas
→ JP2 Misijos priėmimas
```

Žingsniai:

1. Alfa+ Dalyviai
2. Bendrakeleiviai
3. Jėzaus mokiniai
4. Palydėtojai

Naudoti Mokinystės kelionės spalvas:

```text
Alfa+ Dalyviai:       #0CA25A
Bendrakeleiviai:      #FF3131
Jėzaus mokiniai:      #2B5BC2
Palydėtojai:          #FEBD59
```

Galimi vizualiniai motyvai:

* pėdos;
* kelias;
* keturi žingsniai;
* Mokinystės kelionės logotipas;
* kortelės su numeriais;
* horizontali schema desktop;
* vertikali schema mobile.

---

## 12. Misijos raktų blokas

Misijos raktų blokas turi pristatyti penkis raktus:

1. Tikėjimo raktas
2. Evangelizacijos raktas
3. Šventimo raktas
4. Tarnystės raktas
5. Bendrystės raktas

Naudoti šias spalvas ir simbolius:

```text
Tikėjimo raktas:           #FEBD59 — kryžius rakto žiede
Evangelizacijos raktas:    #0CA25A — atversta Evangelijos knyga su kryžiumi viršelyje
Šventimo raktas:           #FCD501 — taurė su ostija
Tarnystės raktas:          #FF3131 — iš susikabinusių rankų susidaranti širdis
Bendrystės raktas:         #004AAD — susitelkusios rankos aplink kryžių
```

Misijos raktai turi turėti savo simbolius rakto žiede. Jeigu naudojami oficialūs JP2 Misijos raktų grafiniai failai, pirmenybė teikiama jiems, o ne generinėms ikonoms.

Vizualinė kryptis:

* penki spalvoti raktai;
* kiekvienas raktas su savo simboliu rakto žiede;
* raktų galai nukreipti į centrą;
* centre širdis su rakto skylute;
* raktai arti širdies;
* be punktyrinių linijų;
* be numerių pačiame grafike;
* numeriai gali būti kortelėse.

Misijos raktų vizualas turi būti SVG / paveikslėlis.

Nenaudoti sudėtingo CSS piešinio kaip galutinio sprendimo.

---

## 13. Aktualu blokas

Aktualu blokas turi būti labai praktiškas.

Jis turi padėti greitai rasti:

* pamaldų tvarką;
* registracijas;
* skelbimus;
* renginius;
* kunigų patarnavimus;
* Šv. Mišių intencijas;
* kontaktus;
* DUK.

Dizaino principas:

* greitos nuorodos;
* aiškios kortelės;
* nedaug teksto;
* prioritetas praktiniam veiksmui;
* aiškūs CTA.

---

## 14. Misijų centro blokas

Misijų centro blokas turi atrodyti vizionieriškai, bet ne pompastiškai.

Pagrindinė žinutė:

> **Statome ne tik pastatą, bet namus maldai, mokinystei ir misijai.**

Vizualinė kryptis:

* šviesus, viltingas tonas;
* namų / durų / bendruomenės / kelio motyvai;
* realios vizualizacijos, jei yra;
* žmonės ir misija svarbiau už technines statybas;
* CTA į paramą arba platesnį Misijų centro puslapį.

Vengti vien techninės statybų kalbos.

---

## 15. Bendruomenės blokas

Bendruomenės blokas turi rodyti, kad JP2 yra gyva Kristaus mokinių bendruomenė.

Akcentai:

* tarnystės;
* grupės;
* savanorystė;
* bendrystė;
* maldos pagalba;
* šeimos;
* jaunimas;
* palydėjimas;
* įsitraukimas.

Vizualai:

* realios JP2 nuotraukos;
* bendruomenės ratas;
* žmonės natūraliose situacijose;
* šiltos, nepozuotos akimirkos.

---

## 16. Paramos blokas

Paramos blokas turi būti šiltas ir pasitikėjimą keliantis.

Jis turi kviesti prisidėti:

* malda;
* auka;
* savanoryste;
* tarnyste;
* Misijų centro statyba;
* JP2 Misijos palaikymu.

Vengti agresyvios fundraising kalbos.

Tonas:

* dėkingas;
* aiškus;
* konkretus;
* pasitikėjimą keliantis;
* orientuotas į misiją.

---

## 17. Nuotraukų naudojimas

Pirmenybė realioms JP2 nuotraukoms, kai kalbama apie:

* bendruomenę;
* renginius;
* liturgiją;
* Alfa+;
* Mokinystę;
* savanorystę;
* vaikus ir šeimas;
* Misijų centro realybę.

Nuotraukos turi būti:

* šviesios;
* aiškios;
* pagarbios;
* natūralios;
* techniškai pakankamos kokybės;
* su aiškiu kontekstu.

Vengti:

* išplaukusių;
* labai tamsių;
* nejaukių;
* chaotiškų;
* neaiškaus turinio;
* jautrių situacijų be patvirtinimo.

Vaikų nuotraukas naudoti tik su aiškiu žmogaus patvirtinimu.

---

## 18. SVG ir iliustracijų politika

Pirmenybė teikiama SVG iliustracijoms.

SVG naudoti:

* logotipams;
* ikonoms;
* Mokinystės kelionės simboliams;
* Misijos raktų simboliams;
* hero iliustracijai;
* schemoms;
* flat-style iliustracijoms;
* dekoratyviems motyvams.

Nenaudoti sudėtingų CSS piešinių, jei tą patį galima pateikti SVG.

PNG galima naudoti kaip tarpinį etapą.

Nuotraukoms naudoti WebP.

Rekomenduojama struktūra:

```text
public/images/
public/images/logos/
public/images/illustrations/
public/images/icons/
```

Logotipai ir simbolinės iliustracijos turi būti skaidraus fono, be nereikalingų rėmelių, melsvų blokų ar atsitiktinių fonų.

---

## 19. Mobilus dizainas

Mobile nėra antrinė versija. Ji turi būti projektuojama nuo pradžių.

Principai:

* aiškus meniu;
* gerai skaitomi tekstai;
* pakankami tarpai;
* CTA turi būti lengvai paspaudžiami;
* kortelės turi virsti vertikalia struktūra;
* hero neturi būti per aukštas ar per sunkus;
* vizualai turi prisitaikyti ir neišstumti turinio.

Rekomenduojama:

* vengti daugiau nei 2–3 CTA vienoje mobile hero sekcijoje;
* laikyti tekstus trumpus;
* naudoti vertikalias kelionės / kortelių struktūras;
* užtikrinti, kad kontaktai ir pamaldų tvarka būtų lengvai pasiekiami.

---

## 20. Prieinamumas

Svetainė turi būti prieinama kuo platesniam žmonių ratui.

Reikalavimai:

* pakankamas kontrastas;
* aiškios nuorodos;
* semantiška HTML struktūra;
* alt tekstai nuotraukoms;
* SVG turėti prasmingus `aria-label` arba būti dekoratyvūs, jei neteikia informacijos;
* forma / CTA turi būti suprantami;
* gerbti `prefers-reduced-motion`.

Nenaudoti spalvos kaip vienintelio informacijos nešėjo. Jei spalva žymi Mokinystės žingsnį ar Misijos kryptį, pridėti ir tekstinį pavadinimą.

---

## 21. Komponentų kokybės standartas

Kiekvienas komponentas turi būti:

* aiškiai pavadintas;
* pernaudojamas;
* neperkrautas;
* suderinamas su dizaino sistema;
* pritaikytas mobile;
* be perteklinių priklausomybių;
* lengvai redaguojamas;
* nepažeidžiantis JP2 Vizijos krypties.

Prieš kuriant naują komponentą, agentas turi patikrinti, ar jau yra panašus komponentas.

---

## 22. Dizaino kokybės klausimai agentui

Prieš pateikdamas pakeitimą, agentas turi įsivertinti:

1. Ar dizainas šviesus ir erdvus?
2. Ar nėra per tamsių, sunkių blokų?
3. Ar JP2 mėlyna ir geltona naudojamos nuosekliai?
4. Ar kortelės nėra perkrautos?
5. Ar hero nėra generic church template?
6. Ar vizualai dera su JP2 Vizija?
7. Ar tekstas gerai skaitomas telefone?
8. Ar CTA aiškūs?
9. Ar nėra sudėtingų CSS piešinių ten, kur reikia SVG?
10. Ar puslapis atrodo kaip JP2 svetainė, o ne bendras šablonas?
