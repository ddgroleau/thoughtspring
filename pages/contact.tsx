import Link from 'next/link';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import StyledLink from '../components/StyledLink';
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
                <section className={styles.hero}>
                    <div className={styles.heroImg}>
                        <div className={styles.heroContent}>
                            <div className={styles.flexWrapper}>
                                <div className={styles.text}>
                                    <h1 className={styles.title}>We are here for you.</h1>
                                    <p className={styles.main}>
                                        Thanks for your interest in hiring 
                                        ThoughtSpring Creative to build your next project. 
                                        Every client that works with us gets our undivided attention.
                                    </p>
                                    <p className={styles.supporting}>
                                        You can also email us 
                                        at <Link href="mailto:info@thoughtspringcreative.com">
                                            info@thoughtspringcreative.com
                                        </Link>, or 
                                        call us at <Link href="tel:9789992047">(978) 999 - 2047</Link> to get started.
                                    </p>
                                </div>
                                <div className={styles.form}>
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.body}>
                    <h2>Ready to get started?</h2>
                    <StyledLink 
                        innerText="SCHEDULE A CONSULTATION" 
                        backgroundColor={styles.blue} 
                        color={styles.white} 
                        fontSize={"x-large"}
                        href="/contact"
                    />
                </section>
            </div>
        </Layout>
    );
};

export default Contact;