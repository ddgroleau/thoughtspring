import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useRef, useState } from 'react';
import { ConsentContext } from '../pages/_app';
import styles from '../styles/ConsentBanner.module.scss';

const ConsentBanner = () => {
    const {consent, updateConsent} = useContext(ConsentContext);
    const [hideBanner, setHideBanner] = useState<boolean>(consent);
    const router = useRouter();

    const handleClick = (accepts:boolean) => {
        if(accepts) {
            localStorage.setItem("consent","true");
            setHideBanner(true);
        } else {
            router.push("https://google.com");
        }
    };

    return (
        <section 
            className={`${styles.container} ${hideBanner ? styles.fadeOut : styles.fadeIn}`} 
            onAnimationEnd={()=>{ if(hideBanner) updateConsent(true); }}
        >
            <div className={styles.flexWrapper}>
                <p className={styles.text}>
                    We use cookies to provide a better browsing experience. We strive to ensure 
                    our services are accessible to all. By using this website,
                    you understand and accept all statements outlined in our <Link 
                        href="/privacy">Privacy Policy</Link>, <Link 
                        href="/terms-of-service">Terms of Service</Link>, <Link 
                        href="/terms-of-service">Disclaimer & Cookie Policy</Link> and 
                        our <Link href="/accessibility">Accessibility Statement</Link>. Please visit
                    these links for more information.
                </p>
                <div className={styles.actions}>
                    <button onClick={()=>handleClick(true)} className={styles.accept} type="button">ACCEPT ALL</button>
                    <button onClick={()=>handleClick(false)} className={styles.reject} type="button">REJECT ALL</button>
                </div>
            </div>
        </section>
    );
};

export default ConsentBanner;