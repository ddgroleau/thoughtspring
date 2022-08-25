import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../styles/PortfolioSnapshot.module.scss';
import StyledButton from './StyledButton';

const PortfolioSnapshot = () => {
    const router= useRouter();

    return (
        <section className={styles.container}>
            <div className={styles.flexWrapper}>
                <div className={styles.images}>
                    <div className={styles.img}>
                        <Image src="/rtr-thumb.png" width={360} height={256} alt="E Commerce Store" />
                    </div>
                    <div className={styles.img}>
                        <Image src="/blog-thumb.png" width={360} height={256} alt="Blog" />
                    </div>
                </div>
                <div className={styles.action}>
                    <h2 className={styles.title}>Web products, on time and on budget.</h2>
                    <StyledButton innerText='CHECK OUT OUR WORK' 
                        backgroundColor={styles.black} 
                        color={styles.white} 
                        fontSize={"large"}
                        onClick={()=>router.push("/work")} />
                </div>
            </div>
        </section>
    );
};

export default PortfolioSnapshot;