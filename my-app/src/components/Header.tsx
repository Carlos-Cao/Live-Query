import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

const Header: React.FunctionComponent = () => {
    return (
        <div className="navigation">

            <Navbar bg="light" variant="light">

                <Navbar.Brand className="navigation">

                    <h1 className="animate__heartBeat"> LiveQuery </h1>
                    <img
                        alt="Live Query Logo"
                        src={logo}
                        width="20%"
                        height="20%"
                        className="d-inline-block align-center"
                    />
                    <h5>Live Q&amp;A App</h5>
                    <p >Ask a question!</p>
                    <div className="fb-share-button" data-href="https://livequery.azurewebsites.net/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flivequery.azurewebsites.net%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                    <hr />
                </Navbar.Brand>

            </Navbar>

        </div >

    )
}

export default Header;