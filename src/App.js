//import logo from './logo.svg';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
//import './App.css';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import "./App.css";
//import Container from './components/Container';
 


function App() {
  return (
    <Router>
      
      
    
      <Wrapper >
        <Nav />
        <Route exact path="/" component={Home} /> 
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Footer />
      </Wrapper>
      
    </Router>
  );
}

export default App;
