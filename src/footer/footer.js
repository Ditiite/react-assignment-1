import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tooltip } from './Tooltip'
import './footer.css'

export class Footer extends Component {

    toggle() {
        //         onMouseEnter={this.toggle}
        //         onMouseOut={this.toggle}
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    render() {

        return (
            <footer>
                <section className="footer-section">
                    <div className="footer-about">
                        <h3>About us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor.</p>
                        <ul>
                            <li>123 Street Name</li>
                            <li>Road Name</li>
                            <li>London</li>
                            <li>+44 74139 13807</li>
                        </ul>
                    </div>
                    <div className="footer-tweets">
                        <h3>Latest tweets</h3>
                        <p>
                            <span className="footer-light-text"> @Lorem </span>
                            ipsum dolor sit amet, consectetur
                            <span className="footer-light-text"> #incididunt </span>
                            ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            <span className="footer-light-text"> @Lorem </span>
                            ipsum dolor sit amet, consectetur
                            <span className="footer-light-text"> #incididunt </span>
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="footer-posts">
                        <h3>latest posts</h3>
                        <ul className="posts">
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li className="footer-blue-post">Adipiscing elit, sed do </li>
                            <li>Eiusmod tempor incididunt</li>
                            <li>Ut labore et dolore magna aliqua</li>
                        </ul>
                    </div>
                    <div className="footer-flicker">
                        <h3>Flicker</h3>
                        <div className="footer-flicker-grid">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <div className="footer-copyright-full-width">
                    <section className="footer-copyright">
                        <p className="footer-copyright-text">
                            Copyright © 2003-2012 ventus inc. All rights reserved.
                        </p>
                        <div className="footer-copyright-icons">
                            <Tooltip icon="fab fa-twitter" text="Twitter" />
                            <Tooltip icon="fab fa-facebook-f" text="Facebook" />
                            <Tooltip icon="fab fa-vimeo-v" text="Vimeo" />
                            <Tooltip icon="fab fa-google-plus-g" text="Google +" />
                            <Tooltip icon="fab fa-pinterest-p" text="Pinterest" />
                        </div>
                        <div className="footer-arrowUp">
                            <i class="fas fa-long-arrow-alt-up"></i>
                        </div>
                    </section>
                </div>
            </footer>
        )
    }
}