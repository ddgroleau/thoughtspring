import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import ServicesMeta from '../components/ServicesMeta';
import StyledButton from '../components/StyledButton';
import styles from '../styles/Services.module.scss';

const Services = () => {
    return (
        <Layout 
            title="Services | ThoughtSpring Creative" 
            description={`We are New England's leading web design and development company. 
We build websites, applications, and custom tools for business automations and analytics.
ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.heroImg}>
                        <div className={styles.heroContent}>
                            <div className={styles.flexWrapper}>
                                <div className={styles.leftContent}>
                                    <h1 className={styles.title}>Choose us to build your next dream project.</h1>
                                    <div className={styles.mobileLink}>
                                        <Link href="/contact">CONTACT FOR PRICING</Link>
                                    </div>
                                    <div className={styles.servicesMeta}>
                                        <ServicesMeta iconTheme='white'/>
                                    </div>
                                </div>
                                <div className={styles.rightContent}>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Services;