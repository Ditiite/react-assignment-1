import React, { Component} from "react";
import './Feature.css';

export class Feature extends Component {
    
    render() {
        return(
                <article className="feature">
                    <div className="feature-icon">
                        <img src={this.props.feature.icon} alt="Icon" />
                    </div>
                    <h1 className="feature-title"><span className="feature-title-bolder">{this.props.feature.title1}</span>{this.props.feature.title2}</h1>
                    <p className="feature-text">{this.props.feature.content}</p>
                    <button className="blue-btn feature-btn">Read more</button>
                    <div className="small-triangle-white"></div>
                </article>
        );
    }
}