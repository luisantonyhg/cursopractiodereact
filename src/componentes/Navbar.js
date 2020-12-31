import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

import logo from '../images/AliadoPlatzi.svg';


class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/noencontrado">
                        <img className="Navbar__brand-logo" src={logo} alt="logo" />
                        <span className="font-weigth-ligth">Platzi</span>
                        <span className="font-weigth-bold">Conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;