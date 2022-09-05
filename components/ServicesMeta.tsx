import Image from 'next/image';
import React from 'react';
import styles from '../styles/ServicesMeta.module.scss';

const ServicesMeta = ({iconTheme}:{iconTheme:string}) => {
    const isWhite = iconTheme === "white";
    return (
        <section className={styles.container}>
            <div className={styles.meta}>
                <Image src={isWhite ? "/responsive-white.svg" : "/responsive.svg"} 
                    height={50} width={50} alt="Responsive Designs" />
                <p>Responsive Designs for Every Device</p>
            </div>
            <div className={styles.meta}>
                <Image src={isWhite ? "/seo-white.svg" : "/seo.svg"} height={isWhite ? 40 : 50} width={50} alt="SEO" />
                <p>Search Engine Optimization (SEO)</p>
            </div>
            <div className={styles.meta}>
                <Image src={isWhite ? "/custom-white.svg" : "/custom.svg"} 
                    height={isWhite ? 40 : 50} width={50} alt="Custom Apps" />
                <p>Custom Applications and Features</p>
            </div>
            <div className={styles.meta}>
                <Image src={isWhite ? "/hosting-white.svg" : "/hosting.svg"} 
                    height={isWhite ? 40 : 0} width={50} alt="Hosting" />
                <p>Hosting, Monitoring and Maintenance</p>
            </div>
            <div className={styles.meta}>
                <Image src={isWhite ? "/cro-white.svg" : "/cro.svg"} height={isWhite ? 40 : 50} width={50} alt="CRO" />
                <p>Conversion Rate Optimization (CRO) & Google Analytics</p>
            </div>

        </section>
    );
};

export default ServicesMeta;