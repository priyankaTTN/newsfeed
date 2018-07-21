import React from 'react';

export class Description extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p>{this.props.data}</p>
        );
    }
}