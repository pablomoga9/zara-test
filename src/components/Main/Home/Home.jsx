import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {

    const getPodcasts = async () => {
      const res = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      console.log(res.data.feed.entry[0]['im:image'])
      setList(res.data)
    }
    getPodcasts()
  }, [])

  return <>
    <section>
      <div className="filter_box">
        <h3 className="numberFilter">100</h3>
        <input type="text" placeholder="Filter podcasts..." />
      </div>
      <div className="podcast_list">
      {list.length !== 0 ? (list.feed.entry).map(element => {
        return <div className="list_item">
          {console.log(element['im:image'][2].label)}
          <img src={`${element['im:image'][2].label}`} alt="" />
          <h3>{element['im:name'].label}</h3>
          <p>Author:{element['im:artist'].label}</p>
        </div>
      }) : <h1>Nothing</h1>}
      </div>
    </section>
  </>;
};

export default Home;
