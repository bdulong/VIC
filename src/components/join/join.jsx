import React from 'react';
import './join.css';
import Header from "../assets/header/header.jsx";

function JoinPage() {
    return (
        <div>
            <Header />
            <div className='title-container'>
                <div className='title-content'>
                    <div className='title-text-illustration'>
                        <img src='/icons/green-zebra-181-70.svg' alt="Ronds jaune décoratif"/>
                        <h1>Nous rejoindre</h1>
                    </div>
                    <p>Pour trouver une nouvelle voie, ou des gens d’opinions différentes</p>
                </div>
            </div>
        </div>
    );
}

export default JoinPage;