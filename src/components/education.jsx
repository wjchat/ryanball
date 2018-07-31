import React,{ Component } from 'react';

export default class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
            header: <h1>Education</h1>,
            content: <div>
                
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus odit sunt at, ratione laboriosam nam. Deleniti nulla illum odio atque eos dolor enim expedita hic, mollitia, similique, at voluptatum doloribus. </p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat odit porro praesentium similique ea magnam reiciendis quisquam tempora, tenetur fuga ipsum eveniet beatae perferendis illum repellendus maiores doloremque, nisi eaque."</p>
            </div>
        }
    }
    render(){
        return(
            <div className = 'education'>
                {this.state.header}
                {this.state.content}
            </div>
        );
    }
}
