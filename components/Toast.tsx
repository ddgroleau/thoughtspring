import React, { useEffect, useState } from 'react';
import styles from '../styles/Toast.module.scss';

export interface ToastMessage {
    message:string;
    success:boolean
}

type ToastProps = {
    messages:ToastMessage[];
}

type ToastItemProps = {
    message:ToastMessage;
}

const Toast = ({messages=[]}:ToastProps) => {
    return (
        <section className={styles.container}>
            {messages.map((message)=> {
                return (
                    <ToastItem message={message} key={messages.indexOf(message)} />
                );
            })}
        </section>
    );
};

export default Toast;

const ToastItem = ({message}:ToastItemProps) => {
    const [isMounted, setIsMounted] = useState(true);

    useEffect(()=> {
        const UNMOUNT_DELAY_MS = 3000;
        if(isMounted) {
            setTimeout(()=>{
                setIsMounted(false);
            },UNMOUNT_DELAY_MS);
        }
    },[]);

    return (
        <div 
            className={`
            ${styles.message} 
            ${message.success ? styles.success : styles.error} 
            ${isMounted ? styles.fadeInUp : styles.fadeOutDown}
            `}
        >
            {message.message}
        </div>
    );
};


