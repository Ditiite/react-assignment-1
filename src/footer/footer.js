import React, { Component } from "react"
import './footer.css'

export class Footer extends Component {
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
                <div>
                    <section>
                        <p className="footer-copyright">
                            Copyright © 2003-2012 ventus inc. All rights reserved.
                        </p>
                        <div>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-vimeo"></i>
                            <i class="fab fa-google-plus-square"></i>
                            <i class="fab fa-pinterest-square"></i>
                        </div>
                    </section>
                    <div>
                        <i class="fas fa-long-arrow-alt-up"></i>
                    </div>
                </div>
            </footer>
        )
    }
}