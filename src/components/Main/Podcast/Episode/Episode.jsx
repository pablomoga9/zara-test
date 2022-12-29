import React from "react";

const Episode = (props) => {



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

  return <div className="episodesList">
    {console.log(props.data)}
    <h3>Episodes:{props.data.length}</h3>
    <ul className="list">
      {props.data.map((item,i)=>{
       return <li key={i}>
        <a href=""><p>{getTitle(item.children)}</p></a>
        <p>{getDate(item.children)}</p>
        <p>{getDuration(item.children)}</p>
       </li>
      })}
    </ul>
  </div>;
};

export default Episode;