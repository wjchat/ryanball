import React,{Component} from 'react';

import NavContent from './navcontent'
import OpenNav from './opennav'

const navStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    color: 'white',   
    height: '100%',
    width: '20%',
    minWidth: '200px'
}


export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            opened: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            opened: !this.state.opened,
        })
    }
    render(){
        return(
        <nav style = {navStyle}>
            <OpenNav open = {false} onClick = {this.toggleNav} />   
            <NavContent onClick = {this.toggleNav} show = {this.state.opened} />
            
        </nav>
        );
    }
}