import React, { Component } from "react";

import './blog.css';
import SpeachBubble from "../speachBubble/speachBubble";
import { BlogData } from "../blog/blogData.js";

export class Blog extends Component {
    render() {
        const speachComponents = BlogData.map((value, index) => {
            return <SpeachBubble key={index} selected="true" blog={value} />
        });

        return (
            <section className="blog-container">
                <div className="title-and-stripes">
                    <div className="bg-stripe stripes"></div>
                    <h2>Recent work</h2>
                    <div className="bg-stripe stripes2"></div>
                </div>
                <div className="blog-container-items">
                    { speachComponents }
                </div>
            </section>
        );
    }
}