import React from 'react';
import logo from './logo.svg';
import './App.css';
// import NavScrollExample from './components/NavBar';
// import NavBar from './components/NavBar';
// import CollapsibleExample from './components/NavBar';
import { Navbar } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/css/Header.css';
import "../src/css/Header.css"
import "../src/css/About.css"
import "../src/css/Contact.css"
import "../src/css/Education.css"
import "../src/css/Experience.css"
import "../src/css/Projects.css"
import "../src/css/Skills.css"


import RedBackground from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/RedBackground.png'
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Background from './components/Background';
import YellowBlue from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/YellowBlue.png';
import Abstract from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Abstract.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <div  className="App">
      <nav>
      
      </nav>
      <BrowserRouter>
      {/* style={{backgroundImage: `url(${RedBackground})`}} */}
      <div>
      {/* <Background/> */}
      <NavBar/>
      <Routes>
      <Route path="/About"/>
      <Route path="/Projects"/>
      <Route path="/About"/>
      <Route path="/Projects"/>
      <Route path="/Experience"/>
      <Route path="/Skills"/>
      <Route path="/Education"/>
      <Route path="/Contact"/>
     
        {/* <Route path="/Favorites" element = {<FavoritesListRoute/>}>

          </Route>

          <Route path="/Details">
          
          </Route> */}
      </Routes>
      
      <section id='About-Section'> <About/></section>
      <section id='Experience-Section'> <Experience/></section>
     
      <section id='Projects-Section'> <Projects/></section>
      <section id='Skills-Section'><Skills/></section>
      
      <section id='Education-Section'><Education/></section>
      
      
      <section id='Contact-Section'><Contact/></section>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
