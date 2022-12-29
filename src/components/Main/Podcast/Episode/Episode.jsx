import React, { useEffect, useState } from "react";
import Play from "../../Play/Play";
import { Link } from "react-router-dom";
const Episode = (props) => {
  const [id,setId] = useState(null);
  console.log(props.data)


  useEffect(()=>{
    const getId = async()=>{
      try{
        const podcastId = (window.location.pathname).split("podcast/")[1];
        await setId(podcastId);
        console.log(podcastId);
      }
      catch(error){
        console.log(error);
      }
    }
    getId();
  },[])

  function getTitle(arr){
    const title = arr.filter(item=>{
      return item.name === "title";
    })
    return title[0].value;
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

  function getEpisodeId(arr){
    const episodeId = arr.filter(item=>{
      return item.name === "guid";
    })
    return episodeId[0].value;
  }

  return <div className="episodesList">
    {console.log(props.data)}
    <h3>Episodes:{props.data.length}</h3>
    <ul className="list">
      {props.data.map((item,i)=>{
       return <li key={i}>
        {console.log(item.children)}
        <Link to={{pathname:`/podcast/${id}/episode/${getEpisodeId(item.children)}` ,state:{info:"holaholahola"}}}>{getTitle(item.children)}</Link>
        <p>{getDate(item.children)}</p>
        <p>{getDuration(item.children)}</p>
       </li>
      })}
    </ul>
  </div>;
};

export default Episode;
