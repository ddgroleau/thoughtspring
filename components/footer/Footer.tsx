import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
    const router = useRouter();
    return (
        <footer className={styles.container}>
            <section className={styles.topContainer}>
                <div className={styles.top}>
                    <nav className={styles.nav}>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent}><Link  href={"/work"}>Our Work</Link></span>
                            <span className={styles.navChild} ><Link href={"/work"}>Testimonials</Link></span>
                            <span className={styles.navChild} ><Link href={"/work"}>Portfolio</Link></span>
                        </span>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent}><Link  href={"/services"}>Services</Link></span>
                            <span className={styles.navChild} ><Link href={"/services"}>Our Process</Link></span>
                            <span className={styles.navChild} ><Link href={"/services"}>Web Development</Link></span>
                        </span>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent}><Link  href={"/about"} >About</Link></span>
                            <span className={styles.navChild} ><Link href={"/about"}>Our Story</Link></span>
                            <span className={styles.navChild} ><Link href={"/about"}>Developers</Link></span>
                        </span>
                        <span className={styles.navCategory}>
                            <span className={styles.navParent}><Link href={"/contact"} >Contact</Link></span>
                            <span className={styles.navChild} ><Link href={"/contact"}>Email Us</Link></span>
                            <span className={styles.navChild} ><Link href={"/contact"}>Get a Quote</Link></span>
                        </span>
                    </nav>
                    <button className={styles.logo} onClick={()=>router.push("/")}>
                        <Image src="/logo-svg-sm.svg" height={83} width={324} alt={"ThoughtSpring Creative LLC."} />
                    </button>
                    <section className={styles.social}>
                        <div className={styles.socialRow}>
                            <Link href="https://facebook.com" passHref>
                                <Image src="/facebook-icon.svg" width={35} height={35} alt="Twitter Feed" />
                            </Link>
                            <Link href="https://instagram.com" passHref>
                                <Image src="/instagram-icon.svg" width={35} height={35} alt="Twitter Feed" />
                            </Link>
                            <Link href="https://youtube.com" passHref>
                                <Image src="/youtube-icon.svg" width={35} height={35} alt="Twitter Feed" />
                            </Link>
                        </div>
                        <div className={styles.socialRow}>
                            <Link href="https://linkedin.com" passHref>
                                <Image src="/linkedin-icon.svg" width={35} height={35} alt="Twitter Feed" />
                            </Link>
                            <Link href="https://twitter.com" passHref>
                                <Image src="/twitter-icon.svg" width={35} height={35} alt="Twitter Feed" />
                            </Link>
                            <Link href="mailto:ddgroleau.developer@gmail.com" passHref>
                                <Image src="/email-icon.svg" width={35} height={35} alt="Twitter Feed" />
                            </Link>
                
                        </div>
                    </section>
                </div>
            </section>
            <section className={styles.bottom}>
                <div className={styles.bottomLinks}>
                    <small>©{new Date().getFullYear()} ThoughtSpring Creative LLC.</small>
                    <small><Link href="/privacy">Privacy Policy</Link></small>
                </div>
            </section>
        </footer>
    );
};

export default Footer;