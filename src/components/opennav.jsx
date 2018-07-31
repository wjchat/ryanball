import React,{Component} from 'react';

import arrow from '../arrow.svg';
import NavIcon from '../nav.svg';
const style = {
    color: 'black',
    position: 'absolute',
    top: 30,
    right: 30,
    height: 20,
    width: "auto",
    cursor: 'pointer'
}
export default class NavContent extends Component {
    render(){
        return (
    <img onClick = {this.props.onClick} style = {style} src = {this.props.open ? arrow: NavIcon} />
        );
    }
}