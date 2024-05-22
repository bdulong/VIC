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
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_163_63)">
                        <path d="M35 0C36.1882 18.8159 51.184 33.8118 70 35C51.184 36.1882 36.1882 51.184 35 70C33.8118 51.184 18.8159 36.1882 0 35C18.8159 33.8118 33.8118 18.8159 35 0Z" fill="#EAD200"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_163_63">
                        <rect width="70" height="70" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                        <h1>Vos idées</h1>
                    </div>
                    <p>Pour trouver une nouvelle voie, ou des gens d’opinions différentes</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default IdeasPage;