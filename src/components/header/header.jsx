import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../images/logo.png';

const Header = () => {
    return(
        <header>
            <nav>
                <div className='header-content' >
                    <ul><Link to="/"> <img className='logo' src={Logo} alt="Vers l'intelligence collective"></img></Link></ul>
                    <div className='lien-redirection' >
                        <ul>Qui sommes-nous ?</ul>
                        <ul>Vos idées</ul>
                        <ul>Nous rejoindre</ul>
                    </div>
                </div>
                <div className='barre'></div>
            </nav>
        </header>
    )
}

export default Header;