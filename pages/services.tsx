import Link from 'next/link';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import ScrollAnimation from '../components/ScrollAnimation';
import ServicesMeta from '../components/ServicesMeta';
import StyledLink from '../components/StyledLink';
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
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.body}>
                    <h2 className={styles.subheading}>What can we do for you?</h2>
                    <div className={styles.bodyContent}>
                        <div className={styles.serviceCard}>
                            <h3>Website Design & Development</h3>
                            <p>
                                We build websites of any size and scope. 
                                Whether you are just starting your online presence, 
                                or want to upgrade to something bigger and better, we can do it.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Web & Mobile Applications</h3>
                            <p>
                                Do you have an idea for a new application? 
                                We can build it. Do you need a tool to manage your business processes? 
                                We can build that too.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Automations & Analytics</h3>
                            <p>
                                Do you need a custom reporting process or dashboard? 
                                Do you want to ditch your excel spreadsheets in 
                                favor of a modern, automated solution? We can do that for you.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Software Maintenance</h3>
                            <p>
                                Are you having an issue with your current website or application? 
                                Do you want to add a new feature to an exisiting website or application? 
                                We can do it all.
                            </p>
                        </div>
                    </div>
                </section>
                <ScrollAnimation animationClass={styles.slideUp} hiddenClass={styles.hidden}>
                    <StyledLink 
                        innerText="CONTACT FOR PRICING" 
                        backgroundColor={styles.blue} 
                        color={styles.white} 
                        fontSize={"x-large"}
                        href="/contact"
                    /> 
                </ScrollAnimation>
            </div>
        </Layout>
    );
};

export default Services;