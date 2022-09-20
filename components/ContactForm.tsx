import React, { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from 'react';
import styles from '../styles/ContactForm.module.scss';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from 'axios';
import Toast, { ToastMessage } from './Toast';
import FormValidator from '../services/FormValidator';
import ResponseMessages from '../models/ResponseMessages';
import Loading from './Loading';

const ContactForm = () => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [email,setEmail] = useState<string>('');
    const [message,setMessage] = useState<string>('');
    const MAX_MESSAGE_LENGTH = 200;
    const [remainingChars,setRemainingChars] = useState<number>(MAX_MESSAGE_LENGTH);
    const emailRef = useRef()  as MutableRefObject<HTMLInputElement>;
    const msgRef = useRef()  as MutableRefObject<HTMLTextAreaElement>;

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handleTextAreaChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        if(remainingChars <= 0 && event.target.value.length >= message.length) return;
        setRemainingChars(MAX_MESSAGE_LENGTH - event.target.value?.length);
        setMessage(event.target.value);
    };

    const displayMessage = (success:boolean, message:string) => {
        setIsLoading(false);
        return setToasts([...toasts,{ success: success, message: message}]);
    };

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        if(FormValidator.isInvalidEmail(email as string)) {
            if(emailRef.current) emailRef.current.focus();
            return displayMessage(false, ResponseMessages.INVALID_EMAIL);
        }
        if(FormValidator.isInvalidMessage(message as string)) {
            if(msgRef.current) msgRef.current.focus();
            return displayMessage(false, ResponseMessages.INVALID_MSG);
        }
        if (!executeRecaptcha) return;

        const reCaptchaToken:string = await executeRecaptcha("submitContactForm");

        if(!reCaptchaToken)   
            return displayMessage(false, ResponseMessages.RECAPTCHA_ERR);

        const submission = await submitContactForm(reCaptchaToken);

        if(submission && submission.data) {
            setEmail('');
            setMessage('');
            return displayMessage(true, submission.data.message);
        }

        if(submission && submission.response)
            return displayMessage(false, submission.response.data.message);

        return displayMessage(false, ResponseMessages.INTERNAL_ERR);
    };

    const submitContactForm = async (reCaptchaToken:string) => 
        await axios.post("/api/contact", {
            email: email,
            message: FormValidator.sanitizeMessage(message as string),
            reCaptchaToken : reCaptchaToken
        }).catch(error => error);

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.formInput}>
                <label htmlFor='email'>Email</label>
                <input 
                    type="email" 
                    ref={emailRef}
                    id="email" 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.formInput}>
                <label htmlFor='message'>Your message to us</label>
                <textarea ref={msgRef} value={message} id='message' onChange={handleTextAreaChange}/>
                <div className={styles.remainingChars}>
                    <small>Remaining Characters: {remainingChars}</small>
                </div>
            </div>
            <div className={styles.formActions}>
                <button type="submit">SUBMIT</button>
            </div>
            <Toast messages={toasts}/>
            <Loading isLoading={true} />
        </form>
    );
};

export default ContactForm;