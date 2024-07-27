import React from 'react';
import './ideas.css';
import Header from "../assets/header/header.jsx";

function IdeasPage() {
    return (
        <div>
            <Header />
            <div className='title-container'>
                <div className='title-content'>
                    <div className='title-text-illustration'>
                        <img src='/icons/yellow-star-44-70.svg' alt="Ronds jaune décoratif"/>
                        <h1>Vos idées</h1>
                    </div>
                    <p>Pour trouver une nouvelle voie, ou des gens d’opinions différentes</p>
                </div>
            </div>
        </div>
    );
}

export default IdeasPage;