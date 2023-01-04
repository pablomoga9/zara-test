import React from "react";
import Podcast from "../Podcast/Podcast";
import { useLocation } from "react-router-dom";

const Play = () => {
  const location = useLocation();
  const data = location.state;
  return <div className="podcastGroup">
    <div className="podcastDetail"><img src={data.podcast.img} alt="" />
          <h3>{data.podcast.title}</h3>
          <p>by {data.podcast.author}</p>
          <p className="descriptionPodcast" dangerouslySetInnerHTML={{__html:`<b>Description:</b>${data.podcast.description}`}}>
          </p></div>
   <div className="audioPlay">
   <h3>{data.episodeTitle}</h3>
    <p className="descriptionPodcast" dangerouslySetInnerHTML={{__html:data.episodeDescription}}></p>
    <audio src={data.episodeMedia} controls></audio>
   </div>
  </div>;
};

export default Play;