import React, { Component } from 'react'
import { Aside } from './aside'
import './articles.css'
import '../App.css'
import '../speachBubble/speachBubble.css'
import { articleData } from "./articleData"
import { SpeachBubbleSmall } from '../speachBubble/speachBubble'

export class Articles extends Component {
    render () {
        const articleComponents = articleData.map((value) => {
            return <SpeachBubbleSmall selected="true" articleData={value} />
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
            </section>
        )
    }
}