import React, { Component } from 'react';
import headerImg from '../images/Header-img.png';
import './Header.css';

export class Header extends Component {
    
    render() {
        return (
            <header className="App-header">
                <section className="content--1">
                    <img alt="logo" src={headerImg} />
                    <p>Powerfull simple with a</p>
                </section>
                <section className="content--2">
                    <button>Get Started</button>
                </section>
            </header>
        );
    }
}

