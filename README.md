
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






> Odmah da naglasim da projekat nije preuzet sa nekog YouTube tutorijala ili kursa. 
  Obicno se na nekog ko konkurise za praksu ili junior poslove donekle sumnja da je maznuo projekat sa nekog kursa i postavio kao svoj. Kandidat za posao slusa savet sa YouTuba i odradi copy/paste nekoliko projekata i spreman je za posao !  



## ASOT card-componenta

BEM arihitektura u pisanju CSS fajlova, no kada bolje razmilsim trudicu se da odsada maximalno koristim styled-components, cini mi se da fajl strutkura projekta nije idealna i trudicu se da je popravim kroz neke druge radove


![alt text](https://i.ibb.co/D73wGHD/asot-card-1.png "asot-1000")


## Serverless 

Kako koristeci Airtable serverless arhitekturu mozemo da resimo veliki problem celokupnog projekta, a to je skladistenje velikih mp3 fajlova. 

---
![alt text](https://i.ibb.co/TwF0225/serverless-1.png "asot-1000")
 


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


