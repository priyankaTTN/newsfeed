import React from 'react';

export class Images extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <img src={this.props.url} className="img-responsive" />
        );
    }
}
