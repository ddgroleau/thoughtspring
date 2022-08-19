import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isToggled,setIsToggled] = useState<boolean|null>(false);
    const [isRotating,setIsRotating] = useState<boolean>(false);
    const hasBeenToggled = useRef(false);
    const router = useRouter();

    const handleToggle = () => {
        hasBeenToggled.current = true;
        setIsToggled(!isToggled);
        setIsRotating(true);
    };

    return (
        <>
            <Head>
                <title>ThoughtSpring - Web Design & Development</title>
                <meta name="description" content={`New England's leading web design and development company. 
            We build websites, applications, and custom tools for business automations and analytics.
            Our developers are also available to join your team and bring your project to the finish-line!
            ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
            and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.navContainer}>
                <nav className={styles.nav}>
                    <button className={styles.navLogo} onClick={()=>router.push("/")}>
                        <Image src="/logo-sm.png" height={46} width={180} alt={"ThoughtSpring Creative LLC."} />
                    </button>
                    <section 
                        className={`${styles.navLinks} 
                        ${isToggled ? hasBeenToggled.current 
            ? styles.navLinksOpen : '' : hasBeenToggled.current ? styles.navLinksClosed : ''}`}
                    >
                        <span className={router.pathname === "/work" ? styles.active : ""}>
                            <Link href={"/work"}>Our Work</Link>
                        </span>
                        <span className={router.pathname === "/services" ? styles.active : ""}>
                            <Link href={"/services"}>Services</Link>
                        </span>
                        <span className={router.pathname === "/about" ? styles.active : ""}>
                            <Link href={"/about"} >About</Link>
                        </span>
                        <span className={router.pathname === "/contact" ? styles.active : ""}>
                            <Link href={"/contact"} >Contact</Link>
                        </span>
                    </section>
                    <button 
                        className={`${styles.mobileMenu} ${isRotating ? styles.rotate : undefined}`} 
                        onClick={handleToggle}
                        onAnimationEnd={()=>setIsRotating(false)}
                    >
                        <Image src="/hamburger.svg" height={20} width={44} alt={"Toggle mobile menu"} />
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Navbar;