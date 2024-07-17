import React, { useState } from 'react';
import './join.css';
import Header from "../assets/header/header.jsx";

function JoinPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email }),
            });
            if (response.ok) {
                alert('Inscription réussie !');
                setFirstName('');
                setLastName('');
                setEmail('');
            } else {
                alert('Erreur lors de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'inscription');
        }
    };

    return (
        <div>
            <Header />
            <div className='title-container'>
                <div className='title-content'>
                    <div className='title-text-illustration'>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_67_55)">
                            <path d="M2.71055 48.4909C4.61669 32.9021 12.5621 27.902 19.6765 23.4716C26.9411 18.9457 33.2245 14.9816 32.4686 0.0876465C29.1549 0.324472 25.8921 1.03489 22.7799 2.19724C23.096 14.0175 17.4965 17.5231 12.0629 20.9081C6.32408 24.4826 0.902993 27.8598 0.563393 41.1872C1.01724 43.724 1.73869 46.1732 2.71055 48.4909Z" fill="#35CA32"/>
                            <path d="M10.4071 18.2508C15.4714 15.0942 19.567 12.512 19.6593 3.54155C10.4415 8.05965 3.49303 16.5121 1.00628 26.697C3.55876 22.5201 7.10657 20.3056 10.4071 18.2508ZM11.332 60.7572C12.5652 44.1434 19.8549 38.3451 26.9239 32.7316C34.6033 26.6344 41.8601 20.8565 41.4516 0.586868C39.5185 0.227335 37.5584 0.0310202 35.5924 0C36.403 16.6843 28.7581 21.5013 21.3307 26.1273C13.8063 30.8145 6.04082 35.68 5.443 53.7039C7.08973 56.302 9.06957 58.6732 11.332 60.7572ZM48.8149 42.4908C55.8291 36.8615 62.4459 31.5031 62.0922 12.8235C60.2012 10.5218 58.0263 8.46887 55.6194 6.71377C55.5208 27.1211 47.5879 33.5 39.8992 39.6691C32.6627 45.4768 25.8316 50.9714 25.3308 68.6447C28.2166 69.4742 31.2511 69.9452 34.3873 70.0016C35.2121 53.455 42.1152 47.8696 48.8149 42.4908ZM60.571 49.7914C55.5474 52.8525 51.1905 55.5365 50.6835 66.3004C60.3159 61.4599 67.4162 52.3079 69.4382 41.3859C67.1815 45.7585 63.7589 47.8493 60.571 49.7914Z" fill="#35CA32"/>
                            <path d="M58.9434 47.12C64.3238 43.8398 69.4085 40.7443 68.7887 26.3512L68.9499 26.3449C68.1304 23.1397 66.8572 20.0679 65.1689 17.2227C64.4287 33.921 57.5083 39.5299 50.7774 44.9322C44.3719 50.0685 38.3295 54.9622 37.5298 69.914C40.9442 69.6724 44.3043 68.9289 47.5019 67.7074C47.6928 53.9762 53.6679 50.3345 58.9434 47.12ZM37.943 37.2278C45.6348 31.0571 52.9026 25.2119 52.4769 4.66682C49.9985 3.23439 47.3531 2.11272 44.6004 1.32715C44.8242 22.517 36.7176 28.9522 28.8708 35.1824C21.7251 40.8554 14.9816 46.2452 14.3383 63.2299C16.7773 65.0215 19.4387 66.4887 22.2556 67.5947C23.0287 49.2453 30.6001 43.1199 37.943 37.2278Z" fill="#35CA32"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_67_55">
                            <rect width="70" height="70" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <h1>Nous rejoindre</h1>
                    </div>
                    <p>Pour trouver une nouvelle voie, ou des gens d'opinions différentes</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="join-form">
                <input
                    type="text"
                    placeholder="Prénom"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nom"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Adresse e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default JoinPage;