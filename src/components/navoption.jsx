import React,{Component} from 'react'

const style  = {
    fontSize: '1.5rem',
    color: "rgba(51, 51, 51, 1)",
    fontFamily: "Lucida Sans, Helvetica",
    fontWeight: 'bold',
    marginTop: '20%',
    position: 'relative',
    width: '100%',
    textAlign: 'right',
    paddingRight: '10px',
    boxSizing: 'border-box',
    


}
export default class NavOption extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <li style = {style}>{this.props.name}</li>
        );
    }
}