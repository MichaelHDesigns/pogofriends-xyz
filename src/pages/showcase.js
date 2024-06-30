// src/Showcase.js
import React from 'react';
import ContentContainer from '../components/contentContainer';
import { Tweet } from 'react-tweet';
import '../styles/contentPage.css';

const Showcase = () => (
    <main>
        <ContentContainer>
            <h1>Showcase</h1>
            <p>Did you catch a hundo? A good trade? Either way we wanna see what you caught! Share it on our daily X post!</p>
        </ContentContainer>
        <Tweet id='1807316561734074753' />
    </main>
);

export default Showcase;