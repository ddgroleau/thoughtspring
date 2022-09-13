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
                            <ul>
                                <li>New, fresh website builds -
                                     or a complete redesign of an existing website.</li>
                                <li>Built to rank highly in search engine results.</li>
                                <li>Designed for all device sizes (Mobile, Tablet, Desktop and beyond).</li>
                                <li>Crafted to be accessible to all, regardless of disability status or other.</li>
                                <li>
                                    Websites of any scope and scale, from individual owners to enterprise businesses.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Web & Mobile Applications</h3>
                            <ul>
                                <li>High-performance responsive applications for browsers.</li>
                                <li>Cutting edge mobile applications for iOS and Android.</li>
                                <li>Business-internal tools and dashboards to optimize your business.</li>
                                <li>Custom server-side applications and back-ends.</li>
                                <li>Single-page applications to replace your existing user-interface.</li>
                            </ul>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Automations & Analytics</h3>
                            <ul>
                                <li>User activity tracking for your website with Google Analytics.</li>
                                <li>Custom metric and KPI tracking.</li>
                                <li>
                                    Automation of manual processes, such as spreadsheet, report, or document creation.
                                </li>
                                <li>Contact forms and automated lead-generation tools.</li>
                                <li>Custom reporting tools and analytics dashboards.</li>
                            </ul>

                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Software Maintenance</h3>
                            <ul>
                                <li>New website features for an existing website.</li>
                                <li>Bug fixes, software improvements and enhancements.</li>
                                <li>Improvements for look and feel of website / application on mobile.</li>
                                <li>Database extract, transform and load procedures and updates.</li>
                                <li>
                                    Continuous Integration - Continuous Delivery Enhancements 
                                    and Cloud Deployments & Migrations
                                </li>
                            </ul>
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