
import React, { Component } from "react";
import './speachBubble.css';

export class SpeachBubble extends Component {
    render() {

        return (
            <div className="blog">
                <div className="blog-text">
                    <img className="blog-img" src={this.props.blog.img} alt="Empty placeholder" />
                    <h1>{this.props.blog.title}</h1>
                    <p>{this.props.blog.text}</p>
                </div>
                <div className="small-triangle-white"></div>
            </div>
        );
    }
}