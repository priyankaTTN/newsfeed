import React from 'react';

export class Title extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h2>{this.props.title}</h2>
        );
    }
}




