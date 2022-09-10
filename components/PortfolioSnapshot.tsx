import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../styles/PortfolioSnapshot.module.scss';
import StyledLink from './StyledLink';

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
                    <h3 className={styles.title}>Software design and development with proven results.</h3>
                    <StyledLink innerText='CHECK OUT OUR WORK' 
                        backgroundColor={styles.white} 
                        color={styles.black} 
                        fontSize={"large"}
                        href="/contact"
                    ></StyledLink>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSnapshot;