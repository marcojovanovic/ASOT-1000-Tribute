import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = '/api/trance';


function useAirtable() {
  const [songs, setSongs] = useState([]);

  const [tranceData, setTranceData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);

      setSongs(data);
    } catch (error) {}

    const newData = songs.map((item) => {
      return {
        name: item.name,
        singer: item.singer,
        cover: item.cover.map((img) => img.url).toString(),
        musicSrc: item.musicSrc.map((song) => song.url).toString(),
      };
    });

    setTranceData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [tranceData];
}

export default useAirtable;
