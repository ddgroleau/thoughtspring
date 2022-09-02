import Image from 'next/image';
import React from 'react';
import styles from '../styles/ServicesMeta.module.scss';

const ServicesMeta = () => {
    return (
        <section className={styles.container}>
            <div className={styles.meta}>
                <Image src="/responsive.svg" height={50} width={50} alt="Responsive Designs" />
                <p>Responsive Designs for Every Device</p>
            </div>
            <div className={styles.meta}>
                <Image src="/seo.svg" height={50} width={50} alt="SEO" />
                <p>Search Engine Optimation (SEO)</p>
            </div>
            <div className={styles.meta}>
                <Image src="/custom.svg" height={50} width={50} alt="Custom Apps" />
                <p>Custom Applications and Features</p>
            </div>
            <div className={styles.meta}>
                <Image src="/hosting.svg" height={50} width={50} alt="Hosting" />
                <p>Hosting, Monitoring and Maintenance</p>
            </div>
            <div className={styles.meta}>
                <Image src="/cro.svg" height={50} width={50} alt="CRO" />
                <p>Conversion Rate Optimation (CRO) & Google Analytics</p>
            </div>

        </section>
    );
};

export default ServicesMeta;