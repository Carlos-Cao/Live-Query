import * as React from 'react';


class Header extends React.Component {

    updateColours() {
        let colours = ["red", "green", "blue"];
        return colours[(Math.random() * colours.length) >> 0];
    }

    render() {
        return (
            <div className="headers">
                <h1>
                    <span style={{ color: this.updateColours() }}>
                        Live Q&amp;A App
                        </span>
                </h1>
                <p>Ask a question!</p>
                <hr className="divide" />
            </div>
        )
    }
}

export default Header;