// src/Home.js
import React from 'react';
import ContentContainer from '../components/contentContainer';
import pumpFunLogo from '../assets/pumpfun.jpg'
import dexscreenerLogo from '../assets/dexscreener.png'
import dextoolsLogo from '../assets/dextools.png'
import jupLogo from '../assets/jupiter.png'
import telegramLogo from '../assets/telegram.png'
import xLogo from '../assets/x.png'
import '../styles/globals.css'


const Home = () => (
    <main className='body-container'>
        <ContentContainer>
            <h1>PoGO Friends - $POGO</h1>
            <p>Drop your trainer code everywhere to show you're a $POGO Friend!</p>
        </ContentContainer>
        <ContentContainer>
            <h1>CA</h1>
            <p><a href="https://solscan.io/token/H1usrVgGWX23ALBfUWjzqgy1QXfpPegWVnsuzAQrpump">H1usrVgGWX23ALBfUWjzqgy1QXfpPegWVnsuzAQrpump</a></p>
        </ContentContainer>
        <ContentContainer>
            <h1>Links</h1>
            <a href='https://pump.fun/H1usrVgGWX23ALBfUWjzqgy1QXfpPegWVnsuzAQrpump'><img src={pumpFunLogo} alt='pumpfun logo' className='icon-links'></img></a>
            <a href='https://dexscreener.com/solana/cffu3aghzeck9pz8pyhupyvppjaolw2jzp5kugab9ejs'><img src={dexscreenerLogo} alt='dexscreener logo' className='icon-links'></img></a>
            <a href='https://www.dextools.io/app/en/solana/pair-explorer/CFfu3AGHZECk9PZ8pyhUPyVppJAoLw2JZP5Kugab9EJS?t=1719857055143'><img src={dextoolsLogo} alt='dextools logo' className='icon-links'></img></a>
            <a href='https://jup.ag/swap/SOL-H1usrVgGWX23ALBfUWjzqgy1QXfpPegWVnsuzAQrpump'><img src={jupLogo} alt='jup.ag logo' className='icon-links'></img></a>
            <a href='https://t.me/Pogofriendsportal'><img src={telegramLogo} alt='telegram logo' className='icon-links'></img></a>
            <a href='https://x.com/friendspogo'><img src={xLogo} alt='x logo' className='icon-links'></img></a>
        </ContentContainer>
        <ContentContainer>
            <h1>About The Dev</h1>
            <p>You can <a href='https://tiktok.com/@technicallyweb3' target='_blank'>follow the dev on TikTok</a> for this and other web3 projects. The dev decided to buy up 15% in a single wallet because there is no need to try and hide our activity. This was done out of transparency and to prevent whales sniping the supply at the beginning. There will be no selling out of this wallet. Only burns and airdrops are planned for these tokens.</p>
        </ContentContainer>
    </main>
);

export default Home;