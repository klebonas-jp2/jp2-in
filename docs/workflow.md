# docs/workflow.md — JP2.in svetainės darbo eiga su agentu

## 1. Dokumento paskirtis

Šis dokumentas apibrėžia, kaip agentas turi dirbti su naujos **jp2.in** svetainės projektu.

Jis skirtas tam, kad visi pakeitimai būtų:

* aiškūs;
* atsekami;
* peržiūrimi;
* saugūs;
* suderinti su JP2 Vizija;
* publikuojami tik po žmogaus patvirtinimo.

Šis dokumentas turi būti skaitomas kartu su:

```text
AGENTS.md
docs/jp2-vizija.md
docs/design-system.md
docs/site-map.md
docs/content-guidelines.md
```

Jeigu darbo eigos sprendimas kelia riziką turiniui, dizainui, jautriems duomenims ar publikavimui, agentas turi pažymėti tai kaip reikalingą žmogaus sprendimą.

---

## 2. Pagrindinė darbo taisyklė

Pagrindinė taisyklė:

```text
Agentas paruošia.
Žmogus peržiūri.
Žmogus patvirtina.
Tik tada publikuojama.
```

Agentas neturi tiesiogiai publikuoti pakeitimų į produkcinę svetainę be žmogaus patvirtinimo.

---

## 3. Bendra darbo eiga

Standartinė darbo eiga:

```text
1. Žmogus pateikia užduotį.
2. Agentas perskaito susijusius projekto dokumentus.
3. Agentas įvertina, kokie failai bus keičiami.
4. Agentas sukuria ar pakeičia failus.
5. Agentas paleidžia patikras, jei įmanoma.
6. Agentas parengia Pull Request.
7. Žmogus peržiūri pakeitimus.
8. Žmogus patvirtina arba paprašo korekcijų.
9. Po patvirtinimo pakeitimai sujungiami į pagrindinę šaką.
10. Svetainė publikuojama.
```

Jei projektas dar neturi automatinio publikavimo, agentas turi pateikti pakeitimus kaip failus arba Pull Request, bet ne laikyti jų paskelbtais.

---

## 4. GitHub darbo modelis

Rekomenduojamas modelis:

```text
main        — stabili, publikuojama svetainės versija
feature/*   — nauji pakeitimai
fix/*       — klaidų taisymai
content/*   — turinio pakeitimai
design/*    — dizaino pakeitimai
```

Pavyzdžiai:

```text
feature/homepage-first-version
content/mokinyste-intro
design/mission-keys-svg
fix/mobile-header-spacing
```

Agentas neturi dirbti tiesiogiai `main` šakoje, jei projektas jau veikia per Pull Request modelį.

Jei projektas naudoja automatinį publikavimą iš `main`, agentas turi aiškiai suprasti, kad sujungimas į `main` gali iš karto publikuoti pakeitimus.

---

## 5. Pull Request principas

Kiekvienas reikšmingas pakeitimas turi būti pateiktas per Pull Request.

Pull Request turi turėti:

* aiškią santrauką;
* pakeistų puslapių sąrašą;
* pakeistų dokumentų sąrašą;
* SEO pakeitimus, jei buvo;
* vizualinius pakeitimus, jei buvo;
* patikras;
* vietas, kur reikia žmogaus sprendimo.

Rekomenduojama PR aprašymo struktūra:

```markdown
## Kas pakeista

## Kokie puslapiai paveikti

## Kokie dokumentai / komponentai pakeisti

## SEO / turinio pakeitimai

## Vizualiniai pakeitimai

## Reikia žmogaus patvirtinimo

## Patikros
```

PR aprašyme agentas neturi nutylėti nepatikrintų vietų. Jeigu kažko negalėjo patikrinti, tai turi būti aiškiai parašyta.

---

## 6. Kada reikia žmogaus patvirtinimo

Žmogaus patvirtinimo visada reikia, jei keičiama:

* JP2 Vizijos kanoninės formuluotės;
* Misijos raktų kanoninės formuluotės;
* Mokinystės kelionės kanoninės formuluotės;
* pamaldų laikai;
* kontaktiniai duomenys;
* el. pašto adresai;
* telefono numeriai;
* ChMeetings nuorodos;
* registracijos nuorodos;
* aukojimo sąskaitos;
* Paysera ar kitos paramos nuorodos;
* privatumo politika;
* vaikų nuotraukų publikavimas;
* jautrios liudijimų istorijos;
* domeno ar publikavimo nustatymai;
* pagrindinio meniu struktūra;
* pagrindinė spalvų sistema;
* oficialūs logotipai ar simboliai.

Jei agentas abejoja, jis turi pažymėti pakeitimą kaip reikalingą žmogaus patvirtinimą.

---

## 7. Patikrų principas

Prieš pateikdamas Pull Request, agentas turi paleisti įmanomas patikras.

Rekomenduojamos patikros:

```bash
npm install
npm run build
npm run check
npm run lint
```

Paleisti tik tas komandas, kurios realiai egzistuoja projekte.

Jei patikros nepavyko paleisti, PR aprašyme nurodyti:

* kokia patikra nepaleista;
* kodėl nepaleista;
* ar tai blokuoja peržiūrą.

Agentas neturi teigti, kad testai ar build sėkmingi, jei jų nepaleido.

Jeigu patikros nepavyksta dėl jau egzistavusios projekto problemos, agentas turi tai aiškiai atskirti nuo savo pakeitimų.

---

## 8. Turinio kūrimo eiga

Kuriant naują puslapį, agentas turi:

1. Patikrinti `docs/site-map.md`, kur puslapis priklauso.
2. Patikrinti `docs/jp2-vizija.md`, jei puslapis susijęs su JP2 Vizija, Mokinyste, Misijos raktais ar Misijų centru.
3. Patikrinti `docs/content-guidelines.md`, kad tekstas atitiktų toną ir struktūrą.
4. Patikrinti `docs/design-system.md`, jei puslapis turi vizualinių komponentų.
5. Sukurti puslapį su aiškiu H1, įvadu, turinio struktūra, CTA ir SEO.
6. Pažymėti vietas, kur reikia žmogaus patvirtinimo.

Jeigu agentas kuria tekstą pagal laikiną prielaidą, tai turi būti pažymėta kaip reikalinga peržiūros.

---

## 9. Dizaino keitimo eiga

Kuriant ar keičiant dizainą, agentas turi:

1. Remtis `docs/design-system.md`.
2. Laikytis JP2 spalvų sistemos.
3. Išlaikyti šviesų, erdvų ir neperkrautą dizainą.
4. Vengti per tamsių, sunkių blokų.
5. Vengti generinių bažnytinių šablonų estetikos.
6. Naudoti SVG ar profesionalius grafinius failus vietoje sudėtingų CSS piešinių, jei kuriami simboliniai vizualai.
7. Patikrinti mobilų vaizdą.
8. Gerbti prieinamumo principus.

Jei dizaino pakeitimas keičia bendrą svetainės kryptį, reikia žmogaus patvirtinimo.

Dizaino pakeitimas turi būti vertinamas ne tik pagal tai, ar „veikia“, bet ir pagal tai, ar jis atitinka JP2 svetainės vizualinę kryptį: šviesą, erdvę, aiškumą, kvietimą ir JP2 Vizijos dvasią.

---

## 10. Vizualų ir nuotraukų darbo eiga

Naudojant nuotraukas ar iliustracijas, agentas turi:

1. Teikti pirmenybę realioms JP2 nuotraukoms ten, kur kalbama apie tikrą parapijos gyvenimą.
2. Teikti pirmenybę SVG iliustracijoms simboliniams motyvams.
3. Nenaudoti jautrių nuotraukų be žmogaus patvirtinimo.
4. Vaikų nuotraukas naudoti tik po aiškaus žmogaus patvirtinimo.
5. Parengti alt tekstą.
6. Jei reikia, pažymėti nuotrauką kaip:

   * `reikia-perziuros`
   * `nenaudoti-viesinimui`
   * `tinka-tik-vidiniam-archyvui`

Jei kyla abejonė dėl privatumo ar sutikimo, nuotraukos nenaudoti be žmogaus sprendimo.

Logotipams, Misijos raktams, Mokinystės kelionės simboliams ir hero iliustracijoms pirmenybė teikiama SVG arba profesionaliai parengtiems grafiniams failams. Sudėtingi CSS piešiniai neturi būti laikomi galutiniu simbolinių vizualų sprendimu.

---

## 11. Integracijų darbo eiga

Svetainė gali vesti į:

* ChMeetings;
* Google Calendar;
* Google Forms;
* Google Sheets;
* Google Drive;
* Facebook / Elfsight;
* Paysera;
* bankinius pavedimus;
* kitas patvirtintas sistemas.

Agentas negali savarankiškai keisti integracijų nuorodų be žmogaus patvirtinimo.

Jeigu tą pačią funkciją galima įgyvendinti per ChMeetings, pirmenybė teikiama ChMeetings, o ne naujai Google Forms ar kitai atskirai formai, nebent žmogus aiškiai patvirtina kitą sprendimą.

Jei puslapis susijęs su registracija, kontaktu, auka ar bendruomenės erdve, agentas turi:

1. naudoti patvirtintą nuorodą;
2. nekurti neapsaugotos statinės formos;
3. nekurti naujo duomenų rinkimo būdo be patvirtinimo;
4. PR aprašyme pažymėti, kokia sistema naudojama.

ChMeetings yra pagrindinis registracijų, grupių, kontaktų, maldos prašymų ir vidinės bendruomenės valdymo centras, kai tik tai įmanoma įgyvendinti.

Viešoji svetainė turi pateikti aiškų kvietimą, kontekstą ir CTA, bet neturi be reikalo dubliuoti ChMeetings valdomos informacijos.

---

## 12. Naujienų darbo eiga

Kuriant naujieną, agentas turi:

1. Nustatyti, ar tai tikrai naujiena, o ne pastovus puslapis.
2. Parinkti tinkamą kategoriją:

   * JP2 naujienos
   * Renginiai
   * Skelbimai
   * Klebono žodis
   * Kalendorius
   * Parapijos laikraštis
   * Socialiniai tinklai
3. Nepriskirti pastovių dvasinio turinio puslapių kaip naujienų kategorijų.
4. Parašyti trumpą įvadą.
5. Įtraukti datą, laiką, vietą, jei aktualu.
6. Pridėti CTA, jei reikia.
7. Jei registracija valdoma ChMeetings, nurodyti registracijos nuorodą, o ne dubliuoti visą valdymo informaciją.
8. Parengti SEO title ir meta description.

Pastovūs dvasinio turinio puslapiai (`Dievo Žodis`, `Liudijimai`, `Maldos`, `Skaitiniai`) nepriskiriami kaip naujienų kategorijos.

Tačiau konkretūs kvietimai, renginiai ar įvykių atspindžiai šiomis temomis gali būti skelbiami `NAUJIENOS` skiltyje kaip `Renginiai`, `JP2 naujienos` arba `Skelbimai`, pvz.:

* liudijimų vakaras;
* maldos popietė;
* Dievo Žodžio vakaras;
* rekolekcijos;
* skaitinių ar maldos iniciatyva;
* kvietimas į dvasinį renginį.

Tokiais atvejais agentas neturi kurti naujos `Liudijimai`, `Maldos`, `Dievo Žodis` ar `Skaitiniai` naujienų kategorijos.

Naujiena turi būti trumpa, aiški ir orientuota į veiksmą. Jei reikia išsamesnės registracijos ar renginio valdymo informacijos, ji turi būti laikoma patvirtintoje registracijos sistemoje arba kitame žmogaus patvirtintame šaltinyje.

---

## 13. Klaidų taisymo eiga

Taisant klaidą, agentas turi:

1. Aiškiai nustatyti problemą.
2. Taisyti kuo siauresnę vietą.
3. Nekeisti nesusijusių failų.
4. Paleisti aktualias patikras.
5. PR aprašyme nurodyti, kas buvo klaida ir kaip ji ištaisyta.

Jei klaida yra turinio, teologinės formuluotės, kontaktų, registracijų ar aukojimo informacijos srityje, gali reikėti žmogaus patvirtinimo.

Klaidų taisymo metu agentas neturi kartu atlikti nesusijusių dizaino, struktūros ar turinio „patobulinimų“, jei jie nėra užduoties dalis.

---

## 14. Failų organizavimas

Rekomenduojama struktūra:

```text
/
├── AGENTS.md
├── docs/
│   ├── jp2-vizija.md
│   ├── design-system.md
│   ├── site-map.md
│   ├── content-guidelines.md
│   └── workflow.md
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── content/
│   ├── pages/
│   ├── news/
│   ├── events/
│   ├── groups/
│   └── ministries/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── illustrations/
│   │   └── icons/
├── package.json
└── astro.config.mjs
```

Agentas turi vengti kurti atsitiktinius aplankus ar failų pavadinimus.

Jeigu projekte naudojamos Astro Content Collections, turinio kolekcijos gali būti laikomos `src/content/`. Agentas turi laikytis jau esamos projekto struktūros ir nekurti paralelinės turinio struktūros be žmogaus patvirtinimo.

Jeigu projekte jau yra pasirinkta viena turinio vieta, pvz. `src/content/` arba `content/`, agentas turi naudoti esamą struktūrą, o ne kurti antrą alternatyvią vietą tam pačiam turiniui.

---

## 15. Failų pavadinimų principai

Failų ir URL pavadinimai turi būti:

* mažosiomis raidėmis;
* be lietuviškų raidžių;
* su brūkšneliais vietoje tarpų;
* aiškūs ir prasmingi.

Pavyzdžiai:

```text
jp2-vizija.md
design-system.md
site-map.md
content-guidelines.md
workflow.md
misijos-raktai.astro
mokinystes-kelione.astro
sv-misiu-intencijos.astro
```

Vengti:

```text
newfile.md
final-final.md
page1.astro
test-copy.astro
Untitled.md
```

Failų pavadinimai turi padėti suprasti paskirtį. Nenaudoti laikinų pavadinimų kaip galutinių.

---

## 16. Kai trūksta informacijos

Jei agentui trūksta informacijos, jis turi:

1. Naudoti jau patvirtintus projekto dokumentus.
2. Jei klausimas nedidelis, priimti saugią laikiną prielaidą ir pažymėti ją kaip reikalingą peržiūros.
3. Jei klausimas susijęs su jautria ar faktine informacija, nekeisti be žmogaus patvirtinimo.
4. PR aprašyme nurodyti, ko trūksta.

Saugios laikinos frazės:

```text
Nuoroda bus įdėta po patvirtinimo.
Laikas bus patikslintas.
Registracijos nuoroda bus pridėta po patvirtinimo.
Ši vieta laukia žmogaus peržiūros.
```

Nenaudoti išgalvotų kontaktų, laikų, nuorodų ar finansinės informacijos.

Jeigu trūksta patvirtinto teksto, agentas gali pasiūlyti juodraštį, bet turi aiškiai pažymėti, kad jis laukia žmogaus peržiūros.

---

## 17. Publikavimo principas

Publikavimas turi vykti tik po žmogaus patvirtinimo.

Jei naudojamas automatinis deployment iš `main` šakos, agentas turi:

* dirbti atskiroje šakoje;
* pateikti Pull Request;
* nelieti `main` tiesiogiai;
* aiškiai nurodyti, kad sujungimas į `main` gali publikuoti pakeitimus.

Jei pakeitimas jautrus, PR neturi būti sujungtas be aiškaus žmogaus sprendimo.

Agentas neturi interpretuoti techninio build sėkmingumo kaip žmogaus turinio ar publikavimo patvirtinimo.

---

## 18. Versijų žymėjimas

Dokumentams galima naudoti versijų komentarus arba PR istoriją.

Rekomenduojami PR pavadinimai:

```text
Add JP2 vision documentation
Add design system guidelines
Update site map structure
Add content guidelines
Add workflow documentation
Create homepage first version
Update mission keys visuals
Fix mobile header spacing
```

Nereikia failų vadinti `final`, `final2`, `new-final`, jei jie dedami į GitHub. Versijų istoriją turi saugoti Git.

---

## 19. Agentui svarbios darbo taisyklės

Agentas turi:

1. Perskaityti susijusius `docs/` failus prieš keisdamas turinį ar dizainą.
2. Laikytis `docs/site-map.md` struktūros.
3. Laikytis `docs/jp2-vizija.md` kanoninių formuluočių.
4. Laikytis `docs/design-system.md` vizualinės sistemos.
5. Laikytis `docs/content-guidelines.md` tono ir turinio taisyklių.
6. Nekeisti jautrios informacijos be žmogaus patvirtinimo.
7. Nekurti naujų pagrindinio meniu punktų be žmogaus patvirtinimo.
8. Nekurti atsitiktinių URL ar failų pavadinimų.
9. Pateikti pakeitimus per Pull Request.
10. Aiškiai pažymėti vietas, kur reikia žmogaus peržiūros.
11. Netvirtinti, kad patikros praėjo, jei jos nebuvo paleistos.
12. Nevykdyti publikavimo be žmogaus patvirtinimo.
13. Pirmenybę registracijoms, kontaktams, maldos prašymams ir bendruomenės valdymui teikti ChMeetings, jei žmogus nėra patvirtinęs kito sprendimo.
14. Naujienų ir Dvasingumo turinį skirti pagal `docs/site-map.md` ir `docs/content-guidelines.md` taisykles.
15. Konkretų dvasinį renginį ar kvietimą galima skelbti Naujienose, bet pastovių dvasinio turinio puslapių nereikia versti Naujienų kategorijomis.
16. Laikytis jau esamos projekto failų struktūros ir nekurti paralelinių turinio vietų be žmogaus patvirtinimo.

---

## 20. Pirmasis praktinis agento darbas

Kai repozitorija paruošta, pirmasis praktinis agento darbas:

```text
Sukurti naujos jp2.in svetainės pradžios puslapį pagal:
- AGENTS.md
- docs/jp2-vizija.md
- docs/design-system.md
- docs/site-map.md
- docs/content-guidelines.md
- docs/workflow.md
```

Pirmame pradžios puslapyje turi būti:

* Hero sekcija;
* Vizijos blokas;
* Mokinystės kelionės blokas;
* Misijos raktų blokas;
* Aktualu blokas;
* Misijų centro blokas;
* Bendruomenės blokas;
* Parama blokas;
* Kontaktai / Footer;
* SEO title ir meta description;
* mobilus vaizdas;
* šviesus, erdvus dizainas.

Pirmoje versijoje prioritetas:

* teisinga struktūra;
* aiškūs tekstai;
* mobilus vaizdas;
* dizaino sistemos laikymasis;
* patvirtintų CTA krypčių naudojimas;
* SVG / iliustracijų vietų paruošimas.

Sudėtingos animacijos, galutinės iliustracijos ir integracijos gali būti tobulinamos vėlesniu etapu.
