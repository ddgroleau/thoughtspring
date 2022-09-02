/* eslint-disable max-len */
import React from 'react';
import styles from '../styles/ServicesSnapshot.module.scss';
import ServiceCard from './ServiceCard';
   
const ServicesSnapshot = () => {
    return (
        <section className={styles.container}>
            <div className={styles.flexWrapper}>
                <h2 className={styles.title}>What can we build for you?</h2>
                <div className={styles.servicesContainer}>
                    <ServiceCard 
                        title='Website Design & Development' 
                        imgSrc='/screen-icon.svg' 
                        body='Beautiful, responsive creations that will bring customers to you.'
                    />
                    <ServiceCard 
                        title='Web & Mobile Applications' 
                        imgSrc='/app-icon.svg' 
                        body='Improve the quality and value of your offerings with a high-performance tool or digital experience.'
                    />
                    <ServiceCard 
                        title='Automations & Analytics' 
                        imgSrc='/analytics-icon.svg' 
                        body='Upgrade your efficiency and gain valuable insights into your business.'
                    />
                    <ServiceCard 
                        title='Software Maintenance' 
                        imgSrc='/dev-icon.svg' 
                        body='Have a website or an application and need a new feature, or need to fix a bug? We can help.'
                    />
                </div>
            </div>
        </section>
    );
};
   
export default ServicesSnapshot;