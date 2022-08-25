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
                    <h1 className={styles.title}>Take your business to the next level.</h1>
                </div>
                <div className={styles.action}>
                    <Image src="/logo-green.svg" height={275} width={262} alt="ThoughtSpring Creative" />
                    <StyledButton 
                        innerText='GET STARTED' 
                        backgroundColor={styles.green} 
                        color={styles.white} 
                        fontSize={"x-large"}
                        onClick={()=>router.push("/contact")}
                    />
                </div>
            </div>
        </section>
    );
};

export default BrandHero;