import React from "react";
import './Feature.css';

 const Feature = ({feature}) => {
    return(
            <article className="feature">
                <div className="feature-icon">
                    <img src={feature.icon} alt="Icon" />
                </div>
                <h1 className="feature-title"><span className="feature-title-bolder">{feature.title1}</span>{feature.title2}</h1>
                <p className="feature-text">{feature.content}</p>
                <button className="blue-btn feature-btn">Read more</button>
                <div className="small-triangle-white"></div>
            </article>
    );
}
export default Feature;