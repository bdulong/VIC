import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css'

const CTAJoin = () => {
    return(
        <Link className='cta-join' to="/nous-rejoindre">
            <p>Rejoignez-nous</p>
        </Link>
    )
}

export default CTAJoin;