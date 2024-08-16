import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ideas.css';
import Header from "../assets/header/header.jsx";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const ImageModal = ({ imageUrl, onClose }) => (
    <div className="image-modal-overlay" onClick={onClose}>
        <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <img src={imageUrl} alt="Agrandie" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </div>
        <img src='icons/close.svg' alt='croix' className="image-close-button" onClick={onClose}/>
    </div>
);

const Modal = ({ content, username, title, category, userImage, attachedPictures, likes, comments, onClose, scrollToComments, openImageModal }) => {
    const commentsRef = useRef(null);

    useEffect(() => {
        if (scrollToComments && commentsRef.current) {
            commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollToComments]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='user-info'>
                    <img src={userImage} alt={`Avatar de ${username}`}/>
                    <div className='idea-title'>
                        <p>{username}</p>
                        <h4>{title}</h4>
                    </div>
                    <div className='idea-category'>
                        <img src='/icons/tag.svg' alt="Catégorie"/>
                        <h4 className='tag'>{category}</h4>
                    </div>
                </div>
                <p>{content}</p>
                <div className='pictures-container'>
                    {Array.isArray(attachedPictures) && attachedPictures.map((picture, index) => (
                        <img 
                            key={index} 
                            src={picture} 
                            alt={`Pièce jointe ${index + 1} de ${username}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                openImageModal(picture);
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
                <div className='idea-interaction__modal'>
                    <div className='idea-vote'>
                        <img src='/icons/upvote.svg' alt="Upvote"/>
                        <p className='interaction'>{likes}</p>
                    </div>
                    <div className='idea-comment__modal'>
                        <img src='/icons/commentaire.svg' alt="Commentaire"/>
                        <p className='interaction'>{comments.length}</p>
                    </div>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Ajouter un commentaire" className="input-field" />
                    <div className="send-button">
                        <img src='/icons/send.svg' alt="Envoyer"/>
                    </div>
                </div>
                <div className="list-comments-container" ref={commentsRef}>
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <img className='img-comments' src={comment.userImage} alt={`Avatar de ${comment.username}`}/>
                            <div className="comment-content">
                                <p className="comment-username">{comment.username}</p>
                                <p className="comment-text">{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src='icons/close.svg' alt='croix' className="close-button" onClick={onClose}/>
        </div>
    );
};

const IdeaItem = ({ content, username, title, category, attachedPictures, userImage, likes, comments, onSelect, onCommentClick, openImageModal }) => {
    return (
        <div className='idea-container'>
            <div className='idea-content' onClick={onSelect}>
                <div className='user-info'>
                    <img src={userImage} alt={`Avatar de ${username}`}/>
                    <div className='idea-title'>
                        <p>{username}</p>
                        <h4>{title}</h4>
                    </div>
                    <div className='idea-category'>
                        <img src='/icons/tag.svg' alt="Catégorie"/>
                        <h4 className='tag'>{category}</h4>
                    </div>
                </div>
                <div className='idea-text-preview'>
                    <p>{truncateText(content, 240)}</p>
                </div>
                <div className='pictures-container'>
                    {Array.isArray(attachedPictures) && attachedPictures.map((picture, index) => (
                        <img 
                            key={index} 
                            src={picture} 
                            alt={`Pièce jointe ${index + 1} de ${username}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                openImageModal(picture);
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
            </div>
            <div className='idea-interaction'>
                <div className='idea-vote'>
                    <img src='/icons/upvote.svg' alt="Upvote"/>
                    <p className='interaction'>{likes}</p>
                </div>
                <div className='idea-comment' onClick={onCommentClick}>
                    <img src='/icons/commentaire.svg' alt="Commentaire"/>
                    <p className='interaction'>{comments.length}</p>
                </div>
            </div>
        </div>
    );
};

function IdeasPage() {
    const [ideas, setIdeas] = useState([]);
    const [categories, setCategories] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIdea, setSelectedIdea] = useState(null);
    const [scrollToComments, setScrollToComments] = useState(false);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('/text.json')
            .then(response => response.json())
            .then(data => {
                if (data && data.ideas && data.categories) {
                    setIdeas(data.ideas);
                    setCategories(data.categories);
                } else {
                    setError('Données manquantes dans le JSON');
                }
            })
            .catch(error => {
                console.error('Error loading JSON:', error);
                setError('Erreur lors du chargement des données');
            });
    }, []);

    const openModal = (idea, shouldScrollToComments = false) => {
        setSelectedIdea(idea);
        setModalOpen(true);
        setScrollToComments(shouldScrollToComments);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedIdea(null);
        setScrollToComments(false);
    };

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <Header />
            <div className='title-container'>
                <div className='title-content'>
                    <div className='title-text-illustration'>
                        <img src='/icons/yellow-star-44-70.svg' alt="Ronds jaune décoratif"/>
                        <h1>Vos idées</h1>
                    </div>
                    <p>Pour trouver une nouvelle voie, ou des gens d'opinions différentes</p>
                </div>
                <div className='category-container'>
                    <div className='categories'>
                        {categories.map((category, index) => (
                            <ul key={index}>{category}</ul>
                        ))}
                    </div>
                    <hr />
                </div>
            </div>
            <div className='ideas-list-container'>
                {error && <p className="error-message">{error}</p>}
                {ideas.map((idea, index) => (
                    <IdeaItem 
                        key={index}
                        {...idea}
                        onSelect={() => openModal(idea)}
                        onCommentClick={(e) => {
                            e.stopPropagation();
                            openModal(idea, true);
                        }}
                        openImageModal={openImageModal}
                    />
                ))}
                <div className='appel-action-container'>
                    <div className='appel-action-text'>
                        <p>Les partis politique ne font que diviser les parisiens. C'est seulement en unissant leurs forces que les Parisiens pourront redonner tout son sens à la démocratie et façonner un avenir où chaque voix compte vraiment.</p>
                    </div>
                    <Link className='appel-action-cta' to="/nous-rejoindre">
                        <p>Rejoignez-nous</p>
                    </Link>
                </div>
                {ideas.slice(2).map((idea, index) => (
                    <IdeaItem 
                        key={index + 2}
                        {...idea}
                        onSelect={() => openModal(idea)}
                        onCommentClick={(e) => {
                            e.stopPropagation();
                            openModal(idea, true);
                        }}
                    />
                ))}
            </div>
            {modalOpen && selectedIdea && (
                <Modal 
                    {...selectedIdea}
                    onClose={closeModal}
                    scrollToComments={scrollToComments}
                    openImageModal={openImageModal}
                />
            )}
            {selectedImage && (
                <ImageModal 
                    imageUrl={selectedImage} 
                    onClose={closeImageModal}
                />
            )}
        </div>
    );
}

export default IdeasPage;