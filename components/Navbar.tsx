import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavbarProps = {
    title:string;
    description:string;
}

const Navbar = ({title,description}:NavbarProps) => {
    const [isToggled,setIsToggled] = useState<boolean|null>(false);
    const [isRotating,setIsRotating] = useState<boolean>(false);
    const [isFading,setIsFading] = useState<boolean>(false);
    const [scrollHeight,setScrollHeight] = useState<number>(0);
    const [fadeTimeout, setFadeTimeout] = useState<NodeJS.Timeout>(setTimeout(()=>{},0));
    const hasBeenToggled = useRef(false);
    const router = useRouter();

    const handleToggle = () => {
        hasBeenToggled.current = true;
        setIsToggled(!isToggled);
        setIsRotating(true);
    };

    useEffect(()=> {
        const fadeOnScrollDown = () => {
            setScrollHeight(window.scrollY);
            if(window.scrollY > scrollHeight) {
                clearTimeout(fadeTimeout);
                setIsFading(true); 
                setFadeTimeout(setTimeout(()=>setIsFading(false),2000));
            } else setIsFading(false);
        };
        window.addEventListener('scroll',fadeOnScrollDown);
        return ()=>window.removeEventListener('scroll',fadeOnScrollDown);
    },[scrollHeight]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="ThoughtSpring Creative, LLC" />
                <meta property="og:description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header 
                className={`${styles.navContainer} ${isFading ? styles.fade : ''}`} 
                onTransitionEnd={()=>setFadeTimeout(setTimeout(()=>setIsFading(false),1500))}>
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