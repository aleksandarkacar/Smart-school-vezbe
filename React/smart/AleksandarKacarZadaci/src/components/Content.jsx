import React from "react";

export default class Content extends React.Component {
    render() {
        return(
            <div>
                <p>
                    Hello from Content component! {this.props.contentProp}
                </p>
            </div>
        )
    }
}