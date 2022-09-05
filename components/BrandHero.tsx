import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/BrandHero.module.scss';
import StyledButton from './StyledButton';

const BrandHero = () => {
    const router = useRouter();
    return (
        <section className={styles.container}>
            <div className={styles.flexWrapper}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Run your business  - while our software grows your business.</h1>
                </div>
                <div className={styles.action}>
                    <Image src="/logo-green.svg" height={275} width={262} alt="ThoughtSpring Creative" />
                    <StyledButton 
                        innerText="CONTACT US" 
                        backgroundColor={styles.white} 
                        color={styles.blue} 
                        fontSize={"x-large"}
                        onClick={()=>router.push("/contact")}
                    />
                </div>
            </div>
        </section>
    );
};

export default BrandHero;