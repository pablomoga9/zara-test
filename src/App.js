import './App.css';
import 'normalize.css';
import { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import '../src/styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { listContext } from './context/listContext';
import { podcastContext } from './context/podcastContext';
import {loaderContext} from './context/loaderContext';

function App() {
  const [data, setData] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [loading,setLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <listContext.Provider value={{ data, setData }}>
          <podcastContext.Provider value={{ podcast, setPodcast }}>
        <loaderContext.Provider value={{loading,setLoading}}>
            <Header />
            <Main />
            </loaderContext.Provider>
          </podcastContext.Provider>
        </listContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
