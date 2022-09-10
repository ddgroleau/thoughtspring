import React from 'react';
import styles from '../styles/ContactForm.module.scss';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    return (
        <form className={styles.container}>
            <div className={styles.formInput}>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" placeholder='Enter your email' />
            </div>
            <div className={styles.formInput}>
                <label htmlFor='message'>Your message to us</label>
                <textarea id='message'/>
            </div>
            <div className={styles.formActions}>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
};

export default ContactForm;