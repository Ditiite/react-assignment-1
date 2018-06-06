import React, { Component } from 'react';
import headerImg from '../images/Header-img.png';
import './Header.css';

export class Header extends Component {
    
    render() {
        return (
            <header className="App-header">
                <section className="content--1">
                    <img className="devices-header" alt="logo" src={headerImg} />
                    
                    <p className="to-upper-case">
                        <span className="bolder">Powerfull simple</span> with a <br />
                        <span className="bolder"> squeeky clean</span> design.
                    </p>
                    <p className="header-text">
                        Find out how you can offer quick and powerful solutions to your customers now!
                    </p>
                    <button className="blue-btn header-btn">Learn more</button>
        
                </section>
                <section className="content--2">
                    <div className="small-triangle-blue"></div>
                    <p className="to-upper-case">Create a <span className="bolder">Powerful</span>solution now!</p>
                    <button className="white-btn">Get Started</button>
                </section>
                
            </header>
        );
    }
}

