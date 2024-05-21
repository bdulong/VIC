import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../../images/logo.png';

const Header = () => {
    return(
        <header>
            <nav>
                <div className='header-content' >
                    <ul><Link to="/"> <img className='logo' src={Logo} alt="Vers l'intelligence collective"></img></Link></ul>
                    <div className='lien-redirection' >
                    <Link to="/"><ul>Qui sommes-nous ?</ul></Link>
                    <Link to="/vos-idees"><ul>Vos idées</ul></Link>
                    <Link to="/nous-rejoindre"><ul>Nous rejoindre</ul></Link>
                    </div>
                </div>
                <div className='barre'></div>
            </nav>
        </header>
    )
}

export default Header;