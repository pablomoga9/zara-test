import React from "react";
import { Link } from "react-router-dom";

const Episode = (props) => {
  
  

  function getTitle(arr){
    const title = arr.filter(item=>{
      return item.name === "title";
    })
    return title[0].value;
  }

  function getDescription(arr){
    const description = arr.filter(item=>{
      return item.name === "description";
    })
    return description[0].value
  }

  function getMedia(arr){
    const media = arr.filter(item=>{
      return item.name === "enclosure"
    })
    return media[0].attributes.url
  }
  function getDate(arr){
    const date = arr.filter(item=>{
      return item.name === "pubDate";
    })
    return date[0].value;
  }

  function getDuration(arr){
    const duration = arr.filter(item=>{
      return item.name === "itunes:duration";
    })
    return duration[0].value;
  }

  function getId(arr){
    const id = arr.filter(item=>{
      return item.name === "omny:clipId" || item.name === "guid";
    })
    return id[0].value;
  }

  return <div className="episodesList">
    {console.log(props.data)}
    <h3>Episodes:{props.data.length}</h3>
    <ul className="list">
      {props.data.map((item,i)=>{
       return <li key={i}>
        <Link to={{pathname:`/podcast/${props.episodeId}/episode/${getId(item.children)}`}} state={{podcast:props.podcastInfo,
        episodeTitle:getTitle(item.children),
        episodeDescription:getDescription(item.children),
        episodeMedia:getMedia(item.children)}}><p>{getTitle(item.children)}</p></Link>
        <p>{getDate(item.children)}</p>
        <p>{getDuration(item.children)}</p>
       </li>
      })}
    </ul>
  </div>;
};

export default Episode;