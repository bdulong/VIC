import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleMobileMenu = (e) => {
        e.stopPropagation();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                burgerRef.current && !burgerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <header>
            <nav>
                <div className='header-content' >
                    <Link to="/"><ul><img className='logo' src='./images/logo.png' alt="Vers l'intelligence collective"></img></ul></Link>
                    <div className='lien-redirection' >
                        <HashLink smooth to='/#qui-sommes-nous'><ul>Qui sommes-nous ?</ul></HashLink>                    
                        <Link to="/vos-idees"><ul>Vos idées</ul></Link>
                        <Link to="/nous-rejoindre"><ul>Nous rejoindre</ul></Link>
                        <Link to="/se-connecter"><ul>Se connecter</ul></Link>
                    </div>
                    <div ref={burgerRef} className="burger-menu" onClick={toggleMobileMenu}>
                        <img className='icon-burger'
                            src={isMobileMenuOpen ? '/icons/close.svg' : '/icons/burger.svg'} 
                            alt={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        />
                    </div>
                </div>
                <div ref={menuRef} className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <HashLink smooth to='/#qui-sommes-nous' onClick={toggleMobileMenu}><ul>Qui sommes-nous ?</ul></HashLink>                    
                    <Link to="/vos-idees" onClick={toggleMobileMenu}><ul>Vos idées</ul></Link>
                    <Link to="/nous-rejoindre" onClick={toggleMobileMenu}><ul>Nous rejoindre</ul></Link>
                    <Link to="/se-connecter" onClick={toggleMobileMenu}><ul className='last-item'>Se connecter</ul></Link>
                    <hr />
                </div>
                <hr />
            </nav>
        </header>
    )
}

export default Header;