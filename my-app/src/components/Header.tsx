import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

const Header: React.FC = () => {
    return (
        <div className="navigation">

            <Navbar bg="secondary" variant="dark">

                <Navbar.Brand className="navigation">
                    <img
                        alt="Live Query Logo"
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-center"
                    />
                    <h1 className="animate__heartBeat"> Live Query </h1>
                    <h5>Live Q&amp;A App</h5>
                    <p >Ask a question!</p>

                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;