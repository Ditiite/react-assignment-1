import React, { Component} from "react";
import './Feature.css';

export class Feature extends Component {
    
    render() {
        return(
            <article className="feature">
                <img src={this.props.feature.icon} alt="Icon" />
                <h1>{this.props.feature.title }</h1>
                <p>{this.props.feature.content }</p>
            </article>
        );
    }
}