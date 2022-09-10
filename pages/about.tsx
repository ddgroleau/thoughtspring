import Image from 'next/image';
import Link from 'next/link';
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
                <section className={styles.hero}>
                    <div className={styles.heroImg}>
                        <div className={styles.heroContent}>
                            <div className={styles.flexWrapper}>
                                <h1 className={styles.title}>
                                    New England's leading software design and development company.
                                </h1>
                                <p>
                                    We are a veteran-owned software development company located in Portland, 
                                    ME, and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.
                                </p>
                                <p>
                                    We build websites, applications, and custom tools 
                                    for business automations and analytics. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.body}>
                    <div className={styles.content}>
                        <h2 className={styles.subheading}>Our Story</h2>
                        <p>
                            Since 2022, ThoughtSpring Creative, LLC has been dedicated to 
                            increasing our customers' revenue potential by providing high quality 
                            web development products and services.
                        </p>
                        <p>
                            Our main goal is to create high quality, performant software 
                            that will enable businesses to grow and increase their bottom line.
                        </p>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.subheading}>Our Team</h2>
                        <div className={styles.avatar}>
                            <div className={styles.avatarImg}>
                                <Link href="https://www.linkedin.com/in/dangroleau/">
                                    <Image src={"/headshot.jpg"} height={150} width={150} alt="Dan Groleau - Owner"/>
                                </Link>
                            </div>
                            <div className={styles.avatarText}>
                                <h3>Dan Groleau</h3>
                                <p>Principle Software Engineer & Owner/Founder</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Dan is our principle software engineer and owner/founder. 
                                Dan has worked in a variety of different industries, including defense, 
                                supply chain, construction and health care.
                            </p>
                            <p>
                                Dan is a former United States Army Captain, 
                                and holds a Master's in Business Administration 
                                from Ohio University.
                            </p>
                        </div>
                    </div>
                   
                </section>
            </div>
        </Layout>
    );
};

export default About;