import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { listContext } from "../../../context/listContext";
import { Link } from "react-router-dom";
import { loaderContext } from "../../../context/loaderContext";


const Home = () => {
  const { data, setData } = useContext(listContext);
  const {loading,setLoading} = useContext(loaderContext);
  const [date, setDate] = useState(null);
  const [query,setQuery] = useState("");

  const search = (data)=>{
    return data.filter((item)=>item['im:name'].label.toLowerCase().includes(query) || item['im:artist'].label.toLowerCase().includes(query));
  }

  useEffect(() => {

    const getPodcasts = async () => {
      try {
        const res = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        localStorage.setItem("list", res.data);
        localStorage.setItem("date", new Date());
        setData(res.data)
        setDate(new Date());
      
       
        const getList = localStorage.getItem("list");

      }
      catch (error) {
        console.log(error);
      }
    }
    getPodcasts()
  }, [setData, setDate, setLoading])

  return <>
    <section>
      <div className="filter_box">
        {data.length !== 0 ? <h3 className="numberFilter">{search(data.feed.entry).length}</h3> : null}
        <input className="inputFilter" type="text" placeholder="Filter podcasts..." onChange={(e)=>setQuery(e.target.value)}/>
      </div>
      <div className="podcast_list">
          {setLoading(false)}
         {data.length !== 0 ? (search(data.feed.entry)).map((element, i) => {
          return <div key={i} className="list_item">
            <img src={`${element['im:image'][2].label}`} alt="" />
            <Link to={`/podcast/${element.id.attributes["im:id"]}`}>
              <h3>{element['im:name'].label}</h3>
            </Link>
            <p>Author:{element['im:artist'].label}</p>
           
          </div>
          
        }) : <>
        {setLoading(true)}
        <h1>Nothing</h1></>}
      </div>
    </section>
  </>;
};

export default Home;