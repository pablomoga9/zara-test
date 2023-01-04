import React, { useContext, useEffect, useState } from "react";
import { loaderContext } from "../../context/loaderContext";
import { Link } from "react-router-dom";

const Header = () => {
  const {loading,setLoading} = useContext(loaderContext);
  const [spinner,setSpinner] = useState(false);

  // useEffect(()=>{
  //   loading === true ? setSpinner(true) : setSpinner(false);
  // },[setLoading])

  return <>
    <section className="header_container">
      <Link to={'/'} className="header_title"><h2>Podcaster</h2></Link>
      {loading === true ? <div className="spinner"></div> : null}
    </section>
  </>;
};

export default Header;
