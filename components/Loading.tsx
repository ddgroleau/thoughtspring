import Image from 'next/image';
import React from 'react';
import styles from '../styles/Loading.module.scss';

const Loading = ({isLoading}:{isLoading:boolean}) => {
    return (
        <section className={`${!isLoading ? styles.hidden : styles.container}`}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
        </section>
    );
};

export default Loading;