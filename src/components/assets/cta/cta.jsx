import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css'

const CTAJoin = () => {
    return(
        <Link to="/nous-rejoindre">
            <div className='cta-join'>
                <p>Rejoignez-nous</p>
            </div>
        </Link>
    )
}

export default CTAJoin;