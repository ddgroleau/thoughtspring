import React from 'react';
import styles from '../styles/WebsiteAssessment.module.scss';
import StyledLink from './StyledLink';

const WebsiteAssessment = () => {
    return (
        <div className={styles.container}>
            <p><strong>Want to know how competetive your website is?</strong></p>
            <p>Get a free website assessment from us.</p>
            <StyledLink 
                innerText='FREE WEBSITE ASSESSMENT' 
                href="/contact"
                backgroundColor={styles.blue} 
                fontSize="large"
                color={styles.white} 
            />
        </div>
    );
};

export default WebsiteAssessment;