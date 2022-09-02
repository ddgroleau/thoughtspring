import Image from 'next/image';
import React from 'react';
import styles from '../styles/ServiceCard.module.scss';

type ServiceCardProps = {
    imgSrc:string,
    title:string,
    body:string
}

const ServiceCard = ({imgSrc,title,body}:ServiceCardProps) => {
    return (
        <article className={styles.container}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <Image src={imgSrc} height={40} width={40} alt={title}/>
                </div>
                <p className={styles.title}>{title}</p>
            </div>
            <p>{body}</p>
        </article>
    );
};

export default ServiceCard;