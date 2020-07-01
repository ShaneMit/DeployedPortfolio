import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import AboutMe from './pages/About Me'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './components/Projects'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Switch>
          <Route exact path="/">
            <AboutMe/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}


export default App;
