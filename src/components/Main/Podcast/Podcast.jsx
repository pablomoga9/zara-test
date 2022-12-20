import React, { useEffect, useState } from "react";
import axios from "axios";

const Podcast = () => {
  const [podcastData, setPodcastData] = useState(null);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        let getId = (window.location.pathname).split("podcast/")[1];
        const res = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${getId}`)}`)
          const jsonRes = JSON.parse(res.data.contents)
           setPodcastData (jsonRes)
      }
      catch (error) {
        console.log(error);
      }
    }
    getPodcast();
  },[setPodcastData])
  return <>
    <div className="podcastInfo">
     {podcastData !== null ? <img src={podcastData.results[0].artworkUrl100}></img>:<h2>no hay</h2>}
    </div>
  </>;
};

export default Podcast;
