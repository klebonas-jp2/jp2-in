# docs/site-map.md — JP2.in svetainės struktūra ir puslapių medis

## 1. Dokumento paskirtis

Šis dokumentas apibrėžia naujos **jp2.in** svetainės informacinę architektūrą:

* pagrindinį meniu;
* poskyrius;
* prioritetinius puslapius;
* URL struktūrą;
* pradžios puslapio naratyvą;
* ryšį tarp viešos svetainės ir išorinių sistemų.

Šis dokumentas turi būti skaitomas kartu su:

```text
AGENTS.md
docs/jp2-vizija.md
docs/design-system.md
docs/content-guidelines.md
docs/workflow.md
```

Jeigu puslapio struktūra ar meniu sprendimas prieštarauja `docs/jp2-vizija.md`, pirmenybė visada teikiama JP2 Vizijos dokumentui.

---

## 2. Pagrindinis svetainės principas

Viešoji **jp2.in** svetainė yra parapijos „vitrina“ ir skaitmeniniai vartai į JP2 Viziją, Mokinystę ir Misiją.

Ji turi padėti žmogui:

1. suprasti, kas yra JP2 parapija;
2. rasti aktualią praktinę informaciją;
3. atrasti maldą, sakramentus ir dvasinį gyvenimą;
4. įsitraukti į bendruomenę;
5. pradėti arba tęsti Mokinystės kelionę;
6. suprasti JP2 Misijų centro prasmę;
7. paremti JP2 Misiją;
8. nueiti į tinkamą išorinę sistemą, kai reikia registracijos, kontakto, aukos ar vidinės bendruomenės erdvės.

Svetainė nėra tik informacinis katalogas. Ji turi padėti žmogui žengti kitą aiškų žingsnį: pažinti, melstis, dalyvauti, registruotis, prisijungti, tarnauti arba paremti.

---

## 3. Pagrindinis meniu

Pagrindinis meniu:

```text
AKTUALU
NAUJIENOS
DVASINGUMAS
BENDRUOMENĖ
MOKINYSTĖ
MISIJŲ CENTRAS
PARAMA
```

Atskiras dešinėje esantis mygtukas arba išskirtinis CTA:

```text
BENDRUOMENĖS ERDVĖ
```

Logotipas veda į pradžios puslapį.

Pagrindiniame meniu nenaudoti atskiro punkto „Pradžia“.

---

## 4. Pagrindiniai URL

Pirmo etapo pagrindiniai URL:

```text
/                         Pradžios puslapis
/aktualu                  Aktualu
/naujienos                Naujienos
/dvasingumas              Dvasingumas
/bendruomene              Bendruomenė
/mokinyste                Mokinystė
/misiju-centras           Misijų centras
/parama                   Parama
```

Pagrindiniai praktiniai URL:

```text
/aktualu/kontaktai
/aktualu/darbo-laikas
/aktualu/pamaldu-tvarka
/aktualu/kunigu-patarnavimai
/aktualu/sv-misiu-intencijos
/aktualu/registracijos
/aktualu/reikia-pazymos
/aktualu/duk
```

Pagrindiniai JP2 tapatybės URL:

```text
/bendruomene/jp2-vizija
/bendruomene/misijos-raktai
/mokinyste/kas-yra-mokinystes-kelione
```

URL naudoti be lietuviškų raidžių.

Puslapių pavadinimuose ir meniu tekstuose naudoti taisyklingą lietuvių kalbą su lietuviškomis raidėmis.

---

## 5. Pagrindinio meniu medis

### 5.1. AKTUALU

Paskirtis: greitai rasti svarbiausią praktinę informaciją.

Poskyriai:

```text
Kontaktai
Darbo laikas
Pamaldų tvarka
Kunigų patarnavimai
Šv. Mišių intencijos
Registracijos
Reikia pažymos
DUK
```

URL:

```text
/aktualu
/aktualu/kontaktai
/aktualu/darbo-laikas
/aktualu/pamaldu-tvarka
/aktualu/kunigu-patarnavimai
/aktualu/sv-misiu-intencijos
/aktualu/registracijos
/aktualu/reikia-pazymos
/aktualu/duk
```

Pastabos agentui:

* „Šv. Mišių“ rašyti iš didžiųjų raidžių: **Šv. Mišių**.
* Pamaldų laikų nekeisti be žmogaus patvirtinimo.
* Kontaktų, telefonų, el. pašto ir registracijų nuorodų nekeisti be žmogaus patvirtinimo.
* Jei informacija ateina iš ChMeetings, Google Calendar ar kitos sistemos, svetainėje geriau rodyti aiškų kvietimą / nuorodą, o ne dubliuoti duomenis.
* Praktiniuose puslapiuose turi būti aiškus kitas žingsnis: susisiekti, registruotis, ateiti, pateikti prašymą arba pereiti į patvirtintą sistemą.

---

### 5.2. NAUJIENOS

Paskirtis: skelbti JP2 parapijos naujienas, kvietimus, renginius, skelbimus, įvykių atspindžius ir svarbius pranešimus.

Pagrindinis URL:

```text
/naujienos
```

Rekomenduojami poskyriai / kategorijos:

```text
JP2 naujienos
Renginiai
Skelbimai
Klebono žodis
Kalendorius
Parapijos laikraštis
Socialiniai tinklai
```

Rekomenduojami kategorijų URL:

```text
/naujienos/kategorija/jp2-naujienos
/naujienos/kategorija/renginiai
/naujienos/kategorija/skelbimai
/naujienos/kategorija/klebono-zodis
/naujienos/kalendorius
/naujienos/parapijos-laikrastis
/naujienos/socialiniai-tinklai
```

Atskiras naujienos URL:

```text
/naujienos/<slug>
```

Pastabos agentui:

* `NAUJIENOS` skiltis skirta parapijos informaciniam srautui: naujienoms, renginiams, skelbimams, kvietimams ir įvykių atspindžiams.
* Pastovūs dvasinio turinio puslapiai `Dievo Žodis`, `Liudijimai`, `Maldos` ir `Skaitiniai` priklauso `DVASINGUMAS` skilčiai ir neturi būti dubliuojami kaip `NAUJIENOS` kategorijos.
* `NAUJIENOS` skiltyje gali būti skelbiami kvietimai, renginiai, pranešimai ar įvykių atspindžiai, susiję su dvasinėmis temomis, pvz.:

  * liudijimų vakaras;
  * maldos popietė;
  * Dievo Žodžio vakaras;
  * rekolekcijos;
  * skaitinių ar maldos iniciatyva;
  * kvietimas į dvasinį renginį.
* Tokiais atvejais naujiena turi būti priskiriama tinkamai naujienų kategorijai, pvz. `Renginiai`, `JP2 naujienos` arba `Skelbimai`, o ne kuriama atskira `Liudijimai`, `Maldos`, `Dievo Žodis` ar `Skaitiniai` kategorija naujienose.
* Kiekviena naujiena turi turėti SEO pavadinimą, meta aprašymą, datą, kategoriją ir, jei įmanoma, nuotrauką.
* Jei naujiena susijusi su registracija, CTA turi vesti į patvirtintą registracijos sistemą.
* Socialinių tinklų tekstus galima adaptuoti, bet ne kopijuoti mechaniškai, jei reikia aiškesnio svetainės formato.
* Naujienos neturi dubliuoti visos registracijos ar renginio valdymo informacijos, jeigu ši valdoma ChMeetings sistemoje.
* Kalendorius gali būti atskiras puslapis arba įterpta / susieta Google Calendar ar ChMeetings kalendoriaus peržiūra, jei taip patvirtinta.

---

### 5.3. DVASINGUMAS

Paskirtis: padėti žmogui atrasti JP2 parapijos dvasinį gyvenimą, Dievo Žodį, sakramentus, maldą ir šventuosius globėjus.

Poskyrių eiliškumas:

```text
JP2 testamentas mums
Dievo Žodis
Sakramentai
Atlaidai
Šventieji globėjai
Liudijimai
Maldos
Skaitiniai
```

URL:

```text
/dvasingumas
/dvasingumas/jp2-testamentas-mums
/dvasingumas/dievo-zodis
/dvasingumas/sakramentai
/dvasingumas/atlaidai
/dvasingumas/sventieji-globejai
/dvasingumas/liudijimai
/dvasingumas/maldos
/dvasingumas/skaitiniai
```

Pastabos agentui:

* Dvasingumo tekstai turi būti pastoraciški, ne akademiniai.
* Sakramentų puslapiai turi būti aiškūs žmogui, kuris galbūt retai lankosi bažnyčioje.
* Teologinių formuluočių nekeisti drąsiai — jei kyla abejonių, pažymėti kaip reikalingą žmogaus patvirtinimą.
* JP2 testamentas turi būti pristatomas kaip dvasinis palikimas mūsų parapijai, ne vien biografinė informacija.
* Dvasingumo puslapiai turi vesti žmogų į maldą, sakramentus, Dievo Žodį ir gyvą santykį su Kristumi.
* `Dievo Žodis`, `Liudijimai`, `Maldos` ir `Skaitiniai` priklauso šiai skilčiai kaip pastovūs dvasinio turinio puslapiai.
* Jeigu vyksta konkretus renginys ar kvietimas, susijęs su šiomis temomis, jis gali būti skelbiamas `NAUJIENOS` skiltyje kaip `Renginiai`, `JP2 naujienos` arba `Skelbimai`.

---

### 5.4. BENDRUOMENĖ

Paskirtis: parodyti JP2 kaip gyvą Kristaus mokinių bendruomenę ir padėti žmogui atrasti įsitraukimo vietą.

Rekomenduojami poskyriai:

```text
JP2 Vizija
Misijos raktai
Ganytojai
Sielovados komanda
Tarnystės
Savanorystė
Grupelės
Pasiruošimas sakramentams
Tikėjimo kursai
Prašau maldos
Prisijunk
```

URL:

```text
/bendruomene
/bendruomene/jp2-vizija
/bendruomene/misijos-raktai
/bendruomene/ganytojai
/bendruomene/sielovados-komanda
/bendruomene/tarnystes
/bendruomene/savanoryste
/bendruomene/grupeles
/bendruomene/pasiruosimas-sakramentams
/bendruomene/tikejimo-kursai
/bendruomene/prasau-maldos
/bendruomene/prisijunk
```

Misijos raktų atskiri puslapiai:

```text
/bendruomene/misijos-raktai/tikejimo-raktas
/bendruomene/misijos-raktai/evangelizacijos-raktas
/bendruomene/misijos-raktai/sventimo-raktas
/bendruomene/misijos-raktai/tarnystes-raktas
/bendruomene/misijos-raktai/bendrystes-raktas
```

Pastabos agentui:

* `JP2 Vizija` yra esminis tapatybės puslapis. Jame pristatoma, kodėl parapija gyvena šūkiu „Atverkite duris Kristui!“ ir kaip Vizija siejasi su Misija bei Mokinyste.
* `Misijos raktai` turi paaiškinti penkis JP2 Misijos raktus: Tikėjimo, Evangelizacijos, Šventimo, Tarnystės ir Bendrystės.
* Misijos raktų puslapiuose naudoti kanonines formuluotes iš `docs/jp2-vizija.md`.
* Misijos raktų spalvas, simbolius ir vizualinę logiką imti iš `docs/design-system.md`.
* Viešame puslapyje pristatyti grupes ir tarnystes, bet kontaktą / registraciją geriau nukreipti į ChMeetings arba kitą patvirtintą formą.
* Grupės neturi būti dubliuojamos skirtingose sistemose, jei galima naudoti vieną šaltinį.
* Žmogui turi būti aišku, kaip žengti kitą žingsnį: prisijungti, parašyti, registruotis, ateiti.

---

### 5.5. MOKINYSTĖ

Paskirtis: pristatyti Mokinystės kelionę kaip JP2 parapijos formacijos kelią.

Poskyriai:

```text
Kas yra Mokinystės kelionė?
Alfa+ Dalyviai
Bendrakeleiviai
Jėzaus mokiniai
Palydėtojai
Registracija į kelionę
Mokinystės metų ciklas
Liudijimai iš kelionės
```

URL:

```text
/mokinyste
/mokinyste/kas-yra-mokinystes-kelione
/mokinyste/alfa-dalyviai
/mokinyste/bendrakeleiviai
/mokinyste/jezaus-mokiniai
/mokinyste/palydetojai
/mokinyste/registracija
/mokinyste/metu-ciklas
/mokinyste/liudijimai
```

Pastabos agentui:

* Formuluotes imti iš `docs/jp2-vizija.md`.
* Mokinystės progresija turi būti aiški:
  `Susitikimas → Apsisprendimas → Augimas → JP2 Misijos priėmimas`.
* Žingsnių spalvos turi būti nuoseklios:

  * Alfa+ Dalyviai — žalia;
  * Bendrakeleiviai — raudona;
  * Jėzaus mokiniai — mėlyna;
  * Palydėtojai — geltona.
* Registracijos turi vesti į patvirtintą registracijos sistemą.
* Palydėtojų sritis neapsprendžia temų turinio, bet gali teikti kryptį ir patarti.
* Mokinystės kelionės puslapiuose turi būti aišku, kad tai nėra vien kursų sąrašas, bet parapijos formacijos kelias į Jėzaus mokinystę ir JP2 Misiją.

---

### 5.6. MISIJŲ CENTRAS

Paskirtis: pristatyti JP2 Misijų centrą kaip namus maldai, mokinystei ir misijai.

Pagrindinė žinutė:

> **Statome ne tik pastatą, bet namus maldai, mokinystei ir misijai.**

Rekomenduojami poskyriai:

```text
Projektas ir idėja
Architektai ir statytojai
Reikalingos lėšos
Šventovės statytojų knyga
Einamieji darbai
Prisidėk
```

URL:

```text
/misiju-centras
/misiju-centras/projektas-ir-ideja
/misiju-centras/architektai-ir-statytojai
/misiju-centras/reikalingos-lesos
/misiju-centras/sventoves-statytoju-knyga
/misiju-centras/einamieji-darbai
/misiju-centras/prisidek
```

Pastabos agentui:

* Misijų centras nėra tik statybų informacija.
* Pirmiausia rodyti misijos, maldos, bendruomenės, mokinystės ir Naujosios evangelizacijos prasmę.
* Techninė informacija reikalinga, bet neturi užgožti vizijos.
* Aukojimo informacijos nekeisti be žmogaus patvirtinimo.
* Misijų centro puslapiai turi padėti žmogui suprasti, kodėl statome, kam tai reikalinga ir kaip jis gali prisidėti.

---

### 5.7. PARAMA

Paskirtis: aiškiai, šiltai ir patikimai pakviesti žmogų prisidėti prie JP2 Misijos.

Rekomenduojami poskyriai:

```text
JP2 fondas
Prašome paremti
Mūsų rėmėjai
Laimėti projektai
Ieškai pagalbos?
```

URL:

```text
/parama
/parama/jp2-fondas
/parama/prasome-paremti
/parama/musu-remejai
/parama/laimeti-projektai
/parama/ieskai-pagalbos
```

Pastabos agentui:

* Paramos tekstai turi būti dėkingi ir orientuoti į misiją.
* Vengti agresyvios fundraising kalbos.
* Aukojimo sąskaitų, Paysera, banko ar kitų paramos nuorodų nekeisti be žmogaus patvirtinimo.
* Parama gali būti pristatoma kaip malda, auka, savanorystė, tarnystė ir dalyvavimas JP2 Misijoje.
* Paramos puslapiai turi kelti pasitikėjimą, būti skaidrūs ir aiškiai rodyti, kam skiriama parama.

---

## 6. Pradžios puslapio naratyvas

Pradžios puslapis turi veikti kaip skaitmeniniai vartai į JP2 Viziją, Mokinystę ir Misiją.

Rekomenduojama seka:

```text
Hero — kvietimas.
Vizija — atsakas.
Mokinystė — kelionė.
Misijos raktai — priemonės.
Aktualu — praktinis gyvenimas.
Misijų centras — ateities namai.
Bendruomenė — žmonės.
Parama — prisidėjimas.
Kontaktai / Footer — durys atviros.
```

Pradžios puslapio sekcijos:

1. Hero
2. Vizija
3. Mokinystės kelionė
4. Misijos raktai
5. Aktualu
6. Misijų centras
7. Bendruomenė
8. Parama
9. Kontaktai / Footer

Pagrindinės Hero CTA kryptys:

```text
Pažink JP2!
Keliauk kartu!
Paremk JP2 Misiją!
```

Atitinkamos nuorodos:

```text
Pažink JP2!            → /bendruomene/jp2-vizija
Keliauk kartu!         → /mokinyste
Paremk JP2 Misiją!     → /parama
```

Pradžios puslapio sekcijos turi būti ne atsitiktiniai blokai, o aiški kelionė nuo kvietimo iki įsitraukimo.

---

## 7. Pirmo etapo puslapiai

Pirmame etape sukurti:

```text
/
/aktualu
/aktualu/kontaktai
/aktualu/pamaldu-tvarka
/aktualu/registracijos
/aktualu/duk
/naujienos
/dvasingumas
/bendruomene
/bendruomene/jp2-vizija
/mokinyste
/mokinyste/kas-yra-mokinystes-kelione
/misiju-centras
/parama
```

Šie puslapiai turi sudaryti minimaliai veikiančią viešą svetainę.

Pirmame etape ypač svarbu, kad veiktų:

* pradžios puslapis;
* praktinės informacijos keliai;
* JP2 Vizijos puslapis;
* Mokinystės kelionės pristatymas;
* Misijų centro pristatymas;
* Paramos kelias.

---

## 8. Antro etapo puslapiai

Antrame etape plėsti:

```text
/aktualu/darbo-laikas
/aktualu/kunigu-patarnavimai
/aktualu/sv-misiu-intencijos
/aktualu/reikia-pazymos

/naujienos/kategorija/jp2-naujienos
/naujienos/kategorija/renginiai
/naujienos/kategorija/skelbimai
/naujienos/kategorija/klebono-zodis
/naujienos/kalendorius
/naujienos/parapijos-laikrastis
/naujienos/socialiniai-tinklai

/dvasingumas/jp2-testamentas-mums
/dvasingumas/dievo-zodis
/dvasingumas/sakramentai
/dvasingumas/atlaidai
/dvasingumas/sventieji-globejai
/dvasingumas/liudijimai
/dvasingumas/maldos
/dvasingumas/skaitiniai

/bendruomene/misijos-raktai
/bendruomene/misijos-raktai/tikejimo-raktas
/bendruomene/misijos-raktai/evangelizacijos-raktas
/bendruomene/misijos-raktai/sventimo-raktas
/bendruomene/misijos-raktai/tarnystes-raktas
/bendruomene/misijos-raktai/bendrystes-raktas
/bendruomene/ganytojai
/bendruomene/sielovados-komanda
/bendruomene/tarnystes
/bendruomene/savanoryste
/bendruomene/grupeles
/bendruomene/pasiruosimas-sakramentams
/bendruomene/tikejimo-kursai
/bendruomene/prasau-maldos
/bendruomene/prisijunk

/mokinyste/alfa-dalyviai
/mokinyste/bendrakeleiviai
/mokinyste/jezaus-mokiniai
/mokinyste/palydetojai
/mokinyste/registracija
/mokinyste/metu-ciklas
/mokinyste/liudijimai

/misiju-centras/projektas-ir-ideja
/misiju-centras/architektai-ir-statytojai
/misiju-centras/reikalingos-lesos
/misiju-centras/sventoves-statytoju-knyga
/misiju-centras/einamieji-darbai
/misiju-centras/prisidek

/parama/jp2-fondas
/parama/prasome-paremti
/parama/musu-remejai
/parama/laimeti-projektai
/parama/ieskai-pagalbos
```

Antro etapo puslapiai gali būti kuriami palaipsniui, kai yra parengtas turinys, patvirtintos nuorodos ir aiški vizualinė kryptis.

---

## 9. Ryšys su ChMeetings ir kitomis sistemomis

Viešoji svetainė neturi be reikalo dubliuoti ChMeetings turinio.

ChMeetings yra pagrindinis:

* registracijų;
* grupių;
* kontaktų;
* vidinės komunikacijos;
* renginių valdymo

centras.

Viešoje svetainėje pateikiama:

* aiškus kvietimas;
* kontekstas;
* trumpas paaiškinimas;
* CTA;
* nuoroda į ChMeetings arba kitą patvirtintą sistemą.

Jeigu galima rinktis tarp dubliavimo ir nuorodos, pirmenybė teikiama nuorodai.

Kontaktų formos, registracijos, maldos prašymai ir aukojimo keliai turi būti nukreipiami į patvirtintas sistemas, o ne kuriami kaip neapsaugotos statinės svetainės formos.

---

## 10. URL taisyklės

URL turi būti:

* trumpi;
* aiškūs;
* be lietuviškų raidžių;
* mažosiomis raidėmis;
* su brūkšneliais vietoje tarpų;
* prasmingi žmogui ir SEO.

Pavyzdžiai:

```text
/aktualu/pamaldu-tvarka
/aktualu/sv-misiu-intencijos
/naujienos/kategorija/jp2-naujienos
/naujienos/kalendorius
/dvasingumas/dievo-zodis
/dvasingumas/skaitiniai
/mokinyste/jezaus-mokiniai
/bendruomene/jp2-vizija
/bendruomene/misijos-raktai
/misiju-centras/reikalingos-lesos
```

Vengti:

```text
/page1
/new-page
/daugiau
/skaityti
/untitled
```

URL turi atspindėti svetainės struktūrą. Nereikia kurti atsitiktinių trumpinių, jei aiškus pilnas URL geriau padeda žmogui ir SEO.

---

## 11. Breadcrumbs

Jeigu naudojami breadcrumbs, jie turi būti aiškūs:

```text
Pradžia / Aktualu / Pamaldų tvarka
Pradžia / Naujienos / JP2 naujienos
Pradžia / Dvasingumas / Dievo Žodis
Pradžia / Bendruomenė / JP2 Vizija
Pradžia / Bendruomenė / Misijos raktai
Pradžia / Mokinystė / Jėzaus mokiniai
Pradžia / Misijų centras / Prisidėk
```

Nors pagrindiniame meniu nėra punkto „Pradžia“, breadcrumbs struktūroje galima naudoti „Pradžia“.

---

## 12. Agentui svarbios taisyklės

Agentas turi:

1. Laikytis šio puslapių medžio.
2. Nekurti naujų pagrindinio meniu punktų be žmogaus patvirtinimo.
3. Nekurti atsitiktinių URL.
4. Naudoti lietuviškus puslapių pavadinimus, bet URL be lietuviškų raidžių.
5. Nekeisti pamaldų, kontaktų, registracijų, aukojimo ar ChMeetings nuorodų be žmogaus patvirtinimo.
6. Jei reikia naujo puslapio, pirmiausia pasiūlyti, kur jis įsirašo į esamą struktūrą.
7. Jei puslapis susijęs su JP2 Vizija, Mokinyste ar Misijos raktais, remtis `docs/jp2-vizija.md`.
8. Jei puslapis susijęs su dizainu, remtis `docs/design-system.md`.
9. Jei puslapis susijęs su tekstų tonu, remtis `docs/content-guidelines.md`.
10. Jei puslapis susijęs su darbo eiga, remtis `docs/workflow.md`.
11. Jei kyla neaiškumas dėl struktūros, nesiūlyti naujo meniu punkto iš karto — pirmiausia pasiūlyti, į kurią esamą skiltį turinys geriausiai įsirašo.
12. Jei puslapis veda į registraciją, auką, kontaktą ar bendruomenės erdvę, naudoti patvirtintas integracijas ir nekeisti nuorodų be žmogaus patvirtinimo.
13. Pastovūs dvasinio turinio puslapiai (`Dievo Žodis`, `Liudijimai`, `Maldos`, `Skaitiniai`) priklauso `DVASINGUMAS` skilčiai ir neturi būti dubliuojami kaip `NAUJIENOS` kategorijos.
14. `NAUJIENOS` skiltyje gali būti skelbiami kvietimai, renginiai, pranešimai ar įvykių atspindžiai, susiję su dvasinėmis temomis, tačiau jie turi būti priskiriami tinkamai naujienų kategorijai, pvz. `Renginiai`, `JP2 naujienos` arba `Skelbimai`.
