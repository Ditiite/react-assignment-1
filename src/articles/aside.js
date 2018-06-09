import React, { Component } from "react";
import './aside.css'
import '../App.css';

export class Aside extends Component {
    render() {
        return(
            <aside className="aside">
                <div className="title-and-stripes">
                    <div className="bg-stripe stripes"></div>
                    <h2>Development</h2>
                    <div className="bg-stripe stripes2"></div>
                </div>
                <div className="aside-development">
                    <div className="aside-design">Design</div>
                    <div className="aside-production">Production</div>
                    <div className="aside-empty"></div>
                    <div className="aside-text">
                        <h2>The Design</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor sed do eiusmod tempor</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor sed do eiusmod tempor</p>
                        <button className="blue-btn feature-btn">Read more</button>
                    </div>
                </div>
            </aside>
        )
    }
}