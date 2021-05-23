
# Dokumentacija 
---

![alt text](https://image.over-blog.com/a-YYNOwOY6N_fInsL86S_j0uqsI=/filters:no_upscale()/image%2F0933696%2F20210122%2Fob_f4d937_tiesto-top-trance-1000-2021-asot-armin.png "asot-1000")


> Dugo godina slusam trance muziku. Prakticno godinama odbrojavam do epizode 1000, ali nikada nisam verovao da ce ikada ta epizoda doci. Cinilo se kao da je citava vecnost ispred epizode 1000, ali vreme neumoljivo ide napred, neverovatno. Video sam da su pojedini fanovi postavljali zanimljive slike i na neki nacin obelezili znacajan momenat, na isti nacin sam ja postupio. U potrazi da nesto bude zanimljivo i kreativno ovaj projekat je proistekao iz te teznje. 

> U listingu muzike su navedeni neki od anthem numera za svaku godinu ili 50 epizoda godisnje. Kada sam prvi put uradio aplikaciju i uplodovao, odmah mi je bilo jasno da to tako nece ici, build projekta je preveliki, potrebno mi resenje tako da muzicki mp3 fajlovi budu u nekom cloudu odakle cu ih downlodovati kada je potrebno.

> Tako sam poceo istrazivati serverless arhitekturu, nasao dokumentaciju i tutorijale iz kojih sam naucio kako to mogu uciniti. Airtable mi se cinio najjednostavniji i tako sam uradio i dobio resenje koje vidite. 


### Tehnoligije izrade projekta

```
 #react-hooks,
 #serverless, 
 #airtable, 
 #glassmorphism,
 #neomorphism, 
 #page transition, 
 #framer-motion, 
 #responsive, 
 #BEM 
 #modern css 
 

```
### Funkcionalnisti projekta

```
 #autoplay song,
 #start song, 
 #pause song, 
 #next song,
 #prev song, 
 #show playlist, 
 #download song, 
 #show/hide player, 
 #music-player responsive
```

### Dokumentacija koriscena u projektu 


[glassmorphism blog](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9/)

[glassmorphism](https://dribbble.com/tags/glassmorphism)

[neomorhism](https://dribbble.com/tags/neomorphism)

[framer motion](https://www.framer.com/api/motion/)

[Airtable](https://airtable.com/)

[BEM](https://css-tricks.com/bem-101/)





![alt text](https://i.ibb.co/r6MWv01/raycast-untitled.png "asot-1000")

> Odmah da naglasim da projekat nije preuzet sa nekog YouTube tutorijala ili kursa. 
  Obicno se na nekog ko konkurise za praksu ili junior poslove donekle sumnja da je maznuo projekat sa nekog kursa i postavio kao svoj. Kandidat za posao slusa savet sa YouTuba i odradi copy/paste nekoliko projekata i spreman je za posao !  

## Mapbox fix


 >Zelim da naglasim da svi koji koriste ###react-map-gl ili mapbox module imace problem. Naime, u lokalnom okruzenju sve izgleda dobro, ali nakon sto uradite npm run build projekta mapa. Mapa se vise nece videti vec samo markeri ukoliko ih imate. 

```
Tu je Google morao pomoci, ali i tamo ima desetak razlicih resenja, jedno je konacno dalo rezultat.

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

index.js
package.json: "worker-loader": "^3.0.8",

Ovo ostavljam kao podsetnik za sebe ako se budem bavio bibliotekom, ali i za onoga ko cita ovaj dokument moze da mu bude korisno

```
## Lazy loading (Code Splliting)  Home Page
---

 Primer kako smo centralnu sliku na pocetnoj stani hteli da obezbedimo bolji loading, tako da korisnik ne stekne los utisak nakon sto poseti nasu pocetnu stranu

```
Import fajla

const HomeMainImage = lazy(() => import('../components/HomeMainImage'));


dole u JSX

      <Suspense fallback={''}>
        <HomeMainImage />
      </Suspense>

```

## Dark/Light Mode Home Page
---

 Styled components su mi dale ideju kako da uradim dark/light mode.

  Koristeci theme provider koji su deo theming styled components stavljajuci u app.js naseg projekta. Tako mozemo da pristupimo pojedinim propertima naseg theme objekta sa bilo kog mesta u aplikaciji. Onda mi samo ako prosledimo nekoj stayled componenti (div, img, link, ul ...) props i ona moze da koristi theming

```


import { ThemeProvider } from 'styled-components';

App.js

  <ThemeProvider theme={themes[theme]}></ThemeProvider>


context.js

  const LightTheme = {
    pageBackground: '#f5f5f5',
    linkColor: '#333',
    divColor: '#e22255',
    toggleColor: '#e22255',
    sideColor: 'white',
  };

  const DarkTheme = {
    pageBackground: '#333',
    linkColor: '#f5f5f5',
    divColor: '#bc3e5f',
    toggleColor: '#bc3e5f',
    sideColor: 'rgba(0,0,0,0.3)',
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  pr. Kako koristimo u komponenti

  background-color: ${(props) => props.theme.pageBackground};

```


### My Location Page
---


 Pre pocetka projekta sam pravio plan sta cu raditi i nekako mi se cinilo da bi ovo bilo simpaticno resenje koje bi dalo vrednost projektu. Kako se je tema projekta isporuka hrane, imalo bi smisla korisniku dati lokaciju firme, tako da bi imao predstavu za koliko moze da ocekuje da mu se izvrsi isporuka. Zadovoljan sam sa dokumentacijom mapbox biblioteke, no bug prilikom build mi je zaista oduzeo dosta vremena, cak sam pojedine strane brze uradio neko sto sam resio ovaj npm run build problem.

Gore sam napisao koja dokumentacija je bila korisna da se napravi ova strana



### Contact Page
---

Moze se zapaziti da se pri radu sa formama najpre preporucuje rad sa modulima kao sto su Formik i use-hook-form pre nego klasicano obezbedjivanje formi koristeci useRef hook ili kontorlisane forme preko state. 
Tako sam odlucio da istrazim ovu temu, dokumentaciju i nasao do zaista zadovoljavajuceg resenja, tako da cu uvek u radu sa formom koristiti use-hook-form, prakticno je i jednostavno
Error handling je izvanredan

```


const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });



```

### Firebase 

```
 const pushToFirebase = async (data) => {
    await orderFirestore
      .collection('orders')
      .add({
        ...data,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    notify();
    reset();
  };

```


