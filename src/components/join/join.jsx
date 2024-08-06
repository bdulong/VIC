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
                        <img src='/icons/green-zebra-181-70.svg' alt="Ronds jaune décoratif"/>
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