import React from 'react';
import './connect.css';
import Header from "../assets/header/header.jsx";

function ConnectPage() {
    return (
        <div>
            <Header />
            <div className='title-container'>
                <div className='title-content'>
                    <div className='title-text-illustration'>
                        <img src='/icons/yellow-round-81-70.svg' alt="Ronds jaune décoratif"/>
                        <h1>Se connecter</h1>
                    </div>
                    <p>Inscrivez votre adresse courriel pour vous connecter</p>
                </div>
            </div>
        </div>
    );
}

export default ConnectPage;