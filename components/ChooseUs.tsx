import React, { useEffect, useState } from 'react';
import styles from '../styles/ChooseUs.module.scss';
import ServicesMeta from './ServicesMeta';
import WebsiteAssessment from './WebsiteAssessment';

const ChooseUs = () => {
    const offerings = ['website','application','feature','design','business automation', 'analytics platform'];
    const [offering,setOffering] = useState<number>(0);
    const [changeOffering,setChangeOffering] = useState<boolean>(true);

    const rotateOffering = () => {
        setOffering(offering < offerings.length - 1 ? offering + 1 : 0);
        setChangeOffering(true);
    };

    return (
        <section className={styles.container}>
            <section className={styles.flexWrapper}>
                <h2 className={styles.title}>
                    Choose us to build your <span 
                        className={changeOffering ? styles.changeWord : ''}
                        onAnimationStart={()=>setTimeout(()=>rotateOffering(),4050)}
                        onAnimationEnd={()=>setChangeOffering(false)}
                    >
                        {offerings[offering] || 'website'}
                    </span>
                </h2>
                <div className={styles.body}>
                    <div>
                        <ServicesMeta />
                    </div>
                    <div>
                        <WebsiteAssessment />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ChooseUs;