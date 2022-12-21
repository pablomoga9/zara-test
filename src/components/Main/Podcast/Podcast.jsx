import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { podcastContext } from "../../../context/podcastContext";
 

const Podcast = () => {
  var XMLParser = require('react-xml-parser');
  const [podcastData, setPodcastData] = useState(null);
  const {podcast,setPodcast} = useContext(podcastContext);

  useEffect(() => {
    setPodcast([])
    const getPodcast = async () => {
      try {
        let getId = (window.location.pathname).split("podcast/")[1];
        const res = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${getId}`)}`)
        const jsonRes = JSON.parse(res.data.contents)
        setPodcastData (jsonRes)
        
        console.log(jsonRes.results[0].feedUrl);
        
        const episodes =await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`${jsonRes.results[0].feedUrl}`)}`);
        console.log("hi")
        console.log(episodes.data.contents)
        const xmlJson = new XMLParser().parseFromString(episodes.data.contents)
        console.log(xmlJson)
        setPodcast(xmlJson);
      }
      catch (error) {
        console.log(error);
      }
    }
    getPodcast();
  },[])


  function getImageSrc(){
    const podcastResult = podcast.children[0].children.filter(function(item){
      return item.name === "itunes:image" 
     })
     console.log(podcastResult);
    return podcastResult[0].attributes.href;
  }
  function getTitle(){
    const podcastResult = podcast.children[0].children.filter(function(item){
      return item.name === "title"
    })
    return podcastResult[0].value;
  }
 function getAuthor(){
  const podcastResult = podcast.children[0].children.filter(function(item){
    return item.name === "itunes:author"
  })
  return podcastResult[0].value;
 }
function getDescription(){
  const podcastResult = podcast.children[0].children.filter(function(item){
    return item.name === "description"
  })
  return podcastResult[0].value;
}

  return <>
    <div className="podcastInfo">
     {podcastData !== null ? podcast.length !== 0 ? <div className="podcastDetail"><img src={getImageSrc()} alt="" />
     <h3>{getTitle()}</h3>
     <p>by {getAuthor()}</p>
     <p>Desription: <br />
      {getDescription()}
     </p></div> :<div><img src={podcastData.results[0].artworkUrl100} alt=""/><h2>Loading...</h2></div>:<h2>None</h2>}
    </div>
  </>;
};

export default Podcast;
