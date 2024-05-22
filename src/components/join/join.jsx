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
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_40_70)">
                            <path d="M0 0H20.0263V20.0573H0V0ZM24.9869 0H45.0131V20.0573H24.9869V0ZM59.9869 0C54.4656 0 49.9737 4.49189 49.9737 10.0131V10.0443C49.9737 15.5656 54.4656 20.0573 59.9869 20.0573C65.5081 20.0573 70 15.5656 70 10.0443V10.0131C70 4.49189 65.5081 0 59.9869 0ZM10.0131 24.9714C4.49189 24.9714 0 29.4633 0 34.9846V35.0157C0 40.537 4.49189 45.0287 10.0131 45.0287C15.5344 45.0287 20.0263 40.537 20.0263 35.0157V34.9846C20.0263 29.4633 15.5344 24.9714 10.0131 24.9714ZM24.9869 24.9714H45.0131V45.0286H24.9869V24.9714ZM49.9737 24.9714H70V45.0286H49.9737V24.9714ZM0 49.9428H20.0263V70H0V49.9428ZM35 49.9428C29.4788 49.9428 24.9869 54.4346 24.9869 59.9558V59.987C24.9869 65.5082 29.4788 70 35 70C40.5213 70 45.0131 65.5082 45.0131 59.987V59.9558C45.0131 54.4346 40.5213 49.9428 35 49.9428ZM49.9737 49.9428H70V70H49.9737V49.9428Z" fill="#35CA32"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_40_70">
                            <rect width="70" height="70" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <h1>Nous rejoindre</h1>
                    </div>
                    <p>Pour trouver une nouvelle voie, ou des gens d’opinions différentes</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default JoinPage;