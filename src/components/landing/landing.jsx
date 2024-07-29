import React from 'react';
import './landing.css';
import Header from "../assets/header/header.jsx";
import CTAJoin from '../assets/cta/cta.jsx';

function LandingPage() {
    return (
        <div>
            <Header />
            <div className='hero-banner__container'>
                <div className='hero-text__container'>
                    <h3>Élections municipale Paris 2026</h3>
                    <div className="hero-container-stylised-text">
                        <div className="row-stylised-text">
                            <div className="box-stylised-hero-text red-extrabold">Misons</div>
                            <div className="box-stylised-hero-text">sur</div>
                        </div>
                        <div className="row-stylised-text">
                            <div className="box-stylised-hero-text yellow-extrabold">l'intelligence</div>
                        </div>
                        <div className="row-stylised-text">
                            <div className="box-stylised-hero-text green-extrabold">collective</div>
                        </div>
                    </div>
                    <CTAJoin />
                </div>
            </div>
            <div className='intro-text__container' id='qui-sommes-nous'>
                <p className="stylised-intro-text">
                    <span className="yellow-bold">L'intelligence</span>
                    <span className="green-bold">collective</span>
                    se manifeste par le fait qu'une équipe d'agents
                    <span className="red-bold">coopérants</span>, peut
                    résoudre des problèmes plus
                    <span className="yellow-bold">efficacement</span>,
                    que lorsque ces agents travaillent isolément.
                </p>
            </div>
            <div className='explanatory-text__container'>
                <div className='explanatory-text__content'>
                    <img src='/icons/red-square-160-180.svg' alt="Carré rouge décoratif"/>
                    <div className='explanatory-text'>
                        <h3>Coopérons pour un nouveau Paris</h3>
                        <p>À chaque élection l’abstention monte. Les partis politique ne font que diviser les parisiens. Aboutissant à l’élection d’une personne avec seulement 15% des inscrits.</p>
                    </div>
                </div>
                <div className='explanatory-text__content'>
                    <div className='explanatory-text-left'>
                        <h3>Réunissons-nous</h3>
                        <p>Pour trouver une nouvelle voie, où des gens d’opinions différentes mais ayant des passions et des spécialités, se rassembleront pour gérer de façon concrète et réaliste notre capitale.</p>
                    </div>
                    <img src='/icons/yellow-circle-91-180.svg' alt="Ronds jaune décoratif"/>
                </div>
            </div>
            <div className='reason-text__container'>
                <h2>Pour les municipales de 2026, rassemblons-nous pour changer Paris</h2>
                <div className='reason-text-content__container'>
                    <div className='reason__container'>
                        <div className='reason-title'>
                            <img src='/icons/green-square-214-70.svg' alt="Ronds jaune décoratif"/>
                            <h3>Diversité</h3>
                        </div>
                        <p>Diversité d'opinions : car plus les approches sont diverses, plus il est probable qu'une bonne ou meilleure solution émerge.</p>
                    </div>
                    <div className='reason__container'>
                        <div className='reason-title'>
                            <img src='/icons/red-circle-183-70.svg' alt="Ronds jaune décoratif"/>
                            <h3>Indépendance</h3>
                        </div>
                        <p>Indépendance d'esprit : car les opinions de chacun ne doivent pas dépendre des opinions d’un parti.</p>
                    </div>
                    <div className='reason__container'>
                        <div className='reason-title'>
                            <img src='/icons/yellow-round-81-70.svg' alt="Ronds jaune décoratif"/>
                            <h3>Décentralisation</h3>
                        </div>
                        <p>La plus décentralisée possible : le savoir spécialisé de chaque individu assurera un équilibre entre le global et le local.</p>
                    </div>
                    <div className='reason__container'>
                        <div className='reason-title'>
                            <img src='/icons/green-slash-100-70.svg' alt="Ronds jaune décoratif"/>
                            <h3>Agrégation</h3>
                        </div>
                        <p>Trouver une agrégation : un mécanisme de compte objectif, pour réunir les jugements des personnes en un jugement final.</p>
                    </div>
                </div>
            </div>
            <div className='text-action__container'>
                <p className="stylised-intro-text">
                    Pour se
                    <span className="red-bold">rencontrer</span>
                    , il suffit de s'inscrire, de décrire ses
                    <span className="yellow-bold">spécialisations</span>
                    , et ses
                    <span className="green-bold">actions</span>
                    pour l'année 2024.
                </p>
                <CTAJoin />
            </div>
        </div>
    );
}

export default LandingPage;