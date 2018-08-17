import React, { Component } from 'react';

import Body from './components/Body';
import Nav from './components/Nav';
import styles from './css/body.css';

const scrollDivs = []
class App extends Component {
    constructor(props){
        super(props);
        this.navClick = this.navClick.bind(this);
        this.getPositions = this.getPositions.bind(this);
    }
componentDidMount(){
    
}

  getPositions(div){
      scrollDivs.push(div);
  }
  navClick(e){
      let name = e.target.id;
      for(let each of scrollDivs){
          if(name === each.name){
              window.scrollTo(0, each.position - 100);
          }
      }
  }
  render() {
    return (
      <div className = {styles.App}>
            <Nav onClick = {this.navClick} />
            <Body onMount = {this.getPositions}/>
      </div>
        
    );
  }
}

export default App;
