//import logo from './logo.svg';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
//import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      
      <Nav />
      
      <Wrapper >
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Login" component={Log} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Chatroom" component={Chatroom} />
        <Route exact path="/forgotPass" component={forgotPass} /> */}

      </Wrapper>
      <Footer />


    </Router>
  );
}

export default App;
