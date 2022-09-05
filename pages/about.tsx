import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <Layout 
            title="About | ThoughtSpring Creative" 
            description={`We are New England's leading web design and development company. 
    We build websites, applications, and custom tools for business automations and analytics.
    ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
    and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`}>
            <div className={styles.container}>

            </div>
        </Layout>
    );
};

export default About;