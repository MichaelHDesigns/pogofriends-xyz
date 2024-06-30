// src/Friends.js
import React from 'react';
import ContentContainer from '../components/contentContainer';
import { Tweet } from 'react-tweet';
import '../styles/contentPage.css';

const Friends = () => (
    <main>
        <ContentContainer>
            <h1>Friends</h1>
            <p>Welcome to the Friends page. Head over to our Trainer Codes tweet to add yours and make some new friends.</p>
        </ContentContainer>
        <Tweet id='1807291869576995043' />
    </main>
);

export default Friends;
