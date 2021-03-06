import React, { useState, useEffect } from 'react';
import { animationTwo, transition } from '../helpers/framerAnimations';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { motion } from 'framer-motion';
import LogoAsot from '../assets/asotLogo/asotLogo.png';
import '../css/reset.css';
import '../css/main.css';
import '../css/animations.css';
import '../css/slider.css';
import '../css/mainBackground.css';
import '../css/asotCard.css';

import axios from 'axios';
import AsotCard from '../components/AsotCard';

const url = '/api/trance';

function AsotApp() {
  const [play, setPlay] = useState(false);
  const [audioInstance, setAudioInstance] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // getting songs from serverless cloud

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);

      setSongs(data);
    } catch (error) {}
  };

  const tranceData = songs.map((item) => {
    return {
      name: item.name,
      singer: item.singer,
      cover: item.cover.map((img) => img.url).toString(),
      musicSrc: item.musicSrc.map((song) => song.url).toString(),
    };
  });

  const getAudioInstance = (instance) => {
    //console.log('Getting audio instance', instance);
    setAudioInstance(instance);
  };

  const onPlayHandler = () => setPlay(true);
  const onPauseHandler = () => setPlay(false);

  const options = {
    //izvor podataka
    audioLists: tranceData,

    // pocetni index od koga pocinje da se vrti lista  [type `number` default `0`]
    defaultPlayIndex: 0,

    // Mozez dinamicno da postavis index [type `number` default `0`]
    // playIndex: 0,

    // boja za temu    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: 'dark',

    // granice kretanja za draggable player
    bounds: 'body',

    // da li nova napravljena lista menja prethodnu ili se dodaje na kraju
    clearPriorAudioLists: false,

    // Play your new play list right after your new play list is loaded turn false.
    // [type `boolean`, default `false`]
    autoPlayInitLoadPlayList: true,

    // Da li se na preload krece audio  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    // glassBg playera da se prikaze ili ne  [type `Boolean`, default `false`]
    glassBg: false,

    //Da li zadrsavas poslenje stanje u audio playeru nakon napustanja strane  [type `Boolean` default `false`]
    remember: false,

    // Da li mozez da brises numeru sa liste  [type `Boolean`, default `true`]
    remove: true,

    //inicijalna pozicija za muzicki player    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
      top: 100,
      left: 170,
    },

    // textualna konfiguracija audio playera
    playModeText: {
      order: '',
      orderLoop: '',
      singleLoop: '',
      shufflePlay: '',
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: '',

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: '',

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: '',

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: '',

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: '',

    panelTitle: '',

    defaultPlayMode: 'order',

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: 'mini',

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    // Da li na pocetku da na load da se automatski pusti prva numera [type `Boolean` default 'true']
    autoPlay: true,

    //Da li mozez na klik da menjas izmedju 2 moda, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: true,

    // pocetni muzicki player moze da se prevlaci po ekranu drag-drop    [type `Boolean` default `true`]
    drag: true,

    // prevlacenje preko progressa audio tracka [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    // Prikazi progress bar  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //lyric display of the audio player panel   [type `Boolean` default `false`]
    showLyric: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: false,

    // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
    autoHiddenCover: true,

    // custom music player root node
    getContainer() {
      return document.body;
    },
  };

  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationTwo}
      transition={transition}
      className="main"
    >
      <div id="stars3"></div>
      <div id="stars2"></div>
      <div className="asot__trance">
        <div id="stars"></div>

        <img src={LogoAsot} alt="" className="asot__trance--logo-1" />
        <div className="asot__trance--glass">
          <div className="asot__trance--bg"></div>
          <div className="asot__trance--flex__items">
            <AsotCard />
          </div>
          <ReactJkMusicPlayer
            {...options}
            getAudioInstance={getAudioInstance}
            onAudioPlay={onPlayHandler}
            onAudioPause={onPauseHandler}
          />
        </div>
        <img src={LogoAsot} alt="" className="asot__trance--logo-2" />
      </div>
    </motion.div>
  );
}

export default AsotApp;
