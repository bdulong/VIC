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
                <div className='category-container'>
                    <div className='categories'>
                        <ul>Tous</ul>
                        <ul>Transport</ul>
                        <ul>Espaces verts</ul>
                        <ul>Culture</ul>
                        <ul>Urbanisme</ul>
                        <ul>Santé</ul>
                        <ul>Éducation</ul>
                        <ul>Technologie</ul>
                        <ul>Économie</ul>
                        <ul>Sécurité</ul>
                        <ul>Commerce</ul>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='ideas-list-container'>
                <div className='idea-container'>
                    <div className='idea-content'>
                        <div className='user-info'>
                            <img src='/images/user.png' alt="Utilisateur"/>
                            <div className='idea-title'>
                                <p>Jooidjfghoidjghn Doeiuhfgiuhdiugh</p>
                                <h4>Lorem ipsum dolor sit amet dolor sit amet</h4>
                            </div>
                            <div className='idea-category'>
                                <img src='/icons/tag.svg' alt="Catégorie"/>
                                <h4 className='tag'>Transport</h4>
                            </div>
                        </div>
                        <div className='idea-text-preview'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
                        </div>
                    </div>
                    <div className='idea-interaction'>
                        <div className='idea-vote'>
                            <img src='/icons/upvote.svg' alt="Upvote"/>
                            <p className='interaction'>9410</p>
                        </div>
                        <div className='idea-comment'>
                            <img src='/icons/commentaire.svg' alt="Commentaire"/>
                            <p className='interaction'>145</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='appel-action-container'>
                <div className='appel-action-text'>
                    <p>Les partis politique ne font que diviser les parisiens. C'est seulement en unissant leurs forces que les Parisiens pourront  redonner tout son sens à la démocratie et façonner un avenir où chaque  voix compte vraiment.</p>
                </div>
                <div className='appel-action-cta'>
                    <p>Rejoignez-nous</p>
                </div>
            </div>
        </div>
    );
}

export default IdeasPage;