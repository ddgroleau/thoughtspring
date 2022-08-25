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
                <h4 className={styles.title}>{title}</h4>
            </div>
            <p>{body}</p>
        </article>
    );
};

export default ServiceCard;