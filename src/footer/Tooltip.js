import React, { Component } from "react";
import "../speachBubble/speachBubble.css"
import './footer.css'

export class Tooltip extends Component {
    state = {
        showTip: false
    };

    displayTooltip(canShow) {
        this.setState({
            showTip: canShow
        });
    }

    render() {
        const style = {
            zIndex: (this.state.showTip) ? 1000 : -1000,
            opacity: +this.state.showTip,
        };

        return(
            <a>
                <i className={this.props.icon} 
                    onMouseEnter={() => this.displayTooltip(true)}
                    onMouseOut={() => this.displayTooltip(false)}
                    >
                    <div className="blog footer-tooltip" style={style}>
                        <div className="blog-text">
                            {this.props.text}
                        </div>
                        <div className="small-triangle"></div>
                    </div>
                </i>
            </a>
        );
    }
}