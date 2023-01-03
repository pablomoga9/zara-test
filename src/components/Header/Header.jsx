import React, { useContext, useEffect, useState } from "react";
import { loaderContext } from "../../context/loaderContext";

const Header = () => {
  const {loading,setLoading} = useContext(loaderContext);
  const [spinner,setSpinner] = useState(false);

  useEffect(()=>{
    loading === true ? setSpinner(true) : setSpinner(false);
  },[setLoading])

  return <>
    <section className="header_container">
      <h2 className="header_title">Podcaster</h2>
      {spinner === true ? <p>Loading</p> : null}
    </section>
  </>;
};

export default Header;
