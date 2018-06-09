
import React, { Component } from "react";
import './speachBubble.css';

export class SpeachBubble extends Component {
    render() {

        return (
            <div className="blog">
                <div className="blog-text">
                    <img className="blog-img" src={this.props.blog.img} alt="Empty placeholder" />
                    <h3>{this.props.blog.title}</h3>
                    <p>{this.props.blog.text}</p>
                </div>
                <div className="small-triangle-white"></div>
            </div>
        );
    }
}

export class SpeachBubbleSmall extends Component {
    render() {

        return (
            <div className="blog">
                <div className="blog-text">
                    <h3>{this.props.articleData.author}</h3>
                    <p>{this.props.articleData.text}</p>
                </div>
                <div className="small-triangle-white"></div>
            </div>
        );
    }
}