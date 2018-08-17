import React, {Component} from 'react';

import styles from '../css/nav.css'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";


class Container extends Component{
    constructor(props){
        super(props);
        
        this.onHover = this.onHover.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }
    
    componentDidMount(){
        let line = this.refs.line;
        let text = this.refs.text;
        this.tween = TweenMax.to(line, .1, {width: '90%', ease: Power2.easeInOut});
        this.tween2 = TweenMax.to(text, .1, {color: 'black', ease: Power2.easeInOut});
        
        this.tween.reverse();
        this.tween2.reverse();
    }
    onHover(){
        this.tween.play();
//        this.tween2.play();
    }
    
    onLeave(){
        this.tween.reverse();
//        this.tween2.reverse();
    }
    render(){    
    return<h1 onClick = {this.props.onClick} id = {this.props.id} ref = 'text' onMouseOver = {this.onHover} onMouseLeave = {this.onLeave} className = {styles.navText}>{this.props.title} <div ref = 'line' className = {styles.line}></div></h1>
    }
}

export default class Nav extends Component{
    render(){
        return<div className = {styles.navContainer}>
            <Container onClick = {this.props.onClick} id = 'welcome' title = 'Welcome'/>
            <Container onClick = {this.props.onClick} id = 'education' title = 'Education' />
            <Container onClick = {this.props.onClick} id = 'academia' title = 'Academia' />
            <Container onClick = {this.props.onClick} id = 'honors' title = 'Honors & Awards' />
            <Container onClick = {this.props.onClick} id = 'research' title = 'Research' />
            <Container onClick = {this.props.onClick} id = 'publications' title = 'Publications' />
            
        </div>
    }
}