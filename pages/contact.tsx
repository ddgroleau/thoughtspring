import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
    return (
        <Layout 
            title="Contact | ThoughtSpring Creative" 
            description={`Contact us today! We are New England's leading web design and development company. 
        We build websites, applications, and custom tools for business automations and analytics.
        ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
        and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`}>
            <div className={styles.container}>
                
            </div>
        </Layout>
    );
};

export default Contact;