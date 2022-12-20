import './App.css';
import 'normalize.css';
import { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import '../src/styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { listContext } from './context/listContext';

function App() {
  const [data,setData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <listContext.Provider value={{data,setData}}>
        <Header/>
        <Main/>
        </listContext.Provider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
