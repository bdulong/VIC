import React, { useState, useEffect } from 'react';
import './ideas.css';
import Header from "../assets/header/header.jsx";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

function IdeasPage() {
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIdea, setSelectedIdea] = useState(null);

    useEffect(() => {
        fetch('/text.json')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setContent(data.content);
                    setUsername(data.username);
                    setTitle(data.title);
                } else {
                    console.error('Data is undefined');
                }
            })
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    const Modal = ({ content, username, title, onClose }) => (
        <div className="modal-overlay" onClick={onClose}>
            <button className="close-button" onClick={onClose}>X</button>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='user-info'>
                    <img src='/images/user.png' alt="Utilisateur"/>
                    <div className='idea-title'>
                        <p>{username}</p>
                        <h4>{title}</h4>
                    </div>
                    <div className='idea-category'>
                        <img src='/icons/tag.svg' alt="Catégorie"/>
                        <h4 className='tag'>Transport</h4>
                    </div>
                </div>
                <p>{content}</p>
            </div>
        </div>
    );

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
                    <div className='idea-content' onClick={() => { setSelectedIdea(content); setModalOpen(true); }}>
                        <div className='user-info'>
                            <img src='/images/user.png' alt="Utilisateur"/>
                            <div className='idea-title'>
                                <p>{username}</p>
                                <h4>{title}</h4>
                            </div>
                            <div className='idea-category'>
                                <img src='/icons/tag.svg' alt="Catégorie"/>
                                <h4 className='tag'>Transport</h4>
                            </div>
                        </div>
                        <div className='idea-text-preview'>
                            <p>{truncateText(content, 240)}</p>
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
                <div className='appel-action-container'>
                    <div className='appel-action-text'>
                        <p>Les partis politique ne font que diviser les parisiens. C'est seulement en unissant leurs forces que les Parisiens pourront  redonner tout son sens à la démocratie et façonner un avenir où chaque  voix compte vraiment.</p>
                    </div>
                    <div className='appel-action-cta'>
                        <p>Rejoignez-nous</p>
                    </div>
                </div>
                <div className='idea-container'>
                    <div className='idea-content' onClick={() => { setSelectedIdea(content); setModalOpen(true); }}>
                        <div className='user-info'>
                            <img src='/images/user.png' alt="Utilisateur"/>
                            <div className='idea-title'>
                                <p>{username}</p>
                                <h4>{title}</h4>
                            </div>
                            <div className='idea-category'>
                                <img src='/icons/tag.svg' alt="Catégorie"/>
                                <h4 className='tag'>Transport</h4>
                            </div>
                        </div>
                        <div className='idea-text-preview'>
                            <p>{truncateText(content, 240)}</p>
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
                <div className='idea-container'>
                    <div className='idea-content' onClick={() => { setSelectedIdea(content); setModalOpen(true); }}>
                        <div className='user-info'>
                            <img src='/images/user.png' alt="Utilisateur"/>
                            <div className='idea-title'>
                                <p>{username}</p>
                                <h4>{title}</h4>
                            </div>
                            <div className='idea-category'>
                                <img src='/icons/tag.svg' alt="Catégorie"/>
                                <h4 className='tag'>Transport</h4>
                            </div>
                        </div>
                        <div className='idea-text-preview'>
                            <p>{truncateText(content, 240)}</p>
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
            {modalOpen && (
                <Modal 
                    content={selectedIdea} 
                    username={username}
                    title={title}
                    onClose={() => setModalOpen(false)} 
                />
            )}
        </div>
    );
}

export default IdeasPage;