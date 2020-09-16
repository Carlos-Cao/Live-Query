import * as React from 'react';
import logo from "../images/logo.png";

class Header extends React.Component {

    updateColours() {
        let colours = ["red", "green", "blue"];
        return colours[(Math.random() * colours.length) >> 0];
    }

    render() {
        return (
            <div className="headers">
                <h1 className="animate__heartBeat">
                    <span style={{ color: this.updateColours() }}>
                        Live Query
                    </span></h1>
                <h4>
                    Live Q&amp;A App
                </h4>
                <img alt="Live Query Logo" src={logo} className="logo" />
                <p >Ask a question!</p>
                <div className="fb-share-button" data-href="https://questionanswers.azurewebsites.net/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fquestionanswers.azurewebsites.net%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                <hr className="divide" />
            </div>
        )
    }
}

export default Header;