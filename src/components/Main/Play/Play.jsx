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



// "<p>With her groundbreaking 1992 debut album, <em>Little Earthquakes, </em>Tori Amos paired pianos with guitars and shook the music world to its core. The record's most poignant and painful moment was the a cappella track “Me and a Gun,” a chilling account of the artist's sexual assault. Long before the MeToo movement, Amos was a hero and crusader who spoke truth to power, not only with her songwriting but with her work as the first spokesperson for the Rape, Abuse &amp; Incest National Network (RAINN), the largest nonprofit anti-sexual assault organization in the U.S.</p>
// <p>In this episode, we explore one of the most soul-baring, innovative releases of the ’90s—and the uphill battle its creator faced to get it made. With special guest Tori Amos.</p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p> >"