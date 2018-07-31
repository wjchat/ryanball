import React, { Component } from 'react';

import Academia from './components/academia.jsx';
import Education from './components/education.jsx';
import Honors from './components/honors.jsx';
import Nav from './components/nav'
import Publications from './components/publications.jsx';
import Research from './components/research.jsx';
import Welcome from './components/welcome.jsx';

import './css/styles.css';

class App extends Component {
  render() {
    return (
        
      <div className="App">
                <Nav />
                <Welcome /> 
                <Education />
                <Academia />
                <Honors />
                <Research />
                <Publications />
      </div>
        
    );
  }
}

export default App;
