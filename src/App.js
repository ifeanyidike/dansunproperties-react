import React from "react"
import './App.css';
import Home from "./screens/"
import Contact from "./screens/Contact"
import About from "./screens/about"
import FindAnAgent from "./screens/find-an-agent"
import Properties from "./screens/Properties"
import Testimonial from "./screens/Testimonial"
import Sell from "./screens/Sell"
import Terms from "./screens/Terms"
import PrivacyPolicy from "./screens/PrivacyPolicy"
import Inspect from "./screens/Inspect.js"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
  <Router>
    <Header />    
    <Route path='/find-an-agent' component={FindAnAgent} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' component={About} />
    <Route path='/terms' component={Terms} />
    <Route path='/privacy-policy' component={PrivacyPolicy} />
    <Route path='/properties' component={Properties} /> 
    <Route path='/testimonial' component={Testimonial} /> 
    <Route path='/sell' component={Sell} /> 
    <Route path='/inspect/:id' component={Inspect} />    
    <Route path='/' exact component={Home} />        
    <Footer />
  </Router>
  );
}

export default App;
