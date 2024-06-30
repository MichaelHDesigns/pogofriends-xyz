// src/Home.js
import React from 'react';
import ContentContainer from '../components/contentContainer';
import pumpFunLogo from '../assets/pumpfun.jpg'
import telegramLogo from '../assets/telegram.png'
import xLogo from '../assets/x.png'
import '../styles/globals.css'


const Home = () => (
    <main>
        <ContentContainer>
            <h1>PoGO Friends - $POGO</h1>
            <p>Drop your trainer code everywhere to show you're a $POGO Friend!</p>
        </ContentContainer>
        <ContentContainer>
            <h1>CA</h1>
            <p>addressnotyetavailable</p>
        </ContentContainer>
        <ContentContainer>
            <h1>Links</h1>
            <a href='https://pump.fun'><img src={pumpFunLogo} alt='pump fun logo' className='icon-links'></img></a>
            <a href='https://t.me/Pogofriendsportal'><img src={telegramLogo} alt='telegram logo' className='icon-links'></img></a>
            <a href='https://x.com/friendspogo'><img src={xLogo} alt='x logo' className='icon-links'></img></a>
        </ContentContainer>
    </main>
);

export default Home;