import React from 'react';
import styles from '../styles/WebsiteAssessment.module.scss';
import StyledButton from './StyledButton';

const WebsiteAssessment = () => {
    return (
        <div className={styles.container}>
            <p><strong>Want to know how competetive your website is?</strong></p>
            <p>Get a free website assessment from us.</p>
            <StyledButton 
                innerText='FREE WEBSITE ASSESSMENT' 
                onClick={()=>{}} 
                backgroundColor={styles.blue} 
                fontSize="large"
                color={styles.white} 
            />
        </div>
    );
};

export default WebsiteAssessment;