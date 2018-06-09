import React, { Component } from 'react'
import { Aside } from './aside'
import './articles.css'
import '../App.css';

export class Articles extends Component {
    render () {
        return(
            <section className="articles">
                <div className="articles-small">
                
                </div>
                <Aside/>
            </section>
        )
    }
}