
import React from "react";
import './speachBubble.css';

const SpeachBubble = (props) => {
    return (
        <div className="blog">
            <div className="blog-text">
                <img className="blog-img" src={props.blog.img} alt="Empty placeholder" />
                <h3>{props.blog.title}</h3>
                <p>{props.blog.text}</p>
            </div>
            <div className="small-triangle-white"></div>
        </div>
    );
}
export default SpeachBubble;

export const SpeachBubbleSmall = (props) => {
    return (
        <div className="blog">
            <div className="blog-text">
                <h3>{props.articleData.author}</h3>
                <p>{props.articleData.text}</p>
            </div>
            <div className="small-triangle-white"></div>
        </div>
    );
}
