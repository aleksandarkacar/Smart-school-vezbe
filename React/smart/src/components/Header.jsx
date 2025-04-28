import React from "react";

export default class Header extends React.Component {
    render() {
        console.log(this.props.headerProp)
        return(
        <>
            <h1>Header 1223</h1>
            <p>Header value: {this.props.headerProp}</p>
        </>
    );
    }
}