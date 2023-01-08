import React from "react";

export default class header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <h1 className="ui dividing centered header">
                {
                    this.props.title
                } 
                </h1>
        )
    }
}