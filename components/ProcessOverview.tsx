import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/ProcessOverview.module.scss';
import StyledButton from './StyledButton';

const ProcessOverview = () => {
    const router = useRouter();
    return (
        <section className={styles.container}>
            <div className={styles.flexWrapper}>
                <h2 className={styles.title}>Our Process</h2>
                <div className={styles.body}>
                    <article className={styles.timeline}>
                        <div className={styles.discovery}>
                            <div className={styles.node1}></div>
                            <div className={styles.vertex1}></div>
                            <div>
                                <h6>Discovery</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className={styles.design}>
                            <div className={styles.node2}></div>
                            <div className={styles.vertex2}></div>
                            <div>
                                <h6>Design</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className={styles.development}>
                            <div className={styles.node3}></div>
                            <div className={styles.vertex3}></div>
                            <div>
                                <h6>Development</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className={styles.delivery}>
                            <div className={styles.node4}></div>
                            <div>
                                <h6>Delivery</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className={styles.action}>
                        <p>
                            <strong>Want to know how competetive your website is? </strong>
                            <span>Get a free website assessment from us.</span>
                        </p>
                        <StyledButton innerText='FREE WEBSITE ASSESSMENT' 
                            backgroundColor={styles.blue} 
                            color={styles.white} 
                            fontSize={"large"}
                            onClick={()=>router.push("/contact")} />
                    </article>
                </div>
            </div>
        </section>
    );
};

export default ProcessOverview;