import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Erreur404 from './components/Erreur404';
import ConnexionModal from './components/ConnexionModal';
import Admin from './components/Admin';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const showModal = () => {
      setOpenModal(true);
      document.body.style.overflow = "hidden";
  }

  const hideModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "visible";
  }

  const theme = useSelector(state => state.themeReducer.theme);

  return (
    <div className="App" data-color-mode={theme}>
      {isLoading ? 
        <Loading />
      : (
        <Router>
          <Switch>
            <Route exact path="/">
              <Header showModal={showModal} />
              <div className="top">
                <div className="leftPart">
                  <Presentation />
                  <Skills />
                </div>
                <Timeline />
              </div>
              <Projects />
              <Footer />
              <ConnexionModal showModal={openModal} hideModal={hideModal} />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route path="*">
              <Erreur404 />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );

}

export default App;
