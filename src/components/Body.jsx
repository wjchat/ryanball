import React, {Component} from 'react';

import subjects from '../content/content.jsx';
import styles from '../css/body.css';

function Text(props){
    return<div className = {styles.content}>
        <h1>{props.title}</h1>
        <br/><br/>
        <p>{props.content}</p>
    </div>
}

class Container extends Component{
    
    componentDidMount(){
        let div = this.refs.box;
        let id = (div.getAttribute('id'));
        let position = div.getBoundingClientRect().top;
        let item = {
            name: id,
            position: position
        }
        this.props.onMount(item);
    }
    render(){
        return<div ref = 'box' id = {this.props.id} className = {styles.mainContain}>
            <Text title = {this.props.title} content = {this.props.content} />
        </div>

    }
}

export default class Body extends Component{
    

    render(){
        return<div className = {styles.mainContain}>
           <Container id = 'welcome' onMount = {this.props.onMount} title = {subjects.Welcome.title} content = {subjects.Welcome.content} />
           <Container id = 'education' onMount = {this.props.onMount}  title = {subjects.Education.title} content = {subjects.Education.content} />
           <Container id = 'academia' onMount = {this.props.onMount}  title = {subjects.Academia.title} content = {subjects.Academia.content} />
           <Container id = 'honors' onMount = {this.props.onMount}  title = {subjects.Honors.title} content = {subjects.Honors.content} />
           <Container id = 'research' onMount = {this.props.onMount}  title = {subjects.Research.title} content = {subjects.Research.content} />
           <Container id = 'publications' onMount = {this.props.onMount}  title = {subjects.Publications.title} content = {subjects.Publications.content} />
            
        </div>
    }
} 