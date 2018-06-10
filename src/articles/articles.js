import React, { Component } from 'react'
import { Aside } from './aside'
import './articles.css'
import '../App.css'
import '../speachBubble/speachBubble.css'
import '../header/Header.css'
import { articleData } from "./articleData"
import { SpeachBubbleSmall } from '../speachBubble/speachBubble'

export class Articles extends Component {
    render () {
        const articleComponents = articleData.map((value, index) => {
            return <SpeachBubbleSmall key={index} selected="true" articleData={value} />
        });

        return(
            <section className="articles">
                <div>
                    <div className="title-and-stripes">
                        <div className="bg-stripe stripes"></div>
                        <h2>Testimonials</h2>
                        <div className="bg-stripe stripes2"></div>
                    </div>
                    <div className="articles-small">
                        {articleComponents}
                    </div>
                </div>
                <Aside/>
                <div className="article-contact content--2">
                    <div className="small-triangle-blue"></div>
                    <p className="to-upper-case">Get in touch with us <span className="bolder">now!</span></p>
                    <button className="white-btn">Contact us</button>
                </div>
            </section>
        )
    }
}