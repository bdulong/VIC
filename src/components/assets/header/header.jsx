import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <div className='header-content' >
                    <ul><Link to="/"> <img className='logo' src='./images/logo.png' alt="Vers l'intelligence collective"></img></Link></ul>
                    <div className='lien-redirection' >
                    <ul><HashLink smooth to='/#qui-sommes-nous'>Qui sommes-nous ?</HashLink></ul>                    
                    <Link to="/vos-idees"><ul>Vos idées</ul></Link>
                    <Link to="/nous-rejoindre"><ul>Nous rejoindre</ul></Link>
                    <Link to="/se-connecter"><ul>Se connecter</ul></Link>
                    </div>
                </div>
                <hr />
            </nav>
        </header>
    )
}

export default Header;