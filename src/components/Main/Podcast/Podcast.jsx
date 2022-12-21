import React, { useEffect, useState } from "react";
import axios from "axios";

 

const Podcast = () => {
  var XMLParser = require('react-xml-parser');
  const [podcastData, setPodcastData] = useState(null);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        let getId = (window.location.pathname).split("podcast/")[1];
        const res = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${getId}`)}`)
        const jsonRes = JSON.parse(res.data.contents)
        setPodcastData (jsonRes)
           
        console.log(jsonRes.results[0].feedUrl);
        const episodes = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`${jsonRes.results[0].feedUrl}`)}`);
        console.log(episodes.data.contents)
        const xmlJson = new XMLParser().parseFromString(episodes.data.contents)
        console.log(xmlJson)
           
      }
      catch (error) {
        console.log(error);
      }
    }
    getPodcast();
  },[])

 


  return <>
    <div className="podcastInfo">
     {podcastData !== null ? <img src={podcastData.results[0].artworkUrl100} alt=""></img>:<h2>Loading...</h2>}
    </div>
  </>;
};

export default Podcast;
