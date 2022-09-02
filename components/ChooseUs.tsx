import React, { useEffect, useState } from 'react';
import styles from '../styles/ChooseUs.module.scss';
import ServicesMeta from './ServicesMeta';
import WebsiteAssessment from './WebsiteAssessment';

const ChooseUs = () => {
    const words = ['website','application','feature','design','business automation', 'analytics platform'];
    const [wordIndex,setWordIndex] = useState<number>(0);

    useEffect(()=> {
        setTimeout(()=> {
            setWordIndex(wordIndex < words.length - 1 ? wordIndex + 1 : 0);
        },4000);
    },[wordIndex]);

    return (
        <section className={styles.container}>
            <section className={styles.flexWrapper}>
                <h2 className={styles.title}>
                    Choose us to build your <span key={words[wordIndex]} className={styles.changeWord}>
                        {words[wordIndex]}</span>
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