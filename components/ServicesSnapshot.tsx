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
                        title='Web Applications' 
                        imgSrc='/app-icon.svg' 
                        body='Complex interfaces and services that will boost the user experience.'
                    />
                    <ServiceCard 
                        title='Automations & Analytics' 
                        imgSrc='/analytics-icon.svg' 
                        body='Upgrade your efficiency and gain valuable insights into your business.'
                    />
                    <ServiceCard 
                        title='Development Resources' 
                        imgSrc='/dev-icon.svg' 
                        body='Need an expert on your team? Our developers are ready to join your project.'
                    />
                </div>
            </div>
        </section>
    );
};
   
export default ServicesSnapshot;