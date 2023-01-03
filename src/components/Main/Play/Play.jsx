import React from "react";
import Podcast from "../Podcast/Podcast";
import { useLocation } from "react-router-dom";

const Play = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data.podcast);
  return <div>
    <div className="podcastDetail"><img src={data.podcast.img} alt="" />
          <h3>{data.podcast.title}</h3>
          <p>by {data.podcast.author}</p>
          <p dangerouslySetInnerHTML={{__html:`Description:${data.podcast.description}`}}>
          </p></div>
    <h1>{data.episodeTitle}</h1>
    <div dangerouslySetInnerHTML={{__html:data.episodeDescription}}></div>
    <audio src={data.episodeMedia} controls></audio>
  </div>;
};

export default Play;