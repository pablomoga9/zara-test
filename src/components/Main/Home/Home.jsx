import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { listContext } from "../../../context/listContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, setData } = useContext(listContext);
  const [date, setDate] = useState(null);
  useEffect(() => {

    const getPodcasts = async () => {
      try {
        //  if(!localStorage.getItem("list")){
        const res = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        localStorage.setItem("list", res.data);
        localStorage.setItem("date", new Date());
        setData(res.data)
        setDate(new Date());
        //  }
        //  else{
        console.log(localStorage.getItem("list"))
        const getList = localStorage.getItem("list");
        console.log(getList)
        //  }


      }
      catch (error) {
        console.log(error);
      }
    }
    getPodcasts()
  }, [setData, setDate])

  return <>
    <section>
      <div className="filter_box">
        <h3 className="numberFilter">100</h3>
        <input type="text" placeholder="Filter podcasts..." />
      </div>
      <div className="podcast_list">
        {data.length !== 0 ? (data.feed.entry).map((element, i) => {
          return <div key={i} className="list_item">
            <img src={`${element['im:image'][2].label}`} alt="" />
            <Link to={`/podcast/${element.id.attributes["im:id"]}`}>
              <h3>{element['im:name'].label}</h3>
            </Link>
            <p>Author:{element['im:artist'].label}</p>
          </div>
        }) : <h1>Nothing</h1>}
      </div>
    </section>
  </>;
};

export default Home;
