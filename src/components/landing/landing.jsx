import React from 'react';
import './landing.css';
import Header from "../assets/header/header.jsx";
import CTAJoin from '../assets/cta/cta.jsx';

function LandingPage() {
    return (
        <div>
            <Header />
            <div className='hero-banner'>
                <div className='hero-text'>
                    <h3>Élections municipale Paris 2026</h3>
                    <div class="hero-container-stylised-text">
                        <div class="row-stylised-text">
                            <div class="box-stylised-hero-text red-extrabold">Misons</div>
                            <div class="box-stylised-hero-text">sur</div>
                        </div>
                        <div class="row-stylised-text">
                            <div class="box-stylised-hero-text yellow-extrabold">l'intelligence</div>
                        </div>
                        <div class="row-stylised-text">
                            <div class="box-stylised-hero-text green-extrabold">collective</div>
                        </div>
                    </div>
                    <CTAJoin />
                </div>
            </div>
            <div className='intro-text' id='qui-sommes-nous'>
                <div class="hero-container-stylised-text">
                    <div class="row-stylised-text">
                        <div class="box-stylised-intro-text yellow-bold">L'intelligence</div>
                        <div class="box-stylised-intro-text green-bold">collective</div>
                        <div class="box-stylised-intro-text">se manifeste par le</div>
                    </div>
                    <div class="row-stylised-text">
                        <div class="box-stylised-intro-text">fait qu'une équipe d'agents</div>
                        <div class="box-stylised-intro-text red-bold">coopérants</div>
                        <div class="box-stylised-intro-text comma">, peut</div>
                    </div>
                    <div class="row-stylised-text">
                        <div class="box-stylised-intro-text">résoudre des problèmes plus</div>
                        <div class="box-stylised-intro-text yellow-bold">efficacement</div>
                        <div class="box-stylised-intro-text comma">,</div>
                    </div>
                    <div class="row-stylised-text">
                        <div class="box-stylised-intro-text">que lorsque ces agents travaillent isolément.</div>
                    </div>
                </div>
            </div>
            <div className='explanatory-text-container'>
                <div className='explanatory-text-content'>
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_40_90)">
                    <path d="M94.8245 81.6645H85.1822C83.2406 81.6645 81.6666 83.2384 81.6666 85.1801V94.8224C81.6666 96.7641 83.2406 98.338 85.1822 98.338H94.8245C96.7662 98.338 98.3402 96.7641 98.3402 94.8224V85.1801C98.3402 83.2387 96.7662 81.6645 94.8245 81.6645ZM67.6041 27.2239H57.9615C56.0198 27.2239 54.4458 28.7979 54.4458 30.7396V40.3819C54.4458 42.3236 56.0198 43.8975 57.9615 43.8975H67.6041C69.5458 43.8975 71.1197 42.3236 71.1197 40.3819V30.7396C71.1197 28.7979 69.5458 27.2239 67.6041 27.2239ZM76.4002 152.779H94.8245C96.7662 152.779 98.3402 151.205 98.3402 149.263V112.401C98.3402 110.459 96.7662 108.885 94.8245 108.885H57.9615C56.0198 108.885 54.4458 110.459 54.4458 112.401V149.263C54.4458 151.205 56.0198 152.779 57.9615 152.779H76.3932L76.4002 152.779ZM122.045 136.105H112.403C110.461 136.105 108.887 137.679 108.887 139.621V149.263C108.887 151.205 110.461 152.779 112.403 152.779H122.045C123.987 152.779 125.561 151.205 125.561 149.263V139.621C125.561 137.679 123.987 136.105 122.045 136.105ZM122.045 71.1176C123.987 71.1176 125.561 69.5436 125.561 67.602V30.7396C125.561 28.7979 123.987 27.2239 122.045 27.2239H85.1822C83.2406 27.2239 81.6666 28.7979 81.6666 30.7396V67.6023C81.6666 69.544 83.2406 71.1179 85.1822 71.1179H122.045V71.1176ZM67.6041 98.338C69.5458 98.338 71.1197 96.7641 71.1197 94.8224V57.9597C71.1197 56.018 69.5458 54.444 67.6041 54.444H30.7414C28.7997 54.444 27.2257 56.018 27.2257 57.9597V94.822C27.2257 96.7637 28.7997 98.3377 30.7414 98.3377H67.6041V98.338ZM166.844 125.558H176.483C178.425 125.558 179.999 123.984 179.999 122.043V112.401C179.999 110.459 178.425 108.885 176.483 108.885H166.844C164.903 108.885 163.329 110.459 163.329 112.401V122.043C163.329 123.984 164.903 125.558 166.844 125.558ZM30.7414 125.558H40.3837C42.3254 125.558 43.8993 123.984 43.8993 122.043V112.401C43.8993 110.459 42.3254 108.885 40.3837 108.885H30.7414C28.7997 108.885 27.2257 110.459 27.2257 112.401V122.043C27.2257 123.984 28.7997 125.558 30.7414 125.558ZM166.844 54.4444C164.903 54.4444 163.329 56.0183 163.329 57.96V94.8227C163.329 96.7644 164.903 98.3384 166.844 98.3384H176.483C178.425 98.3384 179.999 96.7644 179.999 94.8227V57.96C179.999 56.0183 178.425 54.4444 176.483 54.4444H166.844ZM136.108 40.3819C136.108 42.3236 137.682 43.8975 139.623 43.8975H176.483C178.425 43.8975 179.999 42.3236 179.999 40.3819V3.51562C179.999 1.57395 178.425 0 176.483 0H139.623C137.682 0 136.108 1.57395 136.108 3.51562V40.3819ZM149.266 125.558C151.208 125.558 152.782 123.984 152.782 122.043V85.1801C152.782 83.2384 151.208 81.6645 149.266 81.6645H112.403C110.461 81.6645 108.887 83.2384 108.887 85.1801V122.043C108.887 123.984 110.461 125.558 112.403 125.558H149.266ZM13.1601 54.4444H3.51672C1.57504 54.4444 0.00109863 56.0183 0.00109863 57.96V67.6023C0.00109863 69.544 1.57504 71.1179 3.51672 71.1179H13.1601C15.1018 71.1179 16.6757 69.544 16.6757 67.6023V57.96C16.6757 56.0183 15.1018 54.4444 13.1601 54.4444ZM149.266 54.4444H139.623C137.682 54.4444 136.108 56.0183 136.108 57.96V67.6023C136.108 69.544 137.682 71.1179 139.623 71.1179H149.266C151.208 71.1179 152.782 69.544 152.782 67.6023V57.96C152.782 56.0183 151.207 54.4444 149.266 54.4444ZM54.4462 166.841V176.484C54.4462 178.426 56.0201 180 57.9618 180H67.6045C69.5461 180 71.1201 178.426 71.1201 176.484V166.841C71.1201 164.9 69.5461 163.326 67.6045 163.326H57.9618C56.0201 163.326 54.4462 164.9 54.4462 166.841ZM179.999 139.621C179.999 137.679 178.425 136.105 176.483 136.105H139.623C137.682 136.105 136.108 137.679 136.108 139.621V176.484C136.108 178.426 137.682 180 139.623 180H176.483C178.425 180 179.999 178.426 179.999 176.484V139.621ZM81.6666 166.842V176.484C81.6666 178.426 83.2406 180 85.1822 180H122.045C123.987 180 125.561 178.426 125.561 176.484V166.842C125.561 164.9 123.987 163.326 122.045 163.326H85.1822C83.2406 163.326 81.6666 164.9 81.6666 166.842ZM0.00109863 139.622V176.484C0.00109863 178.426 1.57504 180 3.51672 180H40.3805C42.3222 180 43.8961 178.426 43.8961 176.484V139.622C43.8961 137.68 42.3222 136.106 40.3805 136.106H3.51672C1.5754 136.106 0.00109863 137.68 0.00109863 139.622ZM13.1587 81.6645H3.51672C1.57504 81.6645 0.00109863 83.2384 0.00109863 85.1801V122.043C0.00109863 123.984 1.57504 125.558 3.51672 125.558H13.1587C15.1004 125.558 16.6743 123.984 16.6743 122.043V85.1801C16.6743 83.2387 15.1004 81.6645 13.1587 81.6645ZM76.3932 16.6771H94.8245C96.7662 16.6771 98.3402 15.1031 98.3402 13.1614V3.51562C98.3402 1.57395 96.7662 0 94.8245 0H57.9618C56.0201 0 54.4462 1.57395 54.4462 3.51562V13.1614C54.4462 15.1031 56.0201 16.6771 57.9618 16.6771H76.3932ZM125.561 13.1614V3.51562C125.561 1.57395 123.987 0 122.045 0H112.403C110.461 0 108.887 1.57395 108.887 3.51562V13.1614C108.887 15.1031 110.461 16.6771 112.403 16.6771H122.045C123.987 16.6771 125.561 15.1031 125.561 13.1614ZM0.00109863 40.3819C0.00109863 42.3236 1.57504 43.8975 3.51672 43.8975H40.3805C42.3222 43.8975 43.8961 42.3236 43.8961 40.3819V3.51562C43.8961 1.57395 42.3222 0 40.3805 0H3.51672C1.57504 0 0.00109863 1.57395 0.00109863 3.51562V40.3819Z" fill="#BB0000"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_40_90">
                    <rect width="180" height="180" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <div className='explanatory-text'>
                        <h3>Coopérons pour un nouveau Paris</h3>
                        <p>À chaque élection l’abstention monte. Les partis politique ne font que diviser les parisiens. Aboutissant à l’élection d’une personne avec seulement 15% des inscrits.</p>
                    </div>
                </div>
                <div className='explanatory-text-content'>
                    <div className='explanatory-text__left'>
                        <h3>Réunissons-nous</h3>
                        <p>Pour trouver une nouvelle voie, où des gens d’opinions différentes mais ayant des passions et des spécialités, se rassembleront pour gérer de façon concrète et réaliste notre capitale.</p>
                    </div>
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_40_92)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M45 90C69.8528 90 90 69.8528 90 45C90 69.8528 110.147 90 135 90C110.147 90 90 110.147 90 135C90 110.147 69.8528 90 45 90ZM45 90C20.1472 90 0 110.147 0 135C0 159.853 20.1472 180 45 180C69.8528 180 90 159.853 90 135C90 159.853 110.147 180 135 180C159.853 180 180 159.853 180 135C180 110.147 159.853 90 135 90C159.853 90 180 69.8528 180 45C180 20.1472 159.853 0 135 0C110.147 0 90 20.1472 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="#EAD200"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_40_92">
                        <rect width="180" height="180" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className='reason-text-container'>
                <h2>Pour les municipales de 2026, rassemblons-nous pour changer Paris</h2>
                <div className='reason-text-content__container'>
                    <div className='reason-container'>
                        <div className='reason-title'>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_70)">
                            <path d="M0 0H20.0263V20.0573H0V0ZM24.9869 0H45.0131V20.0573H24.9869V0ZM59.9869 0C54.4656 0 49.9737 4.49189 49.9737 10.0131V10.0443C49.9737 15.5656 54.4656 20.0573 59.9869 20.0573C65.5081 20.0573 70 15.5656 70 10.0443V10.0131C70 4.49189 65.5081 0 59.9869 0ZM10.0131 24.9714C4.49189 24.9714 0 29.4633 0 34.9846V35.0157C0 40.537 4.49189 45.0287 10.0131 45.0287C15.5344 45.0287 20.0263 40.537 20.0263 35.0157V34.9846C20.0263 29.4633 15.5344 24.9714 10.0131 24.9714ZM24.9869 24.9714H45.0131V45.0286H24.9869V24.9714ZM49.9737 24.9714H70V45.0286H49.9737V24.9714ZM0 49.9428H20.0263V70H0V49.9428ZM35 49.9428C29.4788 49.9428 24.9869 54.4346 24.9869 59.9558V59.987C24.9869 65.5082 29.4788 70 35 70C40.5213 70 45.0131 65.5082 45.0131 59.987V59.9558C45.0131 54.4346 40.5213 49.9428 35 49.9428ZM49.9737 49.9428H70V70H49.9737V49.9428Z" fill="#35CA32"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_40_70">
                            <rect width="70" height="70" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <h3>Diversité</h3>
                        </div>
                        <p>Diversité d'opinions : car plus les approches sont diverses, plus il est probable qu'une bonne ou meilleure solution émerge.</p>
                    </div>
                    <div className='reason-container'>
                        <div className='reason-title'>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_75)">
                            <path d="M70.0003 58.3338C70.0003 64.7767 64.7765 70.0003 58.3338 70.0003C51.8904 70.0003 46.6672 64.7765 46.6672 58.3338C46.6672 51.8904 51.8904 46.6672 58.3338 46.6672C64.7767 46.6672 70.0003 51.8904 70.0003 58.3338ZM55.4172 30.625C55.4172 36.2631 50.8469 40.8335 45.2086 40.8335C39.5703 40.8335 35.0002 36.2631 35.0002 30.6248C35.0002 24.9872 39.5703 20.4164 45.2086 20.4164C50.8469 20.4164 55.4172 24.9874 55.4172 30.625ZM35 52.5C35 62.165 27.1648 70.0003 17.4997 70.0003C7.83535 70.0003 0 62.165 0 52.4998C0 42.8348 7.83535 35.0002 17.4997 35.0002C27.1648 35.0002 35.0002 42.8348 35.0002 52.4998L35 52.5ZM29.1676 14.5838C29.1676 22.6381 22.6381 29.1676 14.5838 29.1676C6.52952 29.1676 0 22.6381 0 14.5838C0 6.52952 6.52952 0 14.5838 0C22.6381 0 29.1676 6.52952 29.1676 14.5838ZM70.0003 8.75C70.0003 13.5825 66.0823 17.4997 61.2497 17.4997C56.4172 17.4997 52.4998 13.5825 52.4998 8.74983C52.5 3.91733 56.4172 0 61.25 0C66.0825 0 70.0005 3.91733 70.0005 8.75H70.0003ZM67.0829 37.916C67.0829 39.5269 65.7773 40.8328 64.1664 40.8328C62.5555 40.8328 61.2497 39.5271 61.2497 37.916C61.2497 36.3058 62.5555 35.0002 64.1664 35.0002C65.7773 35.0002 67.0829 36.3058 67.0829 37.916ZM45.2086 10.2084C45.2086 12.6251 43.2501 14.5838 40.8334 14.5838C38.4175 14.5838 36.4588 12.6251 36.4588 10.2084C36.4588 7.79263 38.4173 5.83396 40.8334 5.83396C43.25 5.83396 45.2086 7.79246 45.2086 10.2084Z" fill="#BB0000"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_40_75">
                            <rect width="70" height="70" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <h3>Indépendance</h3>
                        </div>
                        <p>Indépendance d'esprit : car les opinions de chacun ne doivent pas dépendre des opinions d’un parti.</p>
                    </div>
                    <div className='reason-container'>
                        <div className='reason-title'>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_80)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.45029 23.1743C5.47603 18.6603 6.74303 13.7595 10.2513 10.2513C13.7595 6.74303 18.6603 5.47603 23.1743 6.45025C25.6773 2.56946 30.0386 0 35 0C39.9613 0 44.3226 2.56947 46.8258 6.45029C51.3397 5.47603 56.2404 6.74303 59.7488 10.2513C63.2569 13.7595 64.5239 18.6603 63.5499 23.1743C67.4306 25.6773 70 30.0386 70 35C70 39.9613 67.4306 44.3226 63.5499 46.8258C64.5239 51.3397 63.2569 56.2404 59.7488 59.7488C56.2404 63.2569 51.3397 64.5239 46.8258 63.5499C44.3226 67.4306 39.9613 70 35 70C30.0386 70 25.6774 67.4306 23.1743 63.5499C18.6603 64.5239 13.7595 63.2569 10.2513 59.7488C6.74303 56.2404 5.47603 51.3397 6.45029 46.8258C2.56946 44.3226 0 39.9613 0 35C0 30.0386 2.56946 25.6773 6.45029 23.1743ZM25.0094 44.9732C30.5009 50.4644 39.4044 50.4644 44.8959 44.9732C50.3874 39.4817 50.3874 30.5782 44.8959 25.0867C39.4044 19.5952 30.5009 19.5952 25.0094 25.0867C19.518 30.5782 19.518 39.4817 25.0094 44.9732Z" fill="#EAD200"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_40_80">
                            <rect width="70" height="70" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <h3>Décentralisation</h3>
                        </div>
                        <p>La plus décentralisée possible : le savoir spécialisé de chaque individu assurera un équilibre entre le global et le local.</p>
                    </div>
                    <div className='reason-container'>
                        <div className='reason-title'>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M35 0H0L35 35H0L35 70H70L35 35H70L35 0Z" fill="#35CA32"/>
                            </svg>
                            <h3>Agrégation</h3>
                        </div>
                        <p>Trouver une agrégation : un mécanisme de compte objectif, pour réunir les jugements des personnes en un jugement final.</p>
                    </div>
                </div>
            </div>
            <div className='text-action-container'>
                <div class="hero-container-stylised-text">
                    <div class="row-stylised-text">
                        <div class="box-stylised-intro-text">Pour se</div>
                        <div class="box-stylised-intro-text red-bold">rencontrer</div>
                        <div class="box-stylised-intro-text comma">, il suffit de s'inscrire décrire</div>
                    </div>
                    <div class="row-stylised-text">
                        <div class="box-stylised-intro-text">ses</div>
                        <div class="box-stylised-intro-text yellow-bold">spécialisations</div>
                        <div class="box-stylised-intro-text comma">, et ses</div>
                        <div class="box-stylised-intro-text green-bold">actions</div>
                        <div class="box-stylised-intro-text">pour l'année 2024.</div>
                    </div>
                </div>
                <CTAJoin />
            </div>
        </div>
    );
}

export default LandingPage;